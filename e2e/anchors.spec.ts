import { expect, test } from "@playwright/test";

import { HOME, HOME_ANCHORS } from "./fixtures";

/**
 * The five in-page anchors the header and footer link to.
 *
 * `#start` in particular has already been wrong once: it sat on the fixed nav,
 * which is out of document flow, so the browser considered it permanently in
 * view and "back to top" scrolled nowhere. A link whose target does not exist,
 * or exists but cannot be scrolled to, fails silently in a browser.
 */
for (const id of HOME_ANCHORS) {
  test(`#${id} exists and is scrolled to`, async ({ page }) => {
    await page.goto(HOME);

    const target = page.locator(`#${id}`);
    await expect(target, `#${id} is not in the document`).toHaveCount(1);

    await page.evaluate((anchor) => {
      document.getElementById(anchor)?.scrollIntoView();
    }, id);

    // `#start` is the top of the document; the rest sit below the fold.
    const y = await page.evaluate(() => window.scrollY);
    if (id === "start") {
      expect(y).toBeLessThan(100);
    } else {
      expect(y, `#${id} did not move the page`).toBeGreaterThan(100);
      await expect(target).toBeInViewport();
    }
  });
}

test("every header and footer in-page link resolves to a real element", async ({ page }) => {
  await page.goto(HOME);

  const hrefs = await page.locator('a[href*="#"]').evaluateAll((links) =>
    links
      .map((a) => (a as HTMLAnchorElement).getAttribute("href") ?? "")
      .filter((h) => h.includes("#"))
      .map((h) => h.slice(h.indexOf("#") + 1))
      .filter((h) => h.length > 0),
  );

  expect(hrefs.length).toBeGreaterThan(0);
  for (const id of new Set(hrefs)) {
    await expect(page.locator(`#${id}`), `#${id} is linked but does not exist`).toHaveCount(1);
  }
});
