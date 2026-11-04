import type { Request, Response, NextFunction } from "express";
import { getAuth } from "../auth/auth.js";
import { fromNodeHeaders } from "better-auth/node";

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const auth = getAuth();
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    req.user = session.user as unknown as Express.Request["user"];
    req.session = session.session as unknown as Express.Request["session"];

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired session",
    });
  }
}
