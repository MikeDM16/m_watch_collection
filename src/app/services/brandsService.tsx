import { Brand, brandsDB, mainBrandsOrder } from "../data/brands";
import CollectionIndex from "../data/collectionIndex";

function getMainBrands(): Brand[] {
  /**
   * Get main brands, in the order given by mainBrandsOrder.
   *
   * That list is the source of truth for the homepage logo wall: to move a
   * brand, move its line there. A listed name with no matching entry in
   * brandsDB is a typo or a brand queued before it was added — skip it so the
   * wall still renders, and say so, because the alternative is a brand
   * silently disappearing.
   */
  return mainBrandsOrder.flatMap((name) => {
    const brand = brandsDB.find((entry) => entry.name === name);
    if (!brand) {
      console.warn(`[brandsService] mainBrandsOrder lists "${name}", absent from brandsDB.`);
      return [];
    }
    return [brand];
  });
}

function getSecondaryBrands(): Brand[] {
  /**
   * Get secondary brands: every brand that is not on the main wall.
   */
  const main = new Set(mainBrandsOrder);
  return brandsDB.filter((entry) => !main.has(entry.name));
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
