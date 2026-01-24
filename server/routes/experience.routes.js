import express from "express";
import {
  getExperience,
  addExperience,
  updateExperience,
  deleteExperience
} from "../controllers/experience.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getExperience);

// Admin only
router.post("/", protect, addExperience);
router.put("/:id", protect, updateExperience);
router.delete("/:id", protect, deleteExperience);

export default router;
