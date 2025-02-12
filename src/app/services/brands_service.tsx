import { Brand, brandsDB } from "../data/brands";

function getMainBrands(): Brand[] {
  /**
   * Get main brands
   * Defined with display order. Returned ordered by display_order
   */
  console.log("Returning main brands");
  return brandsDB
    .filter((entry) => entry.display_order != undefined)
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
}

function getSecondaryBrands(): Brand[] {
  /**
   * Get secondary brands, that don't have display_order
   */
  console.log("Returning secondary brands");
  return brandsDB.filter((entry) => entry.display_order == undefined);
}

function getAllBrands(): Record<string, Brand[]> {
  /**
   * Get a Mapping of all brands by first letter
   */

  const allBrands: Record<string, Brand[]> = {};
  brandsDB.map((entry) => {
    const key: string = entry.name[0];
    if (key in allBrands) {
      allBrands[key].push(entry);
    } else {
      allBrands[key] = [entry];
    }
  });

  // sort keys by alphabetical order
  const sortedEntries =  Object.entries(allBrands).sort(([ka, ], [kb, ]) => ka.localeCompare(kb));

  // after the sort, return back the dict in the Record<> structure 
  return Object.fromEntries(sortedEntries);
}

const brand_service = { getMainBrands, getSecondaryBrands, getAllBrands };

export default brand_service;
