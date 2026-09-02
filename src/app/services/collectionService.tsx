import CollectionIndex, { CollectionIndexEntry } from "../data/collectionIndex";
import { modelLoaders } from "../data/collectionModules.generated";
import type { WatchDetails } from "../data/watchDetails";
import { parseSeries } from "../data/watchModels/seriesGroup";
import brandsService from "./brandsService";

// A series can have a second level: a "group" (umbrella, e.g. Chronomat) holding several
// sub-series. `label === ""` marks the base members rendered directly under the group title;
// `group === ""` marks brands that don't display by series (a single untitled list).
export interface SeriesSubGroup {
  label: string;
  models: CollectionIndexEntry[];
}

export interface SeriesGroup {
  group: string;
  subGroups: SeriesSubGroup[];
}

// Convert "DD/MM/YYYY" to a proper Date object
const parseDate = (dateStr: string): number => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day).getTime(); // Convert to timestamp
};

function getCollectionModelsByBrand(brand: string, displayBySeries?: boolean): SeriesGroup[] {
  const entries = Object.entries(CollectionIndex)
    .filter(([, entry]) => entry.brand == brand)
    .sort(([, va], [, vb]) => vb.year - va.year) // DESC order
    .map(([, entry]) => entry);

  if (entries.length === 0) return [];

  // Brands that don't display by series: a single, untitled, flat list.
  if (displayBySeries !== true) {
    return [{ group: "", subGroups: [{ label: "", models: entries }] }];
  }

  // group -> (sub label -> models), preserving first-encounter (newest-first) order.
  const groups = new Map<string, Map<string, CollectionIndexEntry[]>>();
  for (const entry of entries) {
    const { group, label } = parseSeries(entry.series);
    let subGroups = groups.get(group);
    if (!subGroups) {
      subGroups = new Map<string, CollectionIndexEntry[]>();
      groups.set(group, subGroups);
    }
    const models = subGroups.get(label);
    if (models) {
      models.push(entry);
    } else {
      subGroups.set(label, [entry]);
    }
  }

  return Array.from(groups, ([group, subMap]) => {
    const subGroups = Array.from(subMap, ([label, models]) => ({ label, models }));
    // Pin base members (label "") first so they sit directly under the group title.
    const base = subGroups.filter((s) => s.label === "");
    const rest = subGroups.filter((s) => s.label !== "");
    return { group, subGroups: [...base, ...rest] };
  });
}

function getIndexEntry(key: string): CollectionIndexEntry | undefined {
  return CollectionIndex[key];
}

/**
 * Loads one model's full record.
 *
 * The loader comes from a generated map of literal `import()` calls rather than
 * from `import(\`../data/watchModels/${...}\`)`. A template literal makes the
 * bundler emit a context module spanning every file the pattern could match,
 * which is what made this route slow to compile and flaky in dev.
 *
 * There is deliberately no try/catch: an unknown key is a 404, but a model file
 * that fails to evaluate is a bug, and swallowing it here turned every such bug
 * into a silent "model not found". Let it reach the error boundary.
 */
async function getModelDetails(key: string): Promise<WatchDetails | undefined> {
  const indexEntry = CollectionIndex[key];
  const load = indexEntry ? modelLoaders[indexEntry.modelFile] : undefined;
  if (!load) return undefined;

  return (await load()).default;
}

function getSoldModels(): CollectionIndexEntry[] {
  return Object.entries(CollectionIndex)
    .filter(([, v]) => {
      return v.saleReport != null;
    })
    .sort(([, a], [, b]) => {
      return parseDate(b.saleReport?.date || "") - parseDate(a.saleReport?.date || "");
    }) // DESC order
    .map(([, v]) => v);
}

function getCollectionStatistic(): Record<string, number | string> {
  const brandByLetter = brandsService.getAllBrands();

  const numModels = Object.keys(CollectionIndex).length;
  const numSoldModels = Object.values(getSoldModels()).length;

  let numBrands = 0;
  Object.values(brandByLetter).map((brands) => {
    numBrands += brands.length;
  });

  return {
    Brands: numBrands,
    Models: numModels,
    Sales: numSoldModels,
  };
}

function getSpecialCollectionItems(): CollectionIndexEntry[] {
  return Object.entries(CollectionIndex)
    .filter(([, v]) => {
      return v.specialCollectionItem && !v.collectionSet;
    })
    .sort(([, a], [, b]) => {
      return b.year - a.year;
    }) // DESC order
    .map(([, v]) => v);
}

function getAllCollectionItems(): Record<string, CollectionIndexEntry> {
  return CollectionIndex;
}

const collectionService = {
  getCollectionModelsByBrand,
  getIndexEntry,
  getModelDetails,
  getSoldModels,
  getCollectionStatistic,
  getSpecialCollectionItems,
  getAllCollectionItems,
};

export default collectionService;
