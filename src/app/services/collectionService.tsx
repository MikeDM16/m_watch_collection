import CollectionItemsDB, { CollectionEntry } from "../data/collectionData";

export function getCollectionModelsByBrand(brand: string): CollectionEntry[] {
  return Object.assign(
    [],
    Object.entries(CollectionItemsDB)
      .filter(([, entry]) => entry.brand == brand)
      .map(([, entry]) => entry),
  );
}
