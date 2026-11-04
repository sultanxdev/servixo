import { betterAuth } from "better-auth";
import { getAuthConfig } from "./auth.config.js";
import { getDb } from "../db/client.js";
import { getEnv } from "../config/env.js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export function getAuth() {
  if (!authInstance) {
    const env = getEnv();
    const db = getDb();
    authInstance = betterAuth(
      getAuthConfig(db, {
        secret: env.BETTER_AUTH_SECRET,
        baseURL: env.BETTER_AUTH_URL,
        trustedOrigins: env.TRUSTED_ORIGINS,
      }),
    );
  }
  return authInstance;
}
