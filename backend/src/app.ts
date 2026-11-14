import express, { type Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { getCorsOptions } from "./config/cors.js";
import { errorHandler } from "./middleware/error-handler.js";
import apiRoutes from "./routes/index.js";
import { getAuth } from "./auth/auth.js";
import { toNodeHandler } from "better-auth/node";

export function createApp(): Express {
  const app = express();

  // Security headers
  app.use(helmet());

  // CORS
  app.use(cors(getCorsOptions()));

  // Body parsing
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Better Auth handler — handles all /api/auth/* requests
  app.all("/api/auth/*splat", (req, res) => {
    const auth = getAuth();
    return toNodeHandler(auth)(req, res);
  });

  // API v1 routes
  app.use("/api/v1", apiRoutes);

  // 404 handler
  app.use((_req, res) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
    });
  });

  // Global error handler
  app.use(errorHandler);

  return app;
}
