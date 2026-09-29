/**
 * 2_probe.ts — step 2 of the Catawiki review pipeline: recon before parsing.
 *
 * The seller dashboard is a logged-in SPA whose markup we cannot see from the
 * outside, and selectors written blind are how a scraper silently returns 208
 * empty rows. So nothing is parsed here. This step only collects evidence, into
 * `.catawiki/probe/`, and answers three questions for step 3:
 *
 *   1. Is there a JSON API behind the dashboard? If the list and order pages are
 *      fed by XHR, step 3 can call those endpoints with the session cookies and
 *      skip DOM parsing entirely — far more robust than selectors. Every JSON
 *      response is dumped, with its URL, so we can tell.
 *   2. How do we get each row's order URL? The `/f/seller/orders/<id>` link lives
 *      behind the row's `Actions` dropdown. Menus are often rendered into the DOM
 *      up front and merely hidden, in which case we can read all 23 hrefs off the
 *      page with no clicking. This checks before, and again after, one click.
 *   3. What year does a review date belong to? The order page shows "17 April"
 *      with no year. We need a `datetime`/`title` attribute or an API field;
 *      failing both, step 3 derives it from the order's paid date.
 *
 * Usage:
 *   npx tsx scripts/catawiki/2_probe.ts
 */

import fs from "fs";
import path from "path";
import { chromium, type BrowserContext, type Page } from "@playwright/test";

import {
  ensureDir,
  PROBE_DIR,
  PROFILE_DIR,
  SAMPLE_ORDER_URL,
  slug,
  submissionsUrl,
} from "./_shared";

/** Record every JSON-ish response a page makes, so we can spot a usable API. */
function captureJson(page: Page, tag: string) {
  const seen: { url: string; status: number; file: string }[] = [];

  page.on("response", async (res) => {
    const url = res.url();
    const type = res.headers()["content-type"] ?? "";
    if (!type.includes("json")) return;
    // Analytics and consent noise drowns out the real endpoints.
    if (/google|doubleclick|segment|sentry|cookielaw|onetrust|hotjar|datadog/i.test(url)) return;

    try {
      const body = await res.text();
      const file = path.join(PROBE_DIR, `${tag}__${slug(new URL(url).pathname)}.json`);
      fs.writeFileSync(file, `// ${url}\n// status ${res.status()}\n${body}`);
      seen.push({ url, status: res.status(), file });
    } catch {
      // Body already consumed or the request was aborted — not worth failing over.
    }
  });

  return seen;
}

async function probeList(context: BrowserContext) {
  const page = await context.newPage();
  const json = captureJson(page, "list");

  console.log("\n── List page 1 ───────────────────────────────");
  await page.goto(submissionsUrl(1), { waitUntil: "domcontentloaded" });
  await page
    .getByText(/Lot\s+\d{6,}/)
    .first()
    .waitFor({ timeout: 120_000 });
  await page.waitForTimeout(2500); // let late XHR settle

  const html = await page.content();
  fs.writeFileSync(path.join(PROBE_DIR, "list_page1.html"), html);

  const lotIds = await page.$$eval('a[href*="/l/"]', (as) =>
    as.map((a) => (a as HTMLAnchorElement).href).filter((h) => /\/l\/\d+/.test(h)),
  );
  const orderLinksBefore = await page.$$eval('a[href*="/seller/orders/"]', (as) =>
    as.map((a) => (a as HTMLAnchorElement).href),
  );

  console.log(`lot links in DOM:            ${lotIds.length}`);
  console.log(`order links in DOM (no click): ${orderLinksBefore.length}`);

  // If the menus are not pre-rendered, find out what one click costs us.
  let orderLinksAfter = orderLinksBefore;
  if (orderLinksBefore.length === 0) {
    const actions = page.getByRole("button", { name: /actions/i });
    const count = await actions.count();
    console.log(`"Actions" buttons found:      ${count}`);
    if (count > 0) {
      await actions.first().click();
      await page.waitForTimeout(1200);
      orderLinksAfter = await page.$$eval('a[href*="/seller/orders/"]', (as) =>
        as.map((a) => (a as HTMLAnchorElement).href),
      );
      console.log(`order links after one click:  ${orderLinksAfter.length}`);
      fs.writeFileSync(path.join(PROBE_DIR, "list_page1_menu_open.html"), await page.content());
      await page.keyboard.press("Escape");
    }
  }

  console.log(`JSON responses captured:      ${json.length}`);
  for (const j of json) console.log(`  ${j.status}  ${j.url}`);

  fs.writeFileSync(
    path.join(PROBE_DIR, "list_findings.json"),
    JSON.stringify(
      { lotLinks: lotIds.slice(0, 40), orderLinksBefore, orderLinksAfter, json },
      null,
      2,
    ),
  );

  await page.close();
  return { orderLinks: orderLinksAfter, json };
}

async function probeOrder(context: BrowserContext, url: string) {
  const page = await context.newPage();
  const json = captureJson(page, "order");

  console.log("\n── Order page ────────────────────────────────");
  console.log(url);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(3000);

  fs.writeFileSync(path.join(PROBE_DIR, "order_sample.html"), await page.content());

  const bodyText = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync(path.join(PROBE_DIR, "order_sample.txt"), bodyText);

  const hasReviews = /reviews?/i.test(bodyText);
  console.log(`"Review" text present:        ${hasReviews}`);

  // Anything carrying a machine-readable date is what saves us from "17 April".
  const timeEls = await page.$$eval("time, [datetime], [title]", (els) =>
    els
      .map((e) => ({
        tag: e.tagName.toLowerCase(),
        datetime: e.getAttribute("datetime"),
        title: e.getAttribute("title"),
        text: (e.textContent ?? "").trim().slice(0, 120),
      }))
      .filter((e) => e.datetime || (e.title && /\d/.test(e.title))),
  );
  console.log(`elements with a machine date: ${timeEls.length}`);

  console.log(`JSON responses captured:      ${json.length}`);
  for (const j of json) console.log(`  ${j.status}  ${j.url}`);

  fs.writeFileSync(
    path.join(PROBE_DIR, "order_findings.json"),
    JSON.stringify({ url, hasReviews, timeEls, json }, null, 2),
  );

  await page.close();
}

async function main() {
  ensureDir(PROBE_DIR);

  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: false,
    viewport: { width: 1600, height: 1000 },
    locale: "en-GB",
  });

  const { orderLinks } = await probeList(context);
  // Prefer a real order from the list; fall back to the one we were given.
  await probeOrder(context, orderLinks[0] ?? SAMPLE_ORDER_URL);

  console.log(`\nDumps written to ${PROBE_DIR}`);
  await context.close();
}

void main();
