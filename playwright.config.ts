import { defineConfig, devices } from "@playwright/test";

/**
 * The suite runs against a **production** build, not `next dev`.
 *
 * That is not incidental: the admin routes are gated on
 * `NODE_ENV === "production"`, the theme script and the route chunks only take
 * their real shape after a build, and every metadata assertion is about what
 * actually gets served. A dev server would quietly pass tests that production
 * fails.
 *
 * Note that `npm run build` and `npm run dev` must never be running at the same
 * time — they fight over `.next` and leave the CSS frozen. Stop the dev server
 * before running this.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"]],

  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] },
      // The rail, the pin and the bundle checks are all desktop-shaped.
      testIgnore: ["**/rail.spec.ts", "**/reduced-motion.spec.ts", "**/bundle.spec.ts"],
    },
  ],

  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 10 * 60 * 1000,
    stdout: "pipe",
  },
});
