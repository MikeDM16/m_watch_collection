import { Brand, brandsDB } from "../data/brands";
import CollectionItemsDB from "../data/collectionData";

function getMainBrands(): Brand[] {
  /**
   * Get main brands
   * Defined with display order. Returned ordered by displayOrder
   */
  console.log("Returning main brands");
  return brandsDB
    .filter((entry) => entry.displayOrder != undefined)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
}

function getSecondaryBrands(): Brand[] {
  /**
   * Get secondary brands, that don't have displayOrder
   */
  console.log("Returning secondary brands");
  return brandsDB.filter((entry) => entry.displayOrder == undefined);
}

function getBrandInformation(brandName: string): Brand | undefined {
  return brandsDB.find((entry) => entry.name == brandName);
}

function getAllBrands(): Record<string, Brand[]> {
  /**
   * Get a Mapping of all brands by first letter
   */
  let usedBrands = Object.entries(CollectionItemsDB).map(([, entry]) => {
    if (entry.href.default.technicalData) {
      return entry.href.default.technicalData.information.brand;
    }
  });
  usedBrands = [...new Set(usedBrands)];

  const allBrands: Record<string, Brand[]> = {};
  brandsDB.map((entry) => {
    const key: string = entry.name[0];
    if (!usedBrands.indexOf(key)) {
      return;
    }
    if (key in allBrands) {
      allBrands[key].push(entry);
    } else {
      allBrands[key] = [entry];
    }
  });

  // sort keys by alphabetical order
  const sortedEntries = Object.entries(allBrands).sort(([ka], [kb]) => ka.localeCompare(kb));
  console.log("Returning all brands map");

  // after the sort, return back the dict in the Record<> structure
  return Object.fromEntries(sortedEntries);
}

const brandsService = { getMainBrands, getSecondaryBrands, getAllBrands, getBrandInformation };

export default brandsService;
