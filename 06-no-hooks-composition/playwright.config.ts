import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: "**/*.e2e.ts",
  webServer: {
    command: "npm run dev",
    port: 1234,
  },
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: "http://localhost:1234/",
  },
});
