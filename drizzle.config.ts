import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import fs from "fs";

if (fs.existsSync(".env.local")) {
  config({ path: ".env.local" });
} else {
  config({ path: ".env" });
}

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/library_db",
  },
});
