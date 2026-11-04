import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import * as schema from "./schema/index.js";

let dbInstance: ReturnType<typeof createDb> | null = null;

function createDb(databaseUrl: string) {
  const pool = new Pool({ connectionString: databaseUrl });
  return drizzle({ client: pool, schema });
}

export function getDb(databaseUrl?: string): ReturnType<typeof createDb> {
  if (!dbInstance) {
    const url = databaseUrl ?? process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not set");
    }
    dbInstance = createDb(url);
  }
  return dbInstance;
}

export type Database = ReturnType<typeof getDb>;
