import { expect, test, type Page } from "@playwright/test";

import { HOME } from "./fixtures";

/**
 * The "Main Brands" logo wall.
 *
 * Its cells take their height from their width (`aspect-ratio: 2.1`), so any
 * cap on the logo expressed in absolute units is a fixed pixel count racing a
 * height that moves with the column, the browser zoom and the root font size.
 * Lose that race and the logo pushes its own cell taller than its neighbours —
 * and only for the brands whose mark happens to be tall, so the wall goes
 * ragged in a way that depends on the viewer's settings rather than the code.
 *
 * That shipped once. These assertions are what would have caught it.
 */
type Cell = { name: string; height: number; overflow: number };

async function cells(page: Page): Promise<Cell[]> {
  return page.evaluate(() =>
    [...document.querySelectorAll("a[aria-label]")]
      .filter((a) => a.querySelector("img") && a.className.includes("aspect-["))
      .map((a) => {
        const cell = a.getBoundingClientRect();
        const img = a.querySelector("img")!.getBoundingClientRect();
        return {
          name: a.getAttribute("aria-label") ?? "",
          height: Math.round(cell.height),
          // Positive on any edge means the logo escapes its cell, which either
          // deforms the grid or gets silently clipped.
          overflow: Math.max(
            cell.top - img.top,
            img.bottom - cell.bottom,
            cell.left - img.left,
            img.right - cell.right,
          ),
        };
      }),
  );
}

/** Viewports either side of the 3 / 4 / 5 column breakpoints. */
const WIDTHS = [1440, 1145, 1024, 900, 768, 640, 420];

for (const width of WIDTHS) {
  test(`the brand wall stays on one grid at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(HOME);
    await page.locator("#AllBrandsItems").scrollIntoViewIfNeeded();

    const found = await cells(page);
    expect(found.length, "no brand cells were found — this would pass vacuously").toBeGreaterThan(
      10,
    );

    const heights = [...new Set(found.map((c) => c.height))];
    expect(
      heights,
      `cells have ${heights.length} different heights: ${heights.join(", ")}`,
    ).toHaveLength(1);

    const escaping = found.filter((c) => c.overflow > 0.5);
    expect(
      escaping.map((c) => `${c.name} by ${c.overflow.toFixed(1)}px`),
      "a logo is escaping its cell",
    ).toHaveLength(0);
  });
}

test("the wall survives a larger root font size", async ({ page }) => {
  // The condition that exposed the bug: rem caps grow, the aspect-derived cell
  // height does not.
  await page.addInitScript(() => {
    addEventListener("DOMContentLoaded", () => {
      document.documentElement.style.fontSize = "22px";
    });
  });
  await page.setViewportSize({ width: 1145, height: 900 });
  await page.goto(HOME);
  await page.locator("#AllBrandsItems").scrollIntoViewIfNeeded();

  const found = await cells(page);
  expect([...new Set(found.map((c) => c.height))]).toHaveLength(1);
  expect(found.filter((c) => c.overflow > 0.5)).toHaveLength(0);
});

test("every logo is big enough to read", async ({ page }) => {
  // The counterpart: a wall of uniform cells containing nothing would pass
  // every assertion above.
  await page.setViewportSize({ width: 1145, height: 900 });
  await page.goto(HOME);
  await page.locator("#AllBrandsItems").scrollIntoViewIfNeeded();

  // The painted size is derived from the natural dimensions, which are 0 until
  // the file arrives — without this the maths yields NaN and the assertion
  // fails for a reason that has nothing to do with layout.
  await page.waitForFunction(() =>
    [...document.querySelectorAll("a[aria-label]")]
      .filter((a) => a.querySelector("img") && a.className.includes("aspect-["))
      .every((a) => {
        const img = a.querySelector("img") as HTMLImageElement;
        return img.complete && img.naturalWidth > 0;
      }),
  );

  const painted = await page.evaluate(() =>
    [...document.querySelectorAll("a[aria-label]")]
      .filter((a) => a.querySelector("img") && a.className.includes("aspect-["))
      .map((a) => {
        const img = a.querySelector("img") as HTMLImageElement;
        const box = img.getBoundingClientRect();
        const style = getComputedStyle(img);
        const padX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        const padY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        const w = box.width - padX;
        const h = box.height - padY;
        // object-contain: the painted mark, not the element box.
        const ratio = img.naturalWidth / img.naturalHeight;
        return {
          name: img.alt,
          h: Math.round(w / h > ratio ? h : w / ratio),
        };
      }),
  );

  const tallest = Math.max(...painted.map((p) => p.h));
  expect(tallest, "the wall's tallest logo has shrunk").toBeGreaterThanOrEqual(52);
});
