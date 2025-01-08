import { defineConfig } from "drizzle-kit";


export default defineConfig({
    dialect: 'postgresql',
    schema: "./db/shema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DB_URL!,
    },
});




