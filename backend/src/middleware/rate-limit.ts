import type { Request, Response, NextFunction } from "express";

interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

const store: RateLimitStore = {};

interface RateLimitOptions {
  windowMs: number;
  max: number;
  message?: string;
}

export function rateLimit(options: RateLimitOptions) {
  const {
    windowMs,
    max,
    message = "Too many requests, please try again later",
  } = options;

  // Clean up expired entries periodically
  const timer = setInterval(() => {
    const now = Date.now();
    for (const key of Object.keys(store)) {
      if (store[key] && store[key]!.resetTime < now) {
        delete store[key];
      }
    }
  }, windowMs);
  timer.unref?.();

  return (req: Request, res: Response, next: NextFunction): void => {
    const key = req.ip ?? "unknown";
    const now = Date.now();

    if (!store[key] || store[key]!.resetTime < now) {
      store[key] = { count: 1, resetTime: now + windowMs };
      next();
      return;
    }

    store[key]!.count++;

    if (store[key]!.count > max) {
      res.status(429).json({
        success: false,
        message,
      });
      return;
    }

    next();
  };
}

