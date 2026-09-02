import { expect, test } from "@playwright/test";

import { BRAND, HOME, MODEL_MECHANICAL } from "./fixtures";

/**
 * Page chrome, once each.
 *
 * The route groups nest — `(site)` owns the header, and each leaf group owns
 * its own footer — so a layout added at the wrong level renders the header or
 * the footer twice without breaking anything visibly enough to notice.
 */
const PAGES = [
  { name: "home", path: HOME },
  { name: "brand", path: BRAND },
  { name: "model", path: MODEL_MECHANICAL },
];

for (const { name, path } of PAGES) {
  test.describe(name, () => {
    test("has exactly one header, one footer and one h1", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('nav[aria-label="Primary"]')).toHaveCount(1);
      await expect(page.locator("footer")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveCount(1);
    });

    test("the h1 is not empty", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("h1")).not.toHaveText("");
    });
  });
}

test("the skip link is hidden until focused, then reaches main", async ({ page }) => {
  await page.goto(HOME);
  const skip = page.getByRole("link", { name: "Skip to content" });

  await expect(skip).not.toBeInViewport();
  await skip.focus();
  await expect(skip).toBeInViewport();

  await expect(page.locator("#main")).toHaveCount(1);
});

test("the model page renders breadcrumbs back to its brand", async ({ page }) => {
  await page.goto(MODEL_MECHANICAL);
  await expect(page.getByRole("link", { name: "All Brands" }).first()).toBeVisible();
  const brandCrumb = page.locator('a[href="/collection/Omega"]').first();
  await expect(brandCrumb).toBeVisible();
});
