import { expect, test } from "@playwright/test";

import { MODEL_MECHANICAL } from "./fixtures";

/**
 * Under reduced motion the model page must not pin.
 *
 * PinnedSpecViewer gates the ScrollTrigger pin on
 * `(min-width: 1024px) and (prefers-reduced-motion: no-preference)`. A pin that
 * engages anyway holds the viewport while the specification pans, which is
 * exactly the thing someone who asked for reduced motion cannot use — and it is
 * invisible unless you go looking for it.
 */
test.describe("reduced motion", () => {
  // Set on the context rather than with emulateMedia, so the preference is in
  // place before gsap.matchMedia ever evaluates it.
  test.use({ contextOptions: { reducedMotion: "reduce" } });

  test("the page does not pin and scrolls to its natural end", async ({ page }) => {
    await page.goto(MODEL_MECHANICAL);

    const height = await page.evaluate(() => document.body.scrollHeight);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);

    const reached = await page.evaluate(() => window.scrollY + window.innerHeight);
    expect(reached, "something is holding the viewport short of the end").toBeGreaterThan(
      height - 250,
    );
  });

  test("GSAP never applies a pin transform", async ({ page }) => {
    await page.goto(MODEL_MECHANICAL);
    await page.evaluate(() => window.scrollTo(0, 1200));
    await page.waitForTimeout(600);

    // ScrollTrigger pins by wrapping the element in a pin-spacer.
    await expect(page.locator(".pin-spacer")).toHaveCount(0);
  });
});

test.describe("full motion", () => {
  test.use({ contextOptions: { reducedMotion: "no-preference" } });

  test("the pin does engage on a wide viewport", async ({ page }) => {
    await page.goto(MODEL_MECHANICAL);
    await page.evaluate(() => window.scrollTo(0, 1200));
    await page.waitForTimeout(600);

    // The counterpart assertion: if this ever reads 0, the reduced-motion test
    // above is passing for the wrong reason.
    await expect(page.locator(".pin-spacer")).toHaveCount(1);
  });
});
