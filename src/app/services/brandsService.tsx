import { Brand, brandsDB } from "../data/brands";
import CollectionIndex from "../data/collectionIndex";

function getMainBrands(): Brand[] {
  /**
   * Get main brands
   * Defined with display order. Returned ordered by displayOrder
   */
  return brandsDB
    .filter((entry) => entry.displayOrder != undefined)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
}

function getSecondaryBrands(): Brand[] {
  /**
   * Get secondary brands, that don't have displayOrder
   */
  return brandsDB.filter((entry) => entry.displayOrder == undefined);
}

function getBrandInformation(brandName: string): Brand | undefined {
  return brandsDB.find((entry) => entry.name == brandName);
}

function getAllBrands(): Record<string, Brand[]> {
  /**
   * Get a mapping of the brands that actually have models, keyed by first
   * letter.
   *
   * The filter used to read `if (!usedBrands.indexOf(key)) return;`, which
   * never excluded anything: `usedBrands` holds brand *names* while `key` is a
   * single letter, so indexOf returned -1 and `!(-1)` is false. Every brand in
   * brandsDB fell through, including ones with nothing catalogued.
   */
  const usedBrands = new Set(Object.values(CollectionIndex).map((entry) => entry.brand));

  const allBrands: Record<string, Brand[]> = {};
  brandsDB.map((entry) => {
    if (!usedBrands.has(entry.name)) {
      return;
    }
    const key: string = entry.name[0];
    if (key in allBrands) {
      allBrands[key].push(entry);
    } else {
      allBrands[key] = [entry];
    }
  });

  // sort keys by alphabetical order
  const sortedEntries = Object.entries(allBrands).sort(([ka], [kb]) => ka.localeCompare(kb));

  // after the sort, return back the dict in the Record<> structure
  return Object.fromEntries(sortedEntries);
}

const brandsService = { getMainBrands, getSecondaryBrands, getAllBrands, getBrandInformation };

export default brandsService;
