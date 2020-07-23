const mongoose = require("mongoose");
const moment = require("moment");

let newUserSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  createdBy: { type: String, default: null },
  birthDate: { type: String },
  email: { type: String },
  password: { type: String },
  contactNo: { type: String, default: null },
  profilePic: { type: String, default: null },
  usertype: { type: String },
  loginPlatform: { type: String, default: null },
  socialFrdId: { type: String },
  createdDate: { type: Date, default: moment() },
  updatedDate: { type: Date },
  status: { type: String, default: "active" },
});

module.exports = new mongoose.model("user", newUserSchema);