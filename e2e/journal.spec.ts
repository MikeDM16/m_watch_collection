import { expect, test } from "@playwright/test";

import {
  JOURNAL,
  JOURNAL_BRAND,
  JOURNAL_ENTRY,
  JOURNAL_ENTRY_PHOTOS,
  JOURNAL_EVENT,
  JOURNAL_EVENT_PHOTOS,
  JOURNAL_MODEL,
} from "./fixtures";

/**
 * The Journal: events and collection sets, and the links between them and the
 * catalogue.
 *
 * Every photograph is rendered twice (rows grouped for a desktop width and for
 * a phone, swapped at sm), so a locator by label matches two buttons; the
 * visible filter picks the one the viewport actually shows.
 */

test("the index lists the entry and links to it", async ({ page }) => {
  await page.goto(JOURNAL);
  const card = page.locator(`a[href="${JOURNAL_ENTRY}"]`).first();
  await expect(card).toBeVisible();
  await card.click();
  await expect(page).toHaveURL(new RegExp(`${JOURNAL_ENTRY}$`));
});

test("the photographs are in the prerendered HTML", async ({ request }) => {
  // The same check as the brand grid's: a client-only render would leave the
  // static document without them, and crawlers with nothing to index.
  const html = await (await request.get(JOURNAL_ENTRY)).text();
  expect(html).toContain('aria-label="Open photograph 1"');
  expect(html).toContain(`aria-label="Open photograph ${JOURNAL_ENTRY_PHOTOS}"`);
});

test("a photograph opens the lightbox at that photograph", async ({ page }) => {
  await page.goto(JOURNAL_ENTRY);
  await page
    .locator('button[aria-label="Open photograph 3"]')
    .filter({ visible: true })
    .first()
    .click();
  await expect(page.locator(".yarl__counter")).toHaveText(`3 / ${JOURNAL_ENTRY_PHOTOS}`);
});

test("a long block opens on its first rows and shows the rest on request", async ({ page }) => {
  await page.goto(JOURNAL_ENTRY);
  const last = page
    .locator(`button[aria-label="Open photograph ${JOURNAL_ENTRY_PHOTOS}"]`)
    .filter({ visible: true });
  await expect(last).toHaveCount(0);
  await page.getByRole("button", { name: `Show all ${JOURNAL_ENTRY_PHOTOS} photographs` }).click();
  await expect(last).toHaveCount(1);
});

test("every watch the entry links to resolves", async ({ page }) => {
  await page.goto(JOURNAL_ENTRY);
  const hrefs = await page
    .locator("#watches a")
    .evaluateAll((links) => links.map((a) => a.getAttribute("href")!));
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of new Set(hrefs)) {
    const res = await page.request.get(href);
    expect(res.ok(), `${href} should serve`).toBe(true);
  }
});

test("the brand page and a model page link back to the entry", async ({ page }) => {
  for (const path of [JOURNAL_BRAND, JOURNAL_MODEL]) {
    await page.goto(path);
    // The model page renders a line for phones and previews for a wide
    // screen, swapped at lg, so the visible one is whichever the viewport shows.
    await expect(page.getByText("In the Journal").filter({ visible: true }).first()).toBeVisible();
    await expect(
      page.locator(`a[href="${JOURNAL_ENTRY}"]`).filter({ visible: true }).first(),
    ).toBeVisible();
  }
});

test("search finds the entry", async ({ request }) => {
  const index = await (await request.get("/api/search-index")).json();
  const hit = Object.values(index).find((v) => (v as { href?: string }).href === JOURNAL_ENTRY) as
    | { kind?: string }
    | undefined;
  expect(hit?.kind).toBe("journal");
});

test.describe("an event", () => {
  test("numbers its photographs across the sections", async ({ request }) => {
    const html = await (await request.get(JOURNAL_EVENT)).text();
    expect(html).toContain(`aria-label="Open photograph ${JOURNAL_EVENT_PHOTOS}"`);
  });

  test("carries the event strip and the event's own site", async ({ page }) => {
    await page.goto(JOURNAL_EVENT);
    const item = (label: string) =>
      page
        .locator("div:has(> p.lab)")
        .filter({ has: page.locator("p.lab", { hasText: new RegExp(`^${label}$`) }) });
    await expect(item("Event")).toContainText("10 Oct 2026");
    await expect(item("Place")).toContainText("Museu do Caramulo, Portugal");
    await expect(item("Sections")).toContainText("7");
    await expect(
      page.getByRole("link", { name: "Fórmula Mágica at the Museu do Caramulo" }),
    ).toHaveAttribute("target", "_blank");
  });

  test("its section watches resolve and link back to it", async ({ page }) => {
    // The watch list at the foot of the page is covered above; these are the
    // "Photographed with" lines under each section title.
    await page.goto(JOURNAL_EVENT);
    const hrefs = await page
      .locator('[id^="section-"] a[href^="/collection/"]')
      .evaluateAll((links) => links.map((a) => a.getAttribute("href")!));
    expect(new Set(hrefs).size).toBe(3);
    for (const href of new Set(hrefs)) {
      await page.goto(href);
      await expect(
        page.locator(`a[href="${JOURNAL_EVENT}"]`).filter({ visible: true }).first(),
      ).toBeVisible();
    }
  });
});

test("an unknown entry is a 404", async ({ request }) => {
  const res = await request.get("/journal/no-such-entry");
  expect(res.status()).toBe(404);
});
