import { expect, test } from "@playwright/test";

import { HOME, MODEL_MECHANICAL } from "./fixtures";

/**
 * GSAP is a model-page dependency and must stay one.
 *
 * It is ~70KB of the home page's budget for a section the home page does not
 * have. Importing it anywhere reachable from `/` — a shared component, a barrel
 * file, a stray `import { gsap }` for a helper — pulls it into the home chunk
 * silently, because nothing about the page looks different.
 */
/**
 * The scripts the *document itself* declares — not every script the browser
 * ends up fetching.
 *
 * Watching network traffic instead is wrong here, and quietly so: the home page
 * links to model pages, and next/link prefetches their chunks as soon as they
 * enter the viewport. GSAP therefore does get downloaded while you sit on the
 * home page, which is fine and is the point of prefetching — but it is not in
 * the home chunk, and a listener-based check reports it as if it were.
 */
async function scriptBodies(page: import("@playwright/test").Page, path: string) {
  const res = await page.request.get(path);
  const html = await res.text();

  const urls = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);

  const bodies = await Promise.all(
    urls.map(async (url) => {
      const r = await page.request.get(url);
      return { url, text: r.ok() ? await r.text() : "" };
    }),
  );
  return bodies;
}

/** Strings that only appear in GSAP's own source, not in code that names it. */
const GSAP_MARKERS = ["ScrollTrigger", "gsap.registerPlugin", "_gsap"];

test("the home document loads no GSAP", async ({ page }) => {
  const bodies = await scriptBodies(page, HOME);
  expect(
    bodies.length,
    "no scripts were captured — the check would pass vacuously",
  ).toBeGreaterThan(0);

  const offenders = bodies
    .filter((b) => GSAP_MARKERS.some((m) => b.text.includes(m)))
    .map((b) => b.url);

  expect(offenders, `GSAP reached the home chunk via: ${offenders.join(", ")}`).toHaveLength(0);
});

test("the model document does load GSAP", async ({ page }) => {
  const bodies = await scriptBodies(page, MODEL_MECHANICAL);

  // The counterpart assertion: without it, the home-page check would still pass
  // if GSAP stopped loading anywhere at all.
  const found = bodies.some((b) => GSAP_MARKERS.some((m) => b.text.includes(m)));
  expect(found, "GSAP is not loading on the model page either — the pin is dead").toBe(true);
});
