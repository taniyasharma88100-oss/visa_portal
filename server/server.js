const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors({
  origin: [
    "http://localhost:5173",
    
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   STATIC FILES (PDF + IMAGE)
========================= */
app.use("/uploads", express.static("uploads"));

/* =========================
   DATABASE CONNECTION
========================= */
const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/visa_portal";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

/* =========================
   ROUTES
========================= */

// ✅ user routes (visa & offer letter)
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

// ✅ insurance routes (preserved)
const insuranceRoutes = require("./routes/insuranceRoutes");
app.use("/api/insurance", insuranceRoutes);

// ✅ admin routes (same as before)
const { router: adminRoutes } = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("🚀 Insurance API Running...");
});

/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV}`);
});