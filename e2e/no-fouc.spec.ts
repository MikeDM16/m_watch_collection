import { expect, test } from "@playwright/test";

import { HOME, MODEL_MECHANICAL } from "./fixtures";

/**
 * No flash of the wrong theme.
 *
 * The theme script is a raw blocking <script> in <head> precisely so the `dark`
 * class lands before first paint. Anything that moves it — a component wrapper,
 * an effect, a defer attribute — reintroduces the flash, and a flash is very
 * hard to notice while developing in the theme you already prefer.
 */
test.use({ colorScheme: "dark" });

test("the dark class is applied before the body ever renders", async ({ page }) => {
  // Sample the root element as early as a script can run in the document.
  await page.addInitScript(() => {
    (window as unknown as { __classAtBody?: string }).__classAtBody = undefined;
    document.addEventListener(
      "readystatechange",
      () => {
        const w = window as unknown as { __classAtBody?: string };
        if (w.__classAtBody === undefined) {
          w.__classAtBody = document.documentElement.className;
        }
      },
      { once: true },
    );
  });

  await page.goto(HOME);

  const atBody = await page.evaluate(
    () => (window as unknown as { __classAtBody?: string }).__classAtBody,
  );
  expect(atBody, "the theme class was not set by the time the document was parsing").toContain(
    "dark",
  );
});

test("the OS preference decides the theme with no stored choice", async ({ page }) => {
  await page.goto(HOME);
  await expect(page.locator("html")).toHaveClass(/dark/);
  expect(await page.locator("html").evaluate((el) => el.style.colorScheme)).toBe("dark");
});

test("the painted background is dark from the first frame", async ({ page }) => {
  await page.goto(MODEL_MECHANICAL, { waitUntil: "commit" });

  // As soon as there is a body at all, it must already be on the dark surface.
  await page.waitForSelector("body", { state: "attached" });
  const rgb = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

  const [r, g, b] = rgb.match(/\d+/g)!.map(Number);
  const luminance = (r + g + b) / 3;
  expect(luminance, `body painted ${rgb}, which is a light surface`).toBeLessThan(90);
});
