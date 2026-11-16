/**
 * _catalogue.ts — the catalogue's sales, with everything the matcher can read.
 *
 * collection-index.json carries only price, date and URL. The registry, loaded
 * the same way scripts/generate-collection-index.ts loads it, adds the title,
 * catalogue reference and movement, and the Catawiki URL slug adds the words
 * the lot was listed under. All of it is tokenised once, here.
 */

import CollectionItemsDB from "../../src/app/data/admin/collectionData";
import type { CollectionIndexEntry } from "../../src/app/data/collectionIndex";
import { INDEX_JSON, parseCatalogueDate, readJson, tokenize } from "./_shared";

export interface CatalogueSale {
  /** Registry key, which is also the legend. */
  key: string;
  modelFile: string;
  brand: string;
  legend: string;
  title: string;
  reference: string;
  movement: string;
  price: number;
  /** "DD/MM/YYYY", verbatim. */
  dateText: string;
  date: Date | null;
  url?: string;
  lotId: string | null;
  brandTokens: string[];
  /** Brand, legend, title, reference, movement and URL slug, tokenised. */
  tokens: string[];
}

export const lotIdFromUrl = (url?: string): string | null => url?.match(/\/l\/(\d+)/)?.[1] ?? null;

function slugWords(url?: string): string {
  const slug = url?.match(/\/l\/\d+-([^/?#]+)/)?.[1];
  return slug ? slug.replace(/-/g, " ") : "";
}

export interface Catalogue {
  sales: CatalogueSale[];
  /** Brand tokens across the whole catalogue, sold or not. */
  brandTokens: Set<string>;
}

type Entry = (typeof CollectionItemsDB)[string];

/** What a model says about itself: brand, legend, title, reference, movement, and extra words. */
function describe(entry: Entry, extra = "") {
  const details = entry.href.default;
  const info = details.technicalData?.information;
  const title = details.title ?? "";
  const reference = info?.catalogueReference ?? "";
  const movement = details.technicalData?.movement?.title ?? "";
  const brandTokens = tokenize(entry.brand);
  const tokens = [
    ...new Set([
      ...brandTokens,
      ...tokenize(entry.legend),
      ...tokenize(title),
      ...tokenize(reference),
      ...tokenize(movement),
      ...tokenize(extra),
    ]),
  ];
  return { title, reference, movement, brandTokens, tokens };
}

/** A catalogue model with no sale report: a watch still owned, or never recorded as sold. */
export interface OwnedModel {
  modelFile: string;
  brand: string;
  legend: string;
  brandTokens: string[];
  tokens: string[];
}

/**
 * Every model without a sale report (what a kept watch can be), and the tokens
 * of every model, sold or not (for rarity weights over the whole catalogue).
 */
export function loadOwned(): { owned: OwnedModel[]; allTokens: string[][] } {
  const index = readJson<Record<string, CollectionIndexEntry>>(INDEX_JSON);
  const owned: OwnedModel[] = [];
  const allTokens: string[][] = [];
  for (const [key, entry] of Object.entries(CollectionItemsDB)) {
    const report = entry.href.default.saleReport;
    const d = describe(entry, slugWords(report?.url));
    allTokens.push(d.tokens);
    const indexed = index[key];
    if (report || !indexed) continue;
    owned.push({
      modelFile: indexed.modelFile,
      brand: entry.brand,
      legend: entry.legend,
      brandTokens: d.brandTokens,
      tokens: d.tokens,
    });
  }
  return { owned, allTokens };
}

export function loadCatalogue(): Catalogue {
  const index = readJson<Record<string, CollectionIndexEntry>>(INDEX_JSON);
  const sales: CatalogueSale[] = [];
  const brandTokens = new Set<string>();

  for (const [key, entry] of Object.entries(CollectionItemsDB)) {
    const brandToks = tokenize(entry.brand);
    brandToks.forEach((t) => brandTokens.add(t));

    const details = entry.href.default;
    const report = details.saleReport;
    const indexed = index[key];
    if (!report || !indexed) continue;

    const { title, reference, movement, tokens } = describe(entry, slugWords(report.url));

    sales.push({
      key,
      modelFile: indexed.modelFile,
      brand: entry.brand,
      legend: entry.legend,
      title,
      reference,
      movement,
      price: report.price,
      dateText: report.date,
      date: parseCatalogueDate(report.date),
      url: report.url,
      lotId: lotIdFromUrl(report.url),
      brandTokens: brandToks,
      tokens,
    });
  }

  return { sales, brandTokens };
}
