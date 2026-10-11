/**
 * Read-only context snapshot for the /add-watches skill.
 *
 * One call answers what a batch needs before anything is planned: does each
 * brand exist and where do its files live, does each caliber already have a
 * movement file (or a mention inside another movement's variant list), and
 * which enum keys exist.
 *
 *   npx tsx .claude/skills/add-watches/scripts/lookup.ts \
 *     --brand "Cortébert" --brand Certina \
 *     --caliber "Cortebert 573" --caliber "Certina 25-651" \
 *     --enums
 *
 * Run it from the repo root: tsx resolves the "@/..." alias that the movement
 * files use from ./tsconfig.json. The photo repo is expected beside this one;
 * point WATCH_RESOURCES_DIR at its public/assets/Images folder otherwise.
 */
import fs from "fs";
import path from "path";

import { MovementsDataDB } from "../../../../src/app/data/admin/movementsData";
import { brandsDB } from "../../../../src/app/data/brands";
import type { Caliber } from "../../../../src/app/data/caliberTypes";
import { BraceletMaterialEnum } from "../../../../src/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "../../../../src/app/enums/braceletWidthEnum";
import { BrandsEnum } from "../../../../src/app/enums/brandsEnum";
import { CalendarWatchTypeEnum } from "../../../../src/app/enums/calendarWatchTypeEnum";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "../../../../src/app/enums/caliberEnums";
import { CaseDiameterEnum } from "../../../../src/app/enums/caseDiameterEnum";
import { CaseMaterialEnum } from "../../../../src/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "../../../../src/app/enums/caseThicknessEnum";
import { ColorEnum } from "../../../../src/app/enums/colorEnum";
import { DialMarketsEnum } from "../../../../src/app/enums/dialMarketsEnum";
import { featuresEnum } from "../../../../src/app/enums/featuresEnum";
import { MovementWatchTypeEnum } from "../../../../src/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "../../../../src/app/enums/watchStyleEnum";
import { WatchTypeEnum } from "../../../../src/app/enums/watchTypeEnum";

const ROOT = path.resolve(__dirname, "../../../..");
const DATA_DIR = path.join(ROOT, "src/app/data");
const MODELS_DIR = path.join(DATA_DIR, "watchModels");
const MOVEMENTS_DIR = path.join(DATA_DIR, "movements");
const IMAGES_DIR =
  process.env.WATCH_RESOURCES_DIR ??
  path.resolve(ROOT, "../MWatchCollectionResources/public/assets/Images");

const MAX_MENTIONS = 12;

// ---------------------------------------------------------------------------
// Helpers

/** Accent- and case-insensitive, alphanumerics only: "Cortébert" -> "cortebert". */
function norm(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/** The folder/file spelling the repo uses: "Ernest Borel" -> "Ernest_Borel". */
function asciiFolder(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9 _-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "_");
}

function levenshtein(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diagonal = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const above = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
      diagonal = above;
    }
  }
  return row[b.length];
}

function listEntries(dir: string, kind: "dir" | "file"): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => (kind === "dir" ? entry.isDirectory() : entry.isFile()))
    .map((entry) => entry.name)
    .sort();
}

function walkTsx(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkTsx(full);
    return entry.name.endsWith(".tsx") ? [full] : [];
  });
}

const rel = (file: string) => path.relative(ROOT, file).replace(/\\/g, "/");

/**
 * A caliber reference as a regex that tolerates the separators the data mixes:
 * "25-651" also finds "25_651", "25 651" and "25.651", but not "125-651".
 */
function refPattern(ref: string): RegExp | null {
  const chunks = ref.split(/[^A-Za-z0-9]+/).filter(Boolean);
  if (chunks.length === 0) return null;
  return new RegExp(`(?<![A-Za-z0-9])${chunks.join("[-_ ./]?")}(?![0-9])`, "i");
}

/** The longest digit run, for loose matches: "KF320B" -> "320". */
function digitCore(ref: string): RegExp | null {
  const runs = ref.match(/\d+/g) ?? [];
  const longest = runs.sort((a, b) => b.length - a.length)[0];
  if (!longest || longest.length < 2) return null;
  return new RegExp(`(?<![0-9])${longest}(?![0-9])`);
}

const lines: string[] = [];
const out = (line = "") => lines.push(line);

// ---------------------------------------------------------------------------
// Registries, read once

interface RegistryModel {
  legend: string;
  brandKey: string;
  year: string;
  modelFile: string;
}

