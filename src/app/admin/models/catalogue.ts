import fs from "fs";
import path from "path";
import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WatchTypeEnum } from "@/app/enums/watchTypeEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
import ts from "typescript";

import { parse } from "../sourceEdit";

/**
 * The choices a model can be given: every enum's values, a brand's series and
 * the movement database. Enums are imported (no save ever changes them); the
 * series and movement files are read as source, so nothing a save rewrites
 * ends up compiled into the editor.
 */

const DATA_DIR = path.join(process.cwd(), "src", "app", "data");
export const MODELS_DIR = path.join(DATA_DIR, "watchModels");

export interface Option {
  value: string;
  label: string;
}

const ENUMS: Record<string, Record<string, string>> = {
  BezelTypeEnum,
  BraceletMaterialEnum,
  BraceletWidthEnum,
  BrandsEnum,
  BuckleTypeEnum,
  CalendarWatchTypeEnum,
  CaseBackDetailsEnum,
  CaseDiameterEnum,
  CaseFinishingEnum,
  CaseMaterialEnum,
  CaseThicknessEnum,
  ColorEnum,
  CrownWatchTypeEnum,
  CrystalMaterialEnum,
  DialMarketsEnum,
  FinishingDetailsEnum,
  LuminescentIndexesEnum,
  MovementWatchTypeEnum,
  WatchStyleEnum,
  WatchTypeEnum,
  WaterResistanceEnum,
  featuresEnum: Object.fromEntries(Object.entries(featuresEnum).map(([k, f]) => [k, f.name])),
};

/** Every enum's values, in declaration order (a join's second value is a suffix). */
export function enumOptions(): Record<string, Option[]> {
  return Object.fromEntries(
    Object.entries(ENUMS).map(([name, values]) => [
      name,
      Object.entries(values).map(([value, label]) => ({ value, label: label.trim() || value })),
    ]),
  );
}

export function enumKeys(): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(ENUMS).map(([name, values]) => [name, Object.keys(values)]),
  );
}

/**
 * The brand's `*BrandSeries.tsx`, if it has one: its name and each key path
 * (`SPEEDMASTER.RACING`) with the series it stands for, "Speedmaster — Racing".
 */
export function brandSeries(brandFolder: string): { name: string; options: Option[] } | null {
  const dir = path.join(MODELS_DIR, brandFolder);
  const file = fs.existsSync(dir) && fs.readdirSync(dir).find((f) => /BrandSeries\.tsx$/.test(f));
  if (!file) return null;
  const name = file.replace(/\.tsx$/, "");
  const { obj } = parse(fs.readFileSync(path.join(dir, file), "utf-8"), name);
  const options: Option[] = [];
  for (const p of obj.properties) {
    if (!ts.isPropertyAssignment(p) || !p.name || !ts.isIdentifier(p.name)) continue;
    const key = p.name.text;
    const init = p.initializer;
    if (ts.isStringLiteralLike(init)) options.push({ value: key, label: init.text });
    else if (ts.isCallExpression(init) && init.arguments.length === 2) {
      const [group, subs] = init.arguments;
      if (!ts.isStringLiteralLike(group) || !ts.isObjectLiteralExpression(subs)) continue;
      for (const s of subs.properties) {
        if (!ts.isPropertyAssignment(s) || !ts.isIdentifier(s.name)) continue;
        const sub = ts.isStringLiteralLike(s.initializer) ? s.initializer.text : "";
        options.push({
          value: `${key}.${s.name.text}`,
          label: sub ? `${group.text} — ${sub}` : group.text,
        });
      }
    }
  }
  return { name, options };
}

export interface MovementEntry {
  /** The file under data/movements/, without `.tsx`: `Omega/OMEGA_3220_47J`. */
  path: string;
  /** Its MovementsDataDB keys (two keys can share a file). */
  keys: string[];
  /** The variable movementsData imports it as. */
  variable: string;
  title: string;
}

/** The movement database (data/admin/movementsData.tsx), by file. */
export function listMovements(): MovementEntry[] {
  const text = fs.readFileSync(path.join(DATA_DIR, "admin", "movementsData.tsx"), "utf-8");
  const { source, obj } = parse(text, "MovementsDataDB");
  const modules = new Map<string, string>();
  for (const st of source.statements) {
    if (!ts.isImportDeclaration(st) || !st.importClause?.name) continue;
    const from = (st.moduleSpecifier as ts.StringLiteral).text;
    if (from.startsWith("../movements/")) {
      modules.set(st.importClause.name.text, from.slice("../movements/".length));
    }
  }
  const byPath = new Map<string, MovementEntry>();
  for (const p of obj.properties) {
    const variable =
      ts.isPropertyAssignment(p) && ts.isIdentifier(p.initializer)
        ? p.initializer.text
        : ts.isShorthandPropertyAssignment(p)
          ? p.name.text
          : null;
    const key = p.name && ts.isIdentifier(p.name) ? p.name.text : null;
    const file = variable && modules.get(variable);
    if (!key || !file || !variable) continue;
    const known = byPath.get(file);
    if (known) known.keys.push(key);
    else byPath.set(file, { path: file, keys: [key], variable, title: movementTitle(file) });
  }
  return [...byPath.values()];
}

function movementTitle(file: string): string {
  try {
    const text = fs.readFileSync(path.join(DATA_DIR, "movements", `${file}.tsx`), "utf-8");
    const match = /\btitle:\s*("(?:[^"\\]|\\.)*")/.exec(text);
    return match ? (JSON.parse(match[1]) as string) : file;
  } catch {
    return file;
  }
}
