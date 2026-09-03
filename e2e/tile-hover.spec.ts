import { expect, test } from "@playwright/test";

import { BRAND } from "./fixtures";

/**
 * The "Details" cue on a catalogue tile.
 *
 * The height assertion is the one that matters. A cue that adds to the tile's
 * flow instead of overlaying it grows the grid row on hover and shifts every
 * neighbour in that row — and it looks perfectly fine on the tile you happen to
 * be pointing at, so nothing else would catch it.
 */

test.describe("desktop", () => {
  test.skip(({ isMobile }) => Boolean(isMobile), "the cue only exists for a fine pointer");

  test("the cue is hidden at rest and revealed on hover", async ({ page }) => {
    await page.goto(BRAND);

    const tile = page.locator("a.group").first();
    const cue = tile.locator(".tile-cue");

    await expect(cue).toHaveCSS("opacity", "0");
    await tile.hover();
    await expect(cue).toHaveCSS("opacity", "1");
  });

  test("keyboard focus reveals the cue too", async ({ page }) => {
    await page.goto(BRAND);

    const tile = page.locator("a.group").first();
    await tile.focus();
    await expect(tile.locator(".tile-cue")).toHaveCSS("opacity", "1");
  });

  test("hovering does not change the tile's height", async ({ page }) => {
    await page.goto(BRAND);

    const tile = page.locator("a.group").first();
    const before = (await tile.boundingBox())!.height;

    await tile.hover();
    await expect(tile.locator(".tile-cue")).toHaveCSS("opacity", "1");
    const after = (await tile.boundingBox())!.height;

    expect(after).toBeCloseTo(before, 1);
  });
});

test("the cue has no layout box on a coarse pointer", async ({ page, isMobile }) => {
  test.skip(!isMobile, "this is the touch case");
  await page.goto(BRAND);

  const cue = page.locator("a.group").first().locator(".tile-cue");
  await expect(cue).toHaveCount(1);
  expect(await cue.boundingBox()).toBeNull();
});