/** collectionData.tsx, read as text: importing it would load all ~330 model files. */
function readCollection(): RegistryModel[] {
  const text = fs.readFileSync(path.join(DATA_DIR, "admin/collectionData.tsx"), "utf-8");
  const models: RegistryModel[] = [];
  let current: Partial<RegistryModel> = {};
  for (const line of text.split("\n")) {
    const key = line.match(/^\s+"([^"]+)":\s*\{/);
    if (key) current = { legend: key[1] };
    const brand = line.match(/brand:\s*BrandsEnum\.(\w+)/);
    if (brand) current.brandKey = brand[1];
    const year = line.match(/year:\s*(\d+)/);
    if (year) current.year = year[1];
    const req = line.match(/require\("\.\.?\/watchModels\/([^"]+)"\)/);
    if (req && current.legend) {
      models.push({
        legend: current.legend,
        brandKey: current.brandKey ?? "?",
        year: current.year ?? "?",
        modelFile: req[1],
      });
      current = {};
    }
  }
  return models;
}

interface RegistryMovement {
  key: string;
  importPath: string;
  caliber: Caliber;
}

/** MovementsDataDB, with each key's file path recovered from the import lines. */
function readMovements(): RegistryMovement[] {
  const text = fs.readFileSync(path.join(DATA_DIR, "admin/movementsData.tsx"), "utf-8");
  const varToPath = new Map<string, string>();
  for (const match of text.matchAll(/^import (\w+) from "\.\.\/movements\/([^"]+)";/gm)) {
    varToPath.set(match[1], match[2]);
  }
  const keyToVar = new Map<string, string>();
  const body = text.slice(text.indexOf("export const MovementsDataDB"));
  for (const match of body.matchAll(/^\s+(\w+):\s*(\w+),/gm)) {
    keyToVar.set(match[1], match[2]);
  }
  return Object.entries(MovementsDataDB).map(([key, caliber]) => ({
    key,
    caliber,
    importPath: varToPath.get(keyToVar.get(key) ?? key) ?? "?",
  }));
}

// ---------------------------------------------------------------------------
// Brands

function reportBrand(query: string, models: RegistryModel[]) {
  const q = norm(query);
  const entries = Object.entries(BrandsEnum);
  const hit = entries.find(([key, value]) => norm(key) === q || norm(value) === q);

  out(`## Brand "${query}"`);
  if (hit) {
    out(`BrandsEnum: ${hit[0]} = "${hit[1]}"`);
  } else {
    const near = entries
      .filter(([, value]) => {
        const v = norm(value);
        return v.includes(q) || q.includes(v) || levenshtein(v, q) <= 2;
      })
      .map(([key, value]) => `${key} ("${value}")`);
    out(`BrandsEnum: NONE${near.length ? ` (near: ${near.join(", ")})` : ""}`);
  }

  const value = hit ? hit[1] : query;
  const own = hit ? models.filter((model) => model.brandKey === hit[0]) : [];
  const codeFolders = [...new Set(own.map((model) => model.modelFile.split("/")[0]))];
  const derived = asciiFolder(value);
  if (codeFolders.length) {
    out(`watchModels folder: ${codeFolders.join(", ")}`);
  } else {
    const exists = fs.existsSync(path.join(MODELS_DIR, derived));
    out(
      `watchModels folder: none yet (would be ${derived}${exists ? ", which already exists" : ""})`,
    );
  }

  for (const folder of codeFolders.length ? codeFolders : [derived]) {
    for (const file of listEntries(path.join(MODELS_DIR, folder), "file")) {
      if (!/BrandSeries\.tsx$/.test(file)) continue;
      const source = fs.readFileSync(path.join(MODELS_DIR, folder, file), "utf-8").trim();
      out(`series file ${folder}/${file}:`);
      source.split("\n").forEach((line) => out(`  ${line}`));
    }
  }

  const entry = brandsDB.find((brand) => brand.name === value);
  if (entry) {
    const parts = [
      `logoImg ${entry.logoImg}`,
      entry.website ? `website ${entry.website}` : "no website",
      entry.description ? "has description" : "no description",
      entry.foundedInformation ? `founded ${entry.foundedInformation.year}` : "no founded info",
      `displayBySeries ${entry.displayBySeries ?? false}`,
    ];
    out(`brandsDB: present (${parts.join("; ")})`);
  } else {
    out("brandsDB: NONE");
  }

  if (own.length) {
    out(`registry legends (${own.length}):`);
    own
      .sort((a, b) => a.year.localeCompare(b.year))
      .forEach((model) => out(`  ${model.year}  "${model.legend}"  <- ${model.modelFile}`));
  }

  if (!fs.existsSync(IMAGES_DIR)) {
    out(`resources repo: not found at ${IMAGES_DIR}`);
    return;
  }
  const logos = listEntries(path.join(IMAGES_DIR, "Brands_Logos"), "file").filter((file) => {
    const base = norm(file.replace(/_logo\.\w+$/i, ""));
    return base === norm(value) || base === q;
  });
  const expectedLogo = `${derived.toLowerCase()}_logo.PNG`;
  out(
    `logo: ${logos.length ? logos.join(", ") : `MISSING (expected Brands_Logos/${expectedLogo})`}`,
  );

  const imageFolders = new Set([...codeFolders, derived]);
  for (const dir of listEntries(IMAGES_DIR, "dir")) {
    if (norm(dir) === norm(value) || norm(dir) === q) imageFolders.add(dir);
  }
  for (const folder of imageFolders) {
    if (!fs.existsSync(path.join(IMAGES_DIR, folder))) continue;
    const subfolders = listEntries(path.join(IMAGES_DIR, folder), "dir");
    out(`photo folders in Images/${folder}/:${subfolders.length ? "" : " (empty)"}`);
    subfolders.forEach((sub) => out(`  ${sub}`));
  }
  if (![...imageFolders].some((folder) => fs.existsSync(path.join(IMAGES_DIR, folder)))) {
    out(`photo folders: none (Images/${derived}/ does not exist)`);
  }
}

