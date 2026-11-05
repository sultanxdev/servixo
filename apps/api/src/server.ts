import "dotenv/config";
import { createApp } from "./app.js";
import { getEnv } from "./config/env.js";

const app = createApp();
const env = getEnv();

app.listen(env.PORT, () => {
  console.log(`🚀 Servixo API running at http://localhost:${env.PORT}`);
  console.log(`📋 Health check: http://localhost:${env.PORT}/api/v1/health`);
  console.log(`🔐 Auth endpoint: http://localhost:${env.PORT}/api/auth`);
  console.log(`🌍 Environment: ${env.NODE_ENV}`);
});

