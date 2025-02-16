import CollectionItemsDB, { CollectionEntry } from "../data/collectionData";

export function getCollectionModelsByBrand(brand: string): CollectionEntry[] {
  return Object.assign(
    [],
    Object.entries(CollectionItemsDB)
      .filter(([, entry]) => entry.brand == brand)
      .sort(([, va], [, vb]) => vb.year - va.year) // DESC order
      .map(([, entry]) => entry),
  );
}
