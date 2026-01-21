import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/auth.controller.js";

const router = express.Router();

// One-time admin registration
router.post("/register", registerAdmin);

// Admin login
router.post("/login", loginAdmin);

export default router;
