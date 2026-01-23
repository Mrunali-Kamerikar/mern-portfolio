import express from "express";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill
} from "../controllers/skill.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getSkills);

// Admin only
router.post("/", protect, addSkill);
router.put("/:id", protect, updateSkill);
router.delete("/:id", protect, deleteSkill);

export default router;
