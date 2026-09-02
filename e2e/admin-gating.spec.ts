import { expect, test } from "@playwright/test";

import { ADMIN_ROUTES } from "./fixtures";

/**
 * The admin API is a local authoring tool and must not answer in production.
 *
 * Two of these routes write files to `src/app/data/`. On Vercel the filesystem
 * is read-only so the writes fail, but the read routes still hand the whole
 * data model — every enum, every model file path, the raw source of any model —
 * to anyone who asks, and the write routes are still reachable and
 * unauthenticated.
 *
 * This suite runs against a production build, so `NODE_ENV === "production"`
 * here is the real thing.
 */
for (const { method, path } of ADMIN_ROUTES) {
  test(`${method} ${path} is not served in production`, async ({ request }) => {
    const res =
      method === "GET"
        ? await request.get(path)
        : await request.post(path, { data: {}, failOnStatusCode: false });

    expect(res.status(), `${method} ${path} answered ${res.status()}`).toBe(404);
  });
}

test("the admin pages are gated too", async ({ page }) => {
  await page.goto("/admin/create-model");
  await expect(page.getByRole("heading", { name: "Development only" })).toBeVisible();

  await page.goto("/admin/sales-report");
  await expect(page.getByRole("heading", { name: "Development only" })).toBeVisible();
});

test("the public search index is still served", async ({ request }) => {
  // The counterpart: gating must not have swept up the one API the site needs.
  const res = await request.get("/api/search-index");
  expect(res.ok()).toBe(true);
  expect(Object.keys(await res.json()).length).toBeGreaterThan(300);
});
