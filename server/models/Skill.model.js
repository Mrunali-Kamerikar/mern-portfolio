import mongoose from "mongoose";

/**
 * Skill Schema
 * Represents a technical skill displayed on portfolio
 */
const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Database", "Tools", "Other"]
    },
    level: {
      type: Number,
      required: true,
      min: 1,
      max: 100
    }
  },
  {
    timestamps: true
  }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
