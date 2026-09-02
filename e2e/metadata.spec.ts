import { expect, test } from "@playwright/test";

import { BRAND, CANONICAL_ORIGIN, HOME, MODEL_MECHANICAL } from "./fixtures";

/**
 * The host the site advertises.
 *
 * This shipped wrong once: three files each hardcoded a `*.vercel.app` literal,
 * so 411 sitemap entries, every canonical and every OG image pointed at a host
 * that is not the site. Nothing failed — the build was green and the pages
 * looked fine. These assertions are the thing that would have caught it.
 */
test.describe("canonical host", () => {
  test("the model page canonical is absolute and on the real host", async ({ page }) => {
    await page.goto(MODEL_MECHANICAL);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBeTruthy();
    // Compared decoded, because Next percent-encodes when it resolves the
    // relative canonical against metadataBase.
    expect(decodeURIComponent(canonical!)).toBe(
      `${CANONICAL_ORIGIN}/collection/Omega/Omega StayBrite Tank CK3416`,
    );
  });

  test("the OG image resolves against the real host", async ({ page }) => {
    await page.goto(MODEL_MECHANICAL);
    const og = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    expect(og).toBeTruthy();
    expect(og!.startsWith(`${CANONICAL_ORIGIN}/`)).toBe(true);
  });

  test("no page mentions a vercel.app host", async ({ page }) => {
    for (const path of [HOME, BRAND, MODEL_MECHANICAL]) {
      const res = await page.request.get(path);
      expect(res.ok(), `${path} should serve`).toBe(true);
      expect(await res.text(), `${path} leaks a vercel.app host`).not.toContain("vercel.app");
    }
  });

  test("robots.txt points at the sitemap on the real host", async ({ request }) => {
    const body = await (await request.get("/robots.txt")).text();
    expect(body).toContain(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`);
    expect(body).toContain("Disallow: /admin");
    expect(body).toContain("Disallow: /api");
  });

  test("every sitemap URL is on the real host", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

    // The catalogue is ~340 models plus the brands and the home page. A wildly
    // different number means the index or the brand filter changed shape.
    expect(locs.length).toBeGreaterThan(300);

    const strays = locs.filter((url) => !url.startsWith(CANONICAL_ORIGIN));
    expect(strays, `off-host sitemap URLs: ${strays.slice(0, 5).join(", ")}`).toHaveLength(0);

    expect(locs).toContain(CANONICAL_ORIGIN);
    expect(locs.some((u) => u.startsWith(`${CANONICAL_ORIGIN}/collection/`))).toBe(true);
  });
});
