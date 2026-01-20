import mongoose from "mongoose";

/**
 * Admin Schema
 * Only one admin is expected for portfolio CMS
 */
const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6
    }
  },
  {
    timestamps: true
  }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
