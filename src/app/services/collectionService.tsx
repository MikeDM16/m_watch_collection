import CollectionItemsDB, { CollectionEntry } from "../data/collectionData";
import brandsService from "./brandsService";

function getCollectionModelsByBrand(
  brand: string,
  displayBySeries?: boolean,
): Record<string, CollectionEntry[]> {
  let seriesKey: string | undefined = undefined;
  const brandModels: Record<string, CollectionEntry[]> = {};
  const defaultSeriesKey = "";
  brandModels[defaultSeriesKey] = [];

  Object.assign(
    {},
    Object.entries(CollectionItemsDB)
      .filter(([, entry]) => entry.brand == brand)
      .sort(([, va], [, vb]) => vb.year - va.year) // DESC order
      .map(([, entry]) => {
        seriesKey = entry.href.default.technicalData.information.series;
        if (seriesKey in brandModels) {
          // key in BrandModels imples we already processed this series before
          brandModels[seriesKey].push(entry);
        } else if (displayBySeries == true) {
          // 1st entry if filtering by series
          brandModels[seriesKey] = [entry];
        } else {
          // if not filtering by series, simply add to default key
          brandModels[defaultSeriesKey].push(entry);
        }
      }),
  );

  if (brandModels[defaultSeriesKey].length == 0) {
    delete brandModels[defaultSeriesKey];
  }

  return brandModels;
}

function getModelInformationByKey(key: string): CollectionEntry | undefined {
  return CollectionItemsDB[key];
}

function getSoldModels(): CollectionEntry[] {
  return Object.assign(
    {},
    Object.entries(CollectionItemsDB)
      .filter(([, v]) => {
        return v.href.default.saleReport != undefined;
      })
      .sort(([, a], [, b]) => {
        // Convert "DD/MM/YYYY" to a proper Date object
        const parseDate = (dateStr: string): number => {
          const [day, month, year] = dateStr.split("/").map(Number);
          return new Date(year, month - 1, day).getTime(); // Convert to timestamp
        };

        return (
          parseDate(b.href.default.saleReport?.date || "") -
          parseDate(a.href.default.saleReport?.date || "")
        );
      }) // DESC order
      .map(([, v]) => v),
  );
}

function getCollectionStatistic(): Record<string, number | string> {
  const brandByLetter = brandsService.getAllBrands();

  const numModels = Object.keys(CollectionItemsDB).length;
  const numSoldModels = Object.values(getSoldModels()).length;

  let numBrands = 0;
  Object.values(brandByLetter).map((brands) => {
    numBrands += brands.length;
  });

  return {
    "Watch Brands": numBrands,
    "Models Handled": numModels,
    Sales: numSoldModels,
  };
}

const collectionService = {
  getCollectionModelsByBrand,
  getModelInformationByKey,
  getSoldModels,
  getCollectionStatistic,
};

export default collectionService;
