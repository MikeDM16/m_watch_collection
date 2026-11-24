/**
 * 5_report.tsx — step 5 of the Chrono24 market-value pipeline: the valuation
 * report, for insurance and for following the collection's worth.
 *
 * It covers the kept collection: every ledger watch with status "kept" (the
 * workbook's Collection tab). Each is valued at Chrono24's estimate when
 * `.ledger/market.json` links one to it, and at its ledger cost otherwise, so
 * the report runs before any scrape too (everything at cost).
 *
 * Photos come from the local MWatchCollectionResources checkout (the 800px and
 * 200px variants), never from the network. Specs come from the model files.
 * VALUATION_OWNER, when set, puts a name on the cover; it is not in the code
 * because the repo is public.
 *
 * Output: `.ledger/reports/valuation-<date>.pt.pdf` and `.en.pdf` (gitignored).
 *
 * Usage:
 *   npm run valuation:report                    # both languages
 *   npm run valuation:report -- --lang en       # one
 *   npm run valuation:report -- --out "C:/…/OneDrive/Seguros"   # and copy them there
 */

import fs from "fs";
import path from "path";
import { renderToFile } from "@react-pdf/renderer";
import React from "react";

import { buildValuation, marketSeries } from "../../src/app/admin/ledger/valuation";
import { RESOURCES_DIR } from "../../src/app/admin/resourcesDir";
import CollectionItemsDB from "../../src/app/data/admin/collectionData";
import type { CollectionIndexEntry } from "../../src/app/data/collectionIndex";
import { getImgURLForSizeType, SizeType } from "../../src/app/services/commonFunctions";
import { readJson } from "../sales/_shared";
import { loadLedger, loadMarket, readModels, REPORTS_DIR } from "./_market";
import { today } from "./_shared";
import { LANGS, unmappedC24, type Lang } from "./pdf/i18n";
import { ValuationDocument, type ReportWatch, type WatchSpecs } from "./pdf/ValuationDocument";

const INDEX_JSON = path.join(__dirname, "../../src/app/data/collection-index.json");

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : undefined;
}

const missingPhotos: string[] = [];

/** A local photo variant as bytes, or null. JPEG only: react-pdf reads jpg and png. */
function readPhoto(src: string | undefined, size: string): Buffer | null {
  if (!src) return null;
  const file = path.join(RESOURCES_DIR, getImgURLForSizeType(src, size));
  if (fs.existsSync(file)) return fs.readFileSync(file);
  missingPhotos.push(file);
  return null;
}

function main() {
  const lang = arg("lang") as Lang | undefined;
  if (lang && !LANGS.includes(lang)) throw new Error(`--lang must be one of ${LANGS.join(", ")}.`);
  const out = arg("out");

  const store = loadLedger();
  const { market, version } = loadMarket();
  const models = readModels();
  const valuation = buildValuation(store, version ? market : null, models);

  // A watch not in the catalogue yet has only its ledger label ("Seiko Midas"):
  // its brand is the longest catalogue brand the label starts with.
  const brands = [...new Set(models.map((m) => m.brand))].sort((a, b) => b.length - a.length);
  const brandOf = (label: string) =>
    brands.find((b) => label.toLowerCase().startsWith(b.toLowerCase())) ?? label.split(" ")[0];

  // modelFile → its registry entry, for the specs.
  const index = readJson<Record<string, CollectionIndexEntry>>(INDEX_JSON);
  const keyByFile = new Map(Object.entries(index).map(([key, e]) => [e.modelFile, key]));

  const watches: ReportWatch[] = valuation.rows.map((row) => {
    const key = row.modelFile ? keyByFile.get(row.modelFile) : undefined;
    const details = key ? CollectionItemsDB[key]?.href.default : undefined;
    const info = details?.technicalData.information;
    const specs: WatchSpecs = {
      reference:
        info?.catalogueReference && info.catalogueReference !== "-"
          ? info.catalogueReference
          : row.item?.reference,
      year: info?.productionYear ?? (row.model?.year ? String(row.model.year) : undefined),
      caseMaterial: details?.technicalData.case.material,
      diameter: details?.technicalData.case.diameter,
      movement: details?.technicalData.movement?.title,
    };
    const src = row.model?.srcImage;
    return {
      row,
      brand: row.model?.brand ?? brandOf(row.label),
      name: row.model?.legend ?? row.item?.title ?? row.label,
      specs,
      photo: readPhoto(src, SizeType.GALLERY),
      thumb: readPhoto(src, SizeType.THUMBNAIL),
    };
  });

  return { valuation, watches, series: version ? marketSeries(market) : [], lang, out };
}

async function render() {
  const { valuation, watches, series, lang, out } = main();
  const generatedAt = today();
  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  for (const l of lang ? [lang] : LANGS) {
    const file = path.join(REPORTS_DIR, `valuation-${generatedAt}.${l}.pdf`);
    await renderToFile(
      <ValuationDocument
        lang={l}
        valuation={valuation}
        watches={watches}
        series={series}
        generatedAt={generatedAt}
        owner={process.env.VALUATION_OWNER || undefined}
      />,
      file,
    );
    console.log(`Written ${file}`);
    if (out) {
      fs.mkdirSync(out, { recursive: true });
      fs.copyFileSync(file, path.join(out, path.basename(file)));
      console.log(`  copied to ${out}`);
    }
  }

  const { totals } = valuation;
  console.log(
    `\n${totals.count} kept watches · ${totals.tracked} valued by Chrono24 · value ${totals.value} € · cost ${totals.cost} €`,
  );
  if (valuation.unlinked.length)
    console.warn(
      `Chrono24 items linked to no kept watch (not in the report): ${valuation.unlinked.map((i) => i.title).join(", ")}`,
    );
  if (missingPhotos.length)
    console.warn(
      `Photos not found in ${RESOURCES_DIR}:\n  ${[...new Set(missingPhotos)].join("\n  ")}`,
    );
  if (unmappedC24.size)
    console.warn(
      `Chrono24 words with no English in pdf/i18n.ts (printed as-is): ${[...unmappedC24].join(" · ")}`,
    );
}

render().catch((err) => {
  console.error(err);
  process.exit(1);
});
