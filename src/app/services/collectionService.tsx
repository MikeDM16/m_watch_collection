import CollectionItemsDB, { CollectionEntry } from "../data/collectionData";

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

const collectionService = { getCollectionModelsByBrand, getModelInformationByKey };

export default collectionService;
