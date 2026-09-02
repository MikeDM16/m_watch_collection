import { expect, test, type Locator, type Page } from "@playwright/test";

import { HOME } from "./fixtures";

/**
 * The Special Timepieces rail.
 *
 * This shipped broken twice, both times because the throwaway check used a
 * single 500px wheel tick. No mouse produces that. A real tick is 40-120px,
 * and the rail's snap points sit 296px apart — which is exactly the interaction
 * the bug lived in: mandatory scroll-snap pulled the rail straight back after
 * every tick, so it never moved, and a 500px tick was large enough to hide it.
 *
 * So: realistic ticks, repeated, and both hand-back-to-the-page edges.
 */
const TICK = 100; // px, the middle of a real mouse wheel notch
const TICKS = 8;

function rail(page: Page): Locator {
  return page.getByLabel("Special timepieces, scrollable");
}

/** One wheel notch over the rail, as the browser would deliver it. */
async function wheelOverRail(page: Page, deltaY: number, count = 1) {
  const box = await rail(page).boundingBox();
  if (!box) throw new Error("the rail is not laid out");
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  for (let i = 0; i < count; i++) {
    await page.mouse.wheel(0, deltaY);
    await page.waitForTimeout(30);
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto(HOME);
  await rail(page).scrollIntoViewIfNeeded();
  // Settle the scroll that scrollIntoViewIfNeeded just started.
  await page.waitForTimeout(300);
});

test("realistic wheel ticks pan the rail", async ({ page }) => {
  const track = rail(page);
  // Not asserted to be 0: the rail is padded and snap-aligned, so it rests a
  // few dozen pixels in. What matters is the delta.
  const before = await track.evaluate((el) => el.scrollLeft);

  await wheelOverRail(page, TICK, TICKS);

  const after = await track.evaluate((el) => el.scrollLeft);
  expect(
    after - before,
    `${TICKS} ticks of ${TICK}px moved the rail ${after - before}px — snap is pulling it back`,
  ).toBeGreaterThan(TICK);
});

test("a single tick moves the rail, not just a large one", async ({ page }) => {
  const track = rail(page);
  const before = await track.evaluate((el) => el.scrollLeft);
  await wheelOverRail(page, TICK, 1);
  // The whole bug: one notch has to survive the re-snap.
  expect(await track.evaluate((el) => el.scrollLeft)).toBeGreaterThan(before);
});

test("at the start, scrolling up hands the page back its scroll", async ({ page }) => {
  const track = rail(page);

  // Park it hard at the start; the component hands back only at scrollLeft <= 0.
  await track.evaluate((el) => {
    el.scrollLeft = 0;
  });
  await page.waitForTimeout(200);

  const before = await page.evaluate(() => window.scrollY);
  await wheelOverRail(page, -TICK, 3);

  expect(
    await page.evaluate(() => window.scrollY),
    "the rail trapped an upward scroll",
  ).toBeLessThan(before);
});

test("at the end, scrolling down hands the page back its scroll", async ({ page }) => {
  const track = rail(page);

  // Park it at the far end without using the wheel.
  await track.evaluate((el) => {
    el.scrollLeft = el.scrollWidth - el.clientWidth;
  });
  await page.waitForTimeout(200);

  const before = await page.evaluate(() => window.scrollY);
  await wheelOverRail(page, TICK, 3);

  expect(
    await page.evaluate(() => window.scrollY),
    "the rail trapped a downward scroll at its end",
  ).toBeGreaterThan(before);
});

test("snapping is restored once the gesture stops", async ({ page }) => {
  const track = rail(page);
  await wheelOverRail(page, TICK, 3);

  // Suppressed only for the duration of the gesture (140ms in the component).
  await expect
    .poll(async () => track.evaluate((el) => el.style.scrollSnapType), { timeout: 2000 })
    .toBe("");
});

test("a horizontal gesture is left alone", async ({ page }) => {
  const track = rail(page);
  const box = await track.boundingBox();
  if (!box) throw new Error("the rail is not laid out");

  const pageBefore = await page.evaluate(() => window.scrollY);
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.wheel(TICK, 0);
  await page.waitForTimeout(200);

  // The browser scrolls the rail natively; the page must not move.
  expect(await page.evaluate(() => window.scrollY)).toBe(pageBefore);
});
