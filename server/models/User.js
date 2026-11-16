const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  refId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  passportNumber: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date
  },
  salary: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  document: {
    type: String,
    default: ""
  },
  offerLetter: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: ""
  },
  tracking: [
    {
      title: {
        type: String,
        required: true
      },
      status: {
        type: String,
        enum: ["Pending", "Done"],
        default: "Pending"
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
