const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const User = require("../models/User");
const { protect } = require("./adminRoutes");

/* =========================
   CANONICAL TRACKING STAGES
========================= */
const TRACKING_STAGES = [
  "Signed Offer Letter",
  "LMIA Issued",
  "ETA Approved"
];

const formatUser = (doc) => {
  if (!doc) return doc;
  const user = doc.toObject ? doc.toObject() : { ...doc };
  if (Array.isArray(user.tracking) && user.tracking.length > 0) {
    user.tracking = TRACKING_STAGES.map((title, i) => ({
      _id: user.tracking[i]?._id,
      title,
      status: user.tracking[i]?.status || "Pending"
    }));
  } else {
    user.tracking = TRACKING_STAGES.map((title) => ({
      title,
      status: "Pending"
    }));
  }
  return user;
};

/* =========================
   MULTER CONFIG
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir =
      file.mimetype === "application/pdf"
        ? "uploads/pdfs/"
        : "uploads/images/";

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, "_");
    cb(null, `${Date.now()}-${cleanName}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype.startsWith("image/")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF and image files allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

/* =========================
   ADD USER (VISA & OFFER LETTER)
========================= */
router.post(
  "/",
  protect,
  upload.fields([
    { name: "document", maxCount: 1 },
    { name: "offerLetter", maxCount: 1 },
    { name: "image", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const {
        name,
        passportNumber,
        dob,
        salary,
        status,
        refId: customRefId
      } = req.body;

      // ✅ Validation
      if (!name || !passportNumber) {
        return res
          .status(400)
          .json({ message: "Name and Passport Number are required" });
      }

      // ✅ Ref ID: Use custom if provided, otherwise auto-generate
      const refId =
        customRefId && customRefId.trim() !== ""
          ? customRefId.trim()
          : "VISA" + Date.now();

      // Check duplicate Ref ID
      const exists = await User.findOne({ refId });
      if (exists) {
        return res
          .status(400)
          .json({ message: "Reference ID already exists" });
      }

      const documentPath =
        req.files && req.files.document
          ? req.files.document[0].path.replace(/\\/g, "/")
          : req.body.document || "";

      const offerLetterPath =
        req.files && req.files.offerLetter
          ? req.files.offerLetter[0].path.replace(/\\/g, "/")
          : req.body.offerLetter || "";

      const imagePath =
        req.files && req.files.image
          ? req.files.image[0].path.replace(/\\/g, "/")
          : req.body.image || "";

      const user = new User({
        name,
        refId,
        passportNumber,
        dob: dob || null,
        salary: salary || "",
        status: status || "Pending",

        // ✅ Default 3 tracking stages
        tracking: [
          { title: "Signed Offer Letter", status: "Pending" },
          { title: "LMIA Issued", status: "Pending" },
          { title: "ETA Approved", status: "Pending" }
        ],

        document: documentPath,
        offerLetter: offerLetterPath,
        image: imagePath
      });

      await user.save();
      res.status(201).json(formatUser(user));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

/* =========================
   GET ALL USERS (ADMIN)
========================= */
router.get("/", protect, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      status
    } = req.query;

    const query = {};

    /* Search by Name, Ref ID or Passport Number */
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { refId: { $regex: search, $options: "i" } },
        { passportNumber: { $regex: search, $options: "i" } }
      ];
    }

    /* Filter by Status */
    if (status && status !== "All") {
      query.status = status;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const data = await User.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await User.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)) || 1,
      data: data.map(formatUser)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET BY ID (ADMIN)
========================= */
router.get("/id/:id", protect, async (req, res) => {
  try {
    const data = await User.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(formatUser(data));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   GET BY REF ID OR PASSPORT (PUBLIC VERIFY)
========================= */
router.get("/:refId", async (req, res) => {
  try {
    const query = req.params.refId.trim();

    // Match by refId or passportNumber (case-insensitive regex for flexibility)
    const data = await User.findOne({
      $or: [
        { refId: { $regex: `^${query}$`, $options: "i" } },
        { passportNumber: { $regex: `^${query}$`, $options: "i" } }
      ]
    });

    if (!data) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(formatUser(data));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   UPDATE USER
========================= */
router.put("/:id", protect, async (req, res) => {
  try {
    const { status, tracking, ...rest } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Record not found" });
    }

    /* Update Basic Fields */
    Object.assign(user, rest);

    /* Update Status */
    if (status) {
      const validStatus = ["Pending", "Approved", "Rejected"];
      if (!validStatus.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      user.status = status;
    }

    /* Update Tracking Steps with canonical titles */
    if (tracking && Array.isArray(tracking)) {
      user.tracking = TRACKING_STAGES.map((title, i) => ({
        _id: tracking[i]?._id,
        title,
        status: tracking[i]?.status || "Pending"
      }));
    }

    await user.save();
    res.json(formatUser(user));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   DELETE USER
========================= */
router.delete("/:id", protect, async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
