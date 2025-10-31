import { defineConfig, env } from "prisma/config";
import "dotenv/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});

// import "dotenv/config";
// import config = require("prisma/config");

// export default config.defineConfig({
//   schema: "./prisma/schema.prisma",
// });