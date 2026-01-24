import mongoose from "mongoose";

/**
 * Experience Schema
 * Represents work, internship, or learning experience
 */
const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    organization: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      default: "Remote"
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date
    },
    current: {
      type: Boolean,
      default: false
    },
    description: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