// ---------------------------------------------------------------------------
// Calibers

function splitCaliber(query: string): { maker: string; ref: string } {
  const words = query
    .replace(/^\s*cal(iber|ibre)?\.?\s+/i, "")
    .trim()
    .split(/\s+/);
  const firstNumeric = words.findIndex((word) => /\d/.test(word));
  if (firstNumeric <= 0) return { maker: "", ref: words.join(" ") };
  return {
    maker: words.slice(0, firstNumeric).join(" "),
    ref: words.slice(firstNumeric).join(" "),
  };
}

function describe(movement: RegistryMovement, usedBy: string[]): string {
  const { title, details } = movement.caliber;
  const fields = [
    `"${title}"`,
    `ref "${details.modelReference}"`,
    details.type,
    details.jewels,
    details.frequency ?? "no frequency",
    details.reserve ?? "reserve undefined",
  ];
  const users = usedBy.length ? `used by ${usedBy.length}: ${usedBy.join(", ")}` : "used by 0";
  return `${movement.key} <- movements/${movement.importPath} | ${fields.join(" | ")} | ${users}`;
}

function reportCaliber(
  query: string,
  movements: RegistryMovement[],
  movementFiles: Map<string, string>,
  modelFiles: Map<string, string>,
) {
  const { maker, ref } = splitCaliber(query);
  const exact = refPattern(ref);
  const loose = digitCore(ref);
  out(`## Caliber "${query}" (maker "${maker || "?"}", ref "${ref}")`);

  const usedBy = (movement: RegistryMovement) =>
    [...modelFiles]
      .filter(([, source]) => source.includes(`movements/${movement.importPath}"`))
      .map(([file]) => file.replace(/^src\/app\/data\/watchModels\//, "").replace(/\.tsx$/, ""));

  const haystack = (movement: RegistryMovement) => [
    movement.key,
    movement.caliber.title,
    movement.caliber.details.modelReference,
    movement.importPath,
  ];
  const exactHits = movements.filter((m) => exact && haystack(m).some((s) => exact.test(s)));
  const looseHits = movements.filter(
    (m) => !exactHits.includes(m) && loose && haystack(m).some((s) => loose.test(s)),
  );

  out(exactHits.length ? "registry, exact:" : "registry, exact: NONE");
  exactHits.forEach((m) => out(`  ${describe(m, usedBy(m))}`));
  if (looseHits.length) {
    out("registry, same digits (check before reusing):");
    looseHits.forEach((m) => out(`  ${describe(m, usedBy(m))}`));
  }

  // Calibers that only live in another movement's variant list, or inline in a model.
  const hitFiles = new Set(exactHits.map((m) => `src/app/data/movements/${m.importPath}.tsx`));
  const mentions: string[] = [];
  if (exact) {
    for (const [file, source] of [...movementFiles, ...modelFiles]) {
      if (hitFiles.has(file)) continue;
      const isModel = file.includes("/watchModels/");
      source.split("\n").forEach((line, index) => {
        if (isModel && !/title:|modelReference:/.test(line)) return;
        if (exact.test(line)) mentions.push(`  ${file}:${index + 1}  ${line.trim().slice(0, 140)}`);
      });
    }
  }
  out(mentions.length ? "mentioned in:" : "mentioned in: nowhere else");
  mentions.slice(0, MAX_MENTIONS).forEach((line) => out(line));
  if (mentions.length > MAX_MENTIONS) out(`  ... ${mentions.length - MAX_MENTIONS} more`);

  let makerFolders: string[] = [];
  if (maker) {
    const m = norm(maker);
    const brand = Object.entries(CaliberBrandsEnum).find(
      ([key, value]) => norm(key) === m || norm(value) === m || norm(value).startsWith(m),
    );
    if (brand) {
      out(`CaliberBrandsEnum: ${brand[0]} = "${brand[1]}"`);
      const siblings = movements.filter((mv) => mv.caliber.details.manufacturer === brand[1]);
      makerFolders = [...new Set(siblings.map((mv) => mv.importPath.split("/")[0]))];
      out(`movements folder: ${makerFolders.join(", ") || "none yet"}`);
      siblings
        .slice(0, 4)
        .forEach((mv) =>
          out(
            `  style: title "${mv.caliber.title}", modelReference "${mv.caliber.details.modelReference}", file ${mv.importPath}`,
          ),
        );
    } else {
      out(`CaliberBrandsEnum: NONE (movements folder would be ${asciiFolder(maker)})`);
      makerFolders = [asciiFolder(maker)];
    }
  }

  const movementImages = path.join(IMAGES_DIR, "Movements");
  if (!fs.existsSync(movementImages)) return;
  const searchFolders = makerFolders.length ? makerFolders : listEntries(movementImages, "dir");
  const photoHits = searchFolders.flatMap((folder) =>
    listEntries(path.join(movementImages, folder), "dir")
      .filter((dir) => (exact && exact.test(dir)) || (loose && loose.test(dir)))
      .map((dir) => `Movements/${folder}/${dir}`),
  );
  out(`movement photo folders: ${photoHits.length ? photoHits.join(", ") : "none"}`);
}

// ---------------------------------------------------------------------------
// Enums

function reportEnums() {
  const enums: Record<string, Record<string, string>> = {
    CaseDiameterEnum,
    CaseThicknessEnum,
    CaseMaterialEnum,
    MovementWatchTypeEnum,
    WatchStyleEnum,
    WatchTypeEnum,
    CaliberBrandsEnum,
    JewelsNumberEnum,
    FrequencyEnum,
    ReserveHoursEnum,
    CalendarWatchTypeEnum,
    DialMarketsEnum,
    ColorEnum,
    BraceletMaterialEnum,
    BraceletWidthEnum,
    featuresEnum: Object.fromEntries(
      Object.entries(featuresEnum).map(([key, feature]) => [key, feature.name]),
    ),
  };
  out("## Enum keys");
  for (const [name, values] of Object.entries(enums)) {
    const pairs = Object.entries(values).map(([key, value]) => `${key}="${value}"`);
    out(`${name}: ${pairs.join(" | ")}`);
  }
}

// ---------------------------------------------------------------------------

function main() {
  const brands: string[] = [];
  const calibers: string[] = [];
  let withEnums = false;
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--enums") withEnums = true;
    else if (arg === "--brand" && argv[i + 1]) brands.push(argv[++i]);
    else if (arg === "--caliber" && argv[i + 1]) calibers.push(argv[++i]);
    else {
      console.error(`Unknown or incomplete argument: ${arg}`);
      console.error(
        'Usage: lookup.ts [--brand "<name>"]... [--caliber "<maker> <ref>"]... [--enums]',
      );
      process.exit(1);
    }
  }

  const models = readCollection();
  const movements = readMovements();
  const read = (files: string[]) =>
    new Map(files.map((file) => [rel(file), fs.readFileSync(file, "utf-8")]));
  const movementFiles = read(walkTsx(MOVEMENTS_DIR));
  const modelFiles = read(walkTsx(MODELS_DIR));

  out(`resources repo: ${fs.existsSync(IMAGES_DIR) ? IMAGES_DIR : `NOT FOUND at ${IMAGES_DIR}`}`);
  out(`registry: ${models.length} models, ${movements.length} movements`);
  for (const brand of brands) {
    out();
    reportBrand(brand, models);
  }
  for (const caliber of calibers) {
    out();
    reportCaliber(caliber, movements, movementFiles, modelFiles);
  }
  if (withEnums) {
    out();
    reportEnums();
  }
  console.log(lines.join("\n"));
}

main();
