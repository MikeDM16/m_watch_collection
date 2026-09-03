import { expect, test } from "@playwright/test";

import { BRAND } from "./fixtures";

/**
 * Brand filters live in the URL, so a filtered view can be shared, bookmarked
 * and returned to with Back.
 *
 * The load-bearing test is the last one. Filter state in the URL is normally
 * `useSearchParams`, which on a prerendered route opts the tree out of static
 * generation — silently, because the page still looks correct in a browser.
 * The grid coming back in the raw HTML is the only assertion that catches it.
 */

const chip = (page: import("@playwright/test").Page, name: string) =>
  page.locator(".series-filter-chip", { hasText: new RegExp(`^${name}$`) });

test("clicking a series chip writes it to the URL", async ({ page }) => {
  await page.goto(BRAND);

  const speedmaster = chip(page, "Speedmaster");
  await speedmaster.click();

  await expect(page).toHaveURL(/[?&]series=Speedmaster/);
  await expect(speedmaster).toHaveClass(/is-active/);
});

test("a shared filtered URL renders the filtered grid on arrival", async ({ page }) => {
  await page.goto(`${BRAND}?series=Speedmaster&sort=az`);

  await expect(chip(page, "Speedmaster")).toHaveClass(/is-active/);
  await expect(chip(page, "A-Z")).toHaveClass(/is-active/);

  const groupTags = page.locator(".series-tag-group");
  await expect(groupTags.first()).toBeVisible();
  for (const text of await groupTags.allTextContents()) {
    expect(text).toBe("Speedmaster");
  }
});

test("a bare brand URL is unfiltered and stays bare", async ({ page }) => {
  await page.goto(BRAND);

  await expect(chip(page, "All")).toHaveClass(/is-active/);
  await expect(chip(page, "Newest")).toHaveClass(/is-active/);
  expect(new URL(page.url()).search).toBe("");
});

test("clearing a filter returns to the bare URL rather than an empty param", async ({ page }) => {
  await page.goto(`${BRAND}?series=Speedmaster`);
  await chip(page, "All").click();
  expect(new URL(page.url()).search).toBe("");
});

test("Back from a model returns to the filtered grid, not the whole brand", async ({ page }) => {
  await page.goto(BRAND);
  await chip(page, "Speedmaster").click();
  const filtered = page.url();

  await page.locator("a[href*='/collection/Omega/']").first().click();
  await page.waitForURL(/\/collection\/Omega\/.+/);

  await page.goBack();
  await expect(page).toHaveURL(filtered);
  await expect(chip(page, "Speedmaster")).toHaveClass(/is-active/);
});

test("the brand grid is still in the static HTML", async ({ page }) => {
  const html = await (await page.request.get(BRAND)).text();

  // A model that only appears as a grid tile. If the route deopted to
  // client-side rendering this is a Suspense fallback instead.
  expect(html).toContain("Omega StayBrite Tank CK3416");
  expect(html).not.toContain("deopted");
});
