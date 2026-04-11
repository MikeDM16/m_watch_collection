import fs from "fs";
import path from "path";

import CollectionItemsDB from "../src/app/data/admin/collectionData";

// Read collectionData.tsx as text to extract require("./watchModels/...") paths
const dataFilePath = path.resolve(__dirname, "../src/app/data/admin/collectionData.tsx");
const fileContent = fs.readFileSync(dataFilePath, "utf-8");

// Parse key -> modelFile mapping by scanning lines sequentially
const keyToModelFile: Record<string, string> = {};
let currentKey = "";
for (const line of fileContent.split("\n")) {
  const keyMatch = line.match(/^\s+"([^"]+)":\s*\{/);
  if (keyMatch) currentKey = keyMatch[1];
  const reqMatch = line.match(/require\("\.\.?\/watchModels\/([^"]+)"\)/);
  if (reqMatch && currentKey) {
    keyToModelFile[currentKey] = reqMatch[1];
    currentKey = "";
  }
}

// Build the lightweight index
interface CollectionIndexEntry {
  brand: string;
  legend: string;
  year: number;
  type: string;
  srcImage: string;
  hoverSrc: string | null;
  specialCollectionItem: boolean;
  collectionSet: boolean;
  series: string;
  movementTitle: string;
  saleReport: { price: number; date: string; url?: string } | null;
  modelFile: string;
}

const index: Record<string, CollectionIndexEntry> = {};

for (const [key, entry] of Object.entries(CollectionItemsDB)) {
  const details = entry.href.default;
  const modelFile = keyToModelFile[key];

  if (!modelFile) {
    console.warn(`No modelFile path found for key: "${key}"`);
    continue;
  }

  index[key] = {
    brand: entry.brand,
    legend: entry.legend,
    year: entry.year,
    type: entry.type,
    srcImage: entry.srcImage,
    hoverSrc: entry.hoverSrc ?? null,
    specialCollectionItem: entry.specialCollectionItem ?? false,
    collectionSet: entry.collectionSet ?? false,
    series: details.technicalData?.information?.series ?? "",
    movementTitle: details.technicalData?.movement?.title ?? "",
    saleReport: details.saleReport
      ? {
          price: details.saleReport.price,
          date: details.saleReport.date,
          url: details.saleReport.url,
        }
      : null,
    modelFile,
  };
}

const outputPath = path.resolve(__dirname, "../src/app/data/collection-index.json");
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
console.log(`Generated collection index: ${Object.keys(index).length} entries → ${outputPath}`);
