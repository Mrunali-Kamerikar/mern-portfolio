import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import projectRoutes from "./routes/project.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import experienceRoutes from "./routes/experience.routes.js";

app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experience", experienceRoutes);

const app = express();

/**
 * Global Middleware
 */
app.use(cors());
app.use(express.json());

/**
 * Routes
 */
app.use("/api/auth", authRoutes);

/**
 * Health Check (Optional but professional)
 */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/**
 * Error Handling Middleware
 * Must be AFTER routes
 */
app.use(errorHandler);

export default app;
