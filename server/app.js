import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import projectRoutes from "./routes/project.routes.js";

app.use("/api/projects", projectRoutes);

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
