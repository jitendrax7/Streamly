// models/Admin.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  otp: String,
  otpExpire: Date,
});

export default mongoose.model("Admin", adminSchema);
