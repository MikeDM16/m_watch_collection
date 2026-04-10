import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const DATA_DIR = path.join(process.cwd(), "src", "app", "data");
const WATCH_MODELS_DIR = path.join(DATA_DIR, "watchModels");

function listModelsForBrand(brandFolder: string): string[] {
  const dir = path.join(WATCH_MODELS_DIR, brandFolder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(
      (f) =>
        f.endsWith(".tsx") &&
        !f.includes("collection_set") &&
        !f.includes("Collection_set") &&
        !f.includes("BrandSeries") &&
        !f.includes("Olympic_collection") &&
        !f.includes("Polaris_set"),
    )
    .sort();
}

function listBrandFolders(): string[] {
  return fs
    .readdirSync(WATCH_MODELS_DIR)
    .filter((f) => fs.statSync(path.join(WATCH_MODELS_DIR, f)).isDirectory())
    .sort();
}

function listMovementKeys(): string[] {
  const content = fs.readFileSync(path.join(DATA_DIR, "movementsData.tsx"), "utf-8");
  const keys: string[] = [];
  let inDb = false;
  for (const line of content.split("\n")) {
    if (line.includes("MovementsDataDB") && line.includes("{")) {
      inDb = true;
      continue;
    }
    if (inDb) {
      if (line.trim().startsWith("}")) break;
      const match = line.match(/^\s+(\w+)\s*:/);
      if (match) keys.push(match[1]);
    }
  }
  return keys;
}

function readModelFile(brandFolder: string, filename: string): string {
  const filepath = path.join(WATCH_MODELS_DIR, brandFolder, filename);
  return fs.readFileSync(filepath, "utf-8");
}

function listBrandSeries(brandFolder: string): Record<string, string> | null {
  const dir = path.join(WATCH_MODELS_DIR, brandFolder);
  if (!fs.existsSync(dir)) return null;
  const seriesFiles = fs.readdirSync(dir).filter((f) => f.includes("BrandSeries"));
  if (seriesFiles.length === 0) return null;
  const content = fs.readFileSync(path.join(dir, seriesFiles[0]), "utf-8");
  const result: Record<string, string> = {};
  for (const match of content.matchAll(/(\w+)\s*:\s*"([^"]*)"/g)) {
    result[match[1]] = match[2];
  }
  return result;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  if (action === "brands") {
    return NextResponse.json({ brands: listBrandFolders() });
  }

  if (action === "brandLogos") {
    const content = fs.readFileSync(path.join(DATA_DIR, "brands.tsx"), "utf-8");
    const baseUrl = "https://raw.githubusercontent.com/MikeDM16/MWatchCollectionResources/master";
    const logos: Record<string, string> = {};
    const blocks = content.split(/\{(?=\s*name:)/);
    for (const block of blocks) {
      const nameMatch = block.match(/name:\s*BrandsEnum\.(\w+)/);
      const logoMatch = block.match(/logoImg:\s*"([^"]*)"/);
      if (nameMatch && logoMatch) {
        logos[nameMatch[1]] = `${baseUrl}/${encodeURI(logoMatch[1])}`;
      }
    }
    return NextResponse.json({ logos });
  }

  if (action === "models") {
    const brand = searchParams.get("brand");
    if (!brand) return NextResponse.json({ error: "brand required" }, { status: 400 });
    return NextResponse.json({
      models: listModelsForBrand(brand),
      series: listBrandSeries(brand),
    });
  }

  if (action === "allModels") {
    const allBrands = listBrandFolders();
    const allModels: { brand: string; file: string }[] = [];
    for (const b of allBrands) {
      for (const m of listModelsForBrand(b)) {
        allModels.push({ brand: b, file: m });
      }
    }
    return NextResponse.json({ allModels });
  }

  if (action === "template") {
    const brand = searchParams.get("brand");
    const file = searchParams.get("file");
    if (!brand || !file)
      return NextResponse.json({ error: "brand and file required" }, { status: 400 });
    return NextResponse.json({ content: readModelFile(brand, file) });
  }

  if (action === "movements") {
    return NextResponse.json({ movements: listMovementKeys() });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
