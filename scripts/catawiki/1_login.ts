/**
 * 1_login.ts — step 1 of the Catawiki review pipeline.
 *
 * Opens a headed Chromium against a persistent profile in `.catawiki/profile`
 * and parks on the submissions list. You log in by hand — including 2FA, cookie
 * banners and any bot check — and the profile keeps that session for every later
 * step, so this only needs running again when the session expires.
 *
 * Login is detected by the list itself rendering, not by a URL: Catawiki
 * bounces through several redirects and landing on the right URL proves nothing.
 * Every row carries a `Lot <digits>` label, so that text appearing is the honest
 * signal that we are through and looking at real data.
 *
 * Usage:
 *   npx tsx scripts/catawiki/1_login.ts
 */

import { chromium } from "@playwright/test";

import { ensureDir, PROFILE_DIR, submissionsUrl, WORK_DIR } from "./_shared";

const LOGIN_TIMEOUT_MS = 10 * 60 * 1000;

async function main() {
  ensureDir(WORK_DIR);
  ensureDir(PROFILE_DIR);

  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: false,
    viewport: { width: 1600, height: 1000 },
    locale: "en-GB",
  });

  const page = context.pages()[0] ?? (await context.newPage());

  console.log("Opening the submissions list…");
  await page.goto(submissionsUrl(1), { waitUntil: "domcontentloaded" });

  console.log("");
  console.log("  → Log in in the browser window if prompted.");
  console.log("  → Waiting for the submissions list to render (up to 10 min).");
  console.log("");

  try {
    await page
      .getByText(/Lot\s+\d{6,}/)
      .first()
      .waitFor({ timeout: LOGIN_TIMEOUT_MS });
  } catch {
    console.error("Never saw a lot row. Not logged in, or the list markup changed.");
    console.error(`Current URL: ${page.url()}`);
    await context.close();
    process.exit(1);
  }

  const rows = await page.getByText(/Lot\s+\d{6,}/).count();
  console.log(`Logged in — ${rows} lot rows visible on page 1.`);
  console.log(`Session saved to ${PROFILE_DIR}`);
  console.log("Next: npx tsx scripts/catawiki/2_probe.ts");

  await context.close();
}

void main();
