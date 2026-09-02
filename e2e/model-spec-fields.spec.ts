import { expect, test, type Page } from "@playwright/test";

import { MODEL_MECHANICAL, MODEL_QUARTZ, SPEC_LABELS } from "./fixtures";

/**
 * The completeness contract SpecBlock documents: rows are driven from the label
 * mapping, so a spec field cannot silently disappear when the data shape or the
 * page layout changes.
 *
 * Labels repeat across blocks — Material is in both Case and Bracelet, Color in
 * both Dial and Bracelet — so every assertion is scoped to its own block by
 * heading rather than searched for across the page.
 */
function block(page: Page, heading: string | RegExp) {
  return page.locator("section").filter({ has: page.getByRole("heading", { name: heading }) });
}

async function expectLabels(page: Page, heading: string | RegExp, labels: readonly string[]) {
  const dts = block(page, heading).locator("dt");
  const rendered = await dts.allTextContents();
  for (const label of labels) {
    expect(rendered, `"${label}" is missing from the ${heading} block`).toContain(label);
  }
}

test("a mechanical model renders 31 of the 32 spec fields", async ({ page }) => {
  await page.goto(MODEL_MECHANICAL);

  await expectLabels(page, "Model", SPEC_LABELS.information);
  await expectLabels(page, "Case", SPEC_LABELS.case);
  await expectLabels(page, "Dial", SPEC_LABELS.dial);
  await expectLabels(page, "Bracelet", SPEC_LABELS.bracelet);

  // Everything but Battery, which is a quartz-only field.
  const movement = SPEC_LABELS.movement.filter((l) => l !== "Battery");
  await expectLabels(page, /^Movement/, movement);
});

test("a quartz model renders the 32nd field, Battery", async ({ page }) => {
  await page.goto(MODEL_QUARTZ);
  await expectLabels(page, /^Movement/, ["Battery"]);
});

test("the two fixtures together cover all 8 movement fields", async ({ page }) => {
  // No single watch has all 32: a quartz movement has a Battery but no
  // Frequency or Reserve, and a mechanical one is the other way round. The
  // union across both is what proves no movement label has been dropped.
  const seen = new Set<string>();
  for (const path of [MODEL_MECHANICAL, MODEL_QUARTZ]) {
    await page.goto(path);
    for (const label of await block(page, /^Movement/)
      .locator("dt")
      .allTextContents()) {
      seen.add(label);
    }
  }

  const missing = SPEC_LABELS.movement.filter((l) => !seen.has(l));
  expect(missing, `movement fields never rendered: ${missing.join(", ")}`).toHaveLength(0);
});

test("no spec row renders a label with an empty value", async ({ page }) => {
  await page.goto(MODEL_MECHANICAL);
  const values = await page.locator("dl dd").allTextContents();
  expect(values.length).toBeGreaterThan(25);
  for (const value of values) expect(value.trim()).not.toBe("");
});
