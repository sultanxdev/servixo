import { Router } from "express";

const router: Router = Router();

router.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
      version: "0.0.1",
      environment: process.env.NODE_ENV ?? "development",
    },
  });
});

export default router;
