import mongoose from "mongoose";

/**
 * Project Schema
 * Represents a single portfolio project
 */
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    shortDescription: {
      type: String,
      required: true,
      maxlength: 200
    },
    description: {
      type: String,
      required: true
    },
    techStack: {
      type: [String],
      required: true
    },
    githubUrl: {
      type: String,
      required: true
    },
    liveUrl: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
