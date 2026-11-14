import type { CorsOptions } from "cors";
import { getEnv, isDev } from "./env.js";

export function getCorsOptions(): CorsOptions {
  const env = getEnv();

  return {
    origin: isDev()
      ? [env.FRONTEND_URL, env.BETTER_AUTH_URL]
      : env.TRUSTED_ORIGINS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  };
}
