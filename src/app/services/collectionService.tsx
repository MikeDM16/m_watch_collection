import CollectionIndex, { CollectionIndexEntry } from "../data/collectionIndex";
import type { WatchDetails } from "../data/watchDetails";
import brandsService from "./brandsService";

// Convert "DD/MM/YYYY" to a proper Date object
const parseDate = (dateStr: string): number => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day).getTime(); // Convert to timestamp
};

function getCollectionModelsByBrand(
  brand: string,
  displayBySeries?: boolean,
): Record<string, CollectionIndexEntry[]> {
  let seriesKey: string | undefined = undefined;
  const brandModels: Record<string, CollectionIndexEntry[]> = {};
  const defaultSeriesKey = "";
  brandModels[defaultSeriesKey] = [];

  Object.assign(
    {},
    Object.entries(CollectionIndex)
      .filter(([, entry]) => entry.brand == brand)
      .sort(([, va], [, vb]) => vb.year - va.year) // DESC order
      .map(([, entry]) => {
        seriesKey = entry.series;
        if (seriesKey in brandModels) {
          brandModels[seriesKey].push(entry);
        } else if (displayBySeries == true) {
          brandModels[seriesKey] = [entry];
        } else {
          brandModels[defaultSeriesKey].push(entry);
        }
      }),
  );

  if (brandModels[defaultSeriesKey].length == 0) {
    delete brandModels[defaultSeriesKey];
  }

  return brandModels;
}

function getIndexEntry(key: string): CollectionIndexEntry | undefined {
  return CollectionIndex[key];
}

async function getModelDetails(key: string): Promise<WatchDetails | undefined> {
  const indexEntry = CollectionIndex[key];
  if (!indexEntry) return undefined;

  try {
    const modelModule = await import(`../data/watchModels/${indexEntry.modelFile}`);
    return modelModule.default;
  } catch {
    return undefined;
  }
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
