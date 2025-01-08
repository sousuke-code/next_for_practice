import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

export default defineConfig({
    dialect: 'postgresql',
    schema: "./db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DB_URL!,
    },
});




