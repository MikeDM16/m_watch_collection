import { expect, test, type Page } from "@playwright/test";

import { HOME } from "./fixtures";

/**
 * The search palette opens on a keystroke, so finishing the job with the mouse
 * is the wrong shape. Arrows move the highlight, Enter opens the highlighted
 * result.
 */
async function openPalette(page: Page) {
  await page.goto(HOME);
  await page.getByRole("button", { name: "Search the collection" }).click();
  await expect(page.getByRole("dialog", { name: "Search the collection" })).toBeVisible();
  // The index is fetched on open.
  await page.getByRole("combobox").fill("Omega");
  await expect(page.getByRole("option").first()).toBeVisible();
}

function selected(page: Page) {
  return page.locator('[role="option"][aria-selected="true"]');
}

test("the first result is highlighted as soon as there are results", async ({ page }) => {
  await openPalette(page);
  // Exactly one, and it is the first — so Enter alone opens the best match.
  await expect(selected(page)).toHaveCount(1);
  expect(await page.getByRole("option").first().getAttribute("aria-selected")).toBe("true");
});

test("arrows move the highlight and wrap around", async ({ page }) => {
  await openPalette(page);
  const options = page.getByRole("option");
  const count = await options.count();
  expect(count).toBeGreaterThan(2);

  await page.keyboard.press("ArrowDown");
  expect(await options.nth(1).getAttribute("aria-selected")).toBe("true");

  await page.keyboard.press("ArrowUp");
  expect(await options.nth(0).getAttribute("aria-selected")).toBe("true");

  // Up from the top wraps to the bottom.
  await page.keyboard.press("ArrowUp");
  expect(await options.nth(count - 1).getAttribute("aria-selected")).toBe("true");

  await page.keyboard.press("Home");
  expect(await options.nth(0).getAttribute("aria-selected")).toBe("true");

  await page.keyboard.press("End");
  expect(await options.nth(count - 1).getAttribute("aria-selected")).toBe("true");
});

test("Enter opens the highlighted result", async ({ page }) => {
  await openPalette(page);
  await page.keyboard.press("ArrowDown");

  const href = await page.getByRole("option").nth(1).locator("a").getAttribute("href");
  await page.keyboard.press("Enter");

  await page.waitForURL((url) => url.pathname !== "/");
  expect(decodeURIComponent(page.url())).toContain(decodeURIComponent(href!));
  await expect(page.locator("h1")).toHaveCount(1);
});

test("a new query resets the highlight to the top", async ({ page }) => {
  await openPalette(page);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  expect(await page.getByRole("option").nth(2).getAttribute("aria-selected")).toBe("true");

  await page.getByRole("combobox").fill("Tissot");
  await expect(page.getByRole("option").first()).toBeVisible();
  expect(await page.getByRole("option").nth(0).getAttribute("aria-selected")).toBe("true");
});

test("the empty state counts the catalogue rather than hardcoding it", async ({
  page,
  request,
}) => {
  await openPalette(page);
  await page.getByRole("combobox").fill("");

  const total = Object.keys(await (await request.get("/api/search-index")).json()).length;
  await expect(page.getByText(`${total} timepieces.`, { exact: false })).toBeVisible();
});
