import fs from "fs";
import path from "path";

// Mapping from MovementsDataDB key -> import path (relative to src/app/data/)
const DB_KEY_TO_PATH: Record<string, string> = {
  AS_1130: "./movements/AS/AS_1130_17J",
  AS_1950: "./movements/AS/AS_1950_17J",
  BREITLING_B40_38J: "./movements/Breitling/Breitling_B40_38J",
  CERTINA_331: "./movements/Certina/Certina_331_15J",
  CERTINA_25_261_27J: "./movements/Certina/Certina_25_261_28J",
  DD_2000_ETA_2982: "./movements/Debois_Depraz/DD_2000_2892",
  DD_2000_ETA_955_232: "./movements/Debois_Depraz/DD_2000_955",
  DOXA_83_4_987_17J: "./movements/Doxa/Doxa_83_4_987_17J",
  EBERHARD_16000_17J: "./movements/Eberhard/Eberhard_16000_17J",
  EXCELSIOR_PARK_40_68_17J: "./movements/Excelsior_Park/Excelsior_Park_40_68_17J",
  ETA_900: "./movements/ETA/ETA_900_17J",
  ETA_1256: "./movements/ETA/ETA_1256",
  ETA_251_251: "./movements/ETA/ETA_251_251_27J",
  ETA_251_262: "./movements/ETA/ETA_251_262_27J",
  ETA_251_265: "./movements/ETA/ETA_251_265_23J",
  ETA_251_272: "./movements/ETA/ETA_251_272_22J",
  ETA_2452: "./movements/ETA/ETA_2452_17J",
  ETA_2472: "./movements/ETA/ETA_2472_25J",
  ETA_2671: "./movements/ETA/ETA_2671_25J",
  ETA_2783: "./movements/ETA/ETA_2783",
  ETA_2824: "./movements/ETA/ETA_2824",
  ETA_2834: "./movements/ETA/ETA_2834",
  ETA_2836: "./movements/ETA/ETA_2836",
  ETA_2892_2_21J: "./movements/ETA/ETA_2892_21J",
  ETA_2894_2: "./movements/ETA/ETA_2894_2_37J",
  ETA_2895_1: "./movements/ETA/ETA_2895_1_30J",
  ETA_2895_2: "./movements/ETA/ETA_2895_2_27J",
  ETA_902_101: "./movements/ETA/ETA_902_101",
  ETA_955_112: "./movements/ETA/ETA_955_112",
  ETA_955_114: "./movements/ETA/ETA_955_114",
  ETA_A05_H31_27: "./movements/ETA/ETA_A05_H31_27J",
  ETA_C07_111: "./movements/ETA/C07_111",
  ETA_G10_211: "./movements/ETA/ETA_G10_211",
  ETA_G10_961: "./movements/ETA/ETA_G10_961",
  ETA_Valjoux_7750_17J: "./movements/ETA/ETA_Valjoux_7750_17J",
  ETA_Valjoux_7750_25J: "./movements/ETA/ETA_Valjoux_7750_25J",
  ETA_Valjoux_7751_25J: "./movements/ETA/ETA_Valjoux_7751_25J",
  ETA_Valjoux_7753_27: "./movements/ETA/ETA_Valjoux_7753_27J",
  ETA_Valjoux_7760_17: "./movements/ETA/ETA_Valjoux_7760_17J",
  FE_140: "./movements/FE/FE_140_17J",
  FE_233: "./movements/FE/FE_233_69_17J",
  FE_233_69: "./movements/FE/FE_233_69_17J",
  FE_TRIPLE_CALENDAR_5J: "./movements/FE/FE_Triple_Calendar_5J",
  FHF_96_4: "./movements/FHF/FHF_96_4_17J",
  FHF_974: "./movements/FHF/FHF_974_17J",
  FORTIS_AV_21J: "./movements/Fortis/Fortis_AV_21_jewels",
  HEUER_1_93: "./movements/Tag_Heuer/Tag_Heuer_1_93",
  HEUER_1_94: "./movements/Tag_Heuer/Tag_Heuer_1_94",
  HEUER_1_97: "./movements/Tag_Heuer/Tag_Heuer_1_97",
  HEUER_2_00: "./movements/Tag_Heuer/Tag_Heuer_2_00",
  HEUER_4_93: "./movements/Tag_Heuer/Tag_Heuer_4_93",
  HEUER_4_95: "./movements/Tag_Heuer/Tag_Heuer_4_95",
  HEUER_4_96: "./movements/Tag_Heuer/Tag_Heuer_4_96",
  LANDERON_48_17J: "./movements/Landeron/Landeron_48_17J",
  LANDERON_51_17J: "./movements/Landeron/Landeron_51_17J_",
  LANDERON_159_17J: "./movements/Landeron/Landeron_159_17J",
  LEMANIA_1281_17J: "./movements/Lemania/Lemania_1281_17_Jewels",
  LEMANIA_1341: "./movements/Lemania/Lemania_1341_17_Jewels",
  MIYOTA_OS10: "./movements/Miyota/OS10",
  MIYOTA_OS60: "./movements/Miyota/OS60",
  OMEGA_1141_45J: "./movements/Omega/Omega_1141",
  OMEGA_1151: "./movements/Omega/Omega_1151",
  OMEGA_1370: "./movements/Omega/Omega_1370",
  OMEGA_1430: "./movements/Omega/Omega_1430",
  OMEGA_1441: "./movements/Omega/Omega_1441",
  OMEGA_1445: "./movements/Omega/Omega_1445",
  OMEGA_1449: "./movements/Omega/Omega_1449",
  OMEGA_1665: "./movements/Omega/Omega_1665",
  OMEGA_1670: "./movements/Omega/Omega_1670",
  OMEGA_1675: "./movements/Omega/Omega_1675",
  OMEGA_265: "./movements/Omega/Omega_265_15J",
  OMEGA_266_17J: "./movements/Omega/Omega_266_17J",
  OMEGA_267: "./movements/Omega/Omega_267_17J",
  OMEGA_268: "./movements/Omega/Omega_268_17J",
  OMEGA_30T2: "./movements/Omega/Omega_30T2_15J",
  OMEGA_410: "./movements/Omega/Omega_410_17J",
  OMEGA_565: "./movements/Omega/Omega_565_24J",
  OMEGA_610_17J: "./movements/Omega/Omega_610_17J",
  OMEGA_672_24J: "./movements/Omega/Omega_672_24J",
  OMEGA_T17: "./movements/Omega/Omega_T17_15J",
  ORIENT_46D40: "./movements/Orient/Orient_46D40",
  POLJOT_3133_25J: "./movements/Poljot/Polot_3133_25_Jewels",
  PIGUET_1270_22J: "./movements/Piguet/Piguet_1270_22_Jewels",
  RAYMON_WEIL_4200: "./movements/Raymond_Weil/RW_4200",
  RONDA_5030D: "./movements/Ronda/Ronda_5030D",
  RONDA_5040D: "./movements/Ronda/Ronda_5040D",
  RONDA_6004B: "./movements/Ronda/Ronda_6004B",
  SEAGULL_ST2505: "./movements/Seagull/Seagull_ST2505",
  SEIKO_6306A: "./movements/Seiko/6306A",
  SEIKO_8M25: "./movements/Seiko/8M25",
  SELLITA_SW200: "./movements/Sellita/SW200",
  TAG_HEUER_2_95: "./movements/Tag_Heuer/Tag_Heuer_2_95",
  TAG_HEUER_CALIBER_16: "./movements/Tag_Heuer/Tag_Heuer_Caliber_16_25J",
  TISSOT_2031: "./movements/Tissot/2031",
  TISSOT_2060_7734_17J: "./movements/Tissot/2060_7734_17J",
  TISSOT_26_9_261: "./movements/Tissot/26_9_621_17J",
  TISSOT_27_2: "./movements/Tissot/27_2_17J",
  TISSOT_27_3: "./movements/Tissot/27_3_15J",
  TISSOT_27B_1: "./movements/Tissot/27B_1_15J",
  TISSOT_27B_21: "./movements/Tissot/27B_21_15J",
  TISSOT_781: "./movements/Tissot/781_17J",
  TISSOT_784: "./movements/Tissot/784_21J",
  TISSOT_794: "./movements/Tissot/794_21J",
  TISSOT_2170: "./movements/Tissot/2170_17J",
  TIMEX_M100: "./movements/Timex/Timex_M100",
  UNITAS_6380: "./movements/Unitas/Unitas_6380",
  UNIVERSAL_GENEVE_262_17J: "./movements/Universal_Geneve/UG_Cal_262_17J",
  VALJOUX_77_17J: "./movements/Valjoux/Valjoux_77_17J",
  VALJOUX_726_88_17J: "./movements/Valjoux/Valjoux_726_88_17J",
  VALJOIX_7734_17J: "./movements/Valjoux/7734_17J",
  VENUS_170_17J: "./movements/Venus/Venus_170_17J",
  VOSTOK_2605_17J: "./movements/Vostok/Vostok_2605_17J",
  ZENITH_106_15J: "./movements/Zenith/106_15J",
  ZENITH_EL_PRIMERO_400Z: "./movements/Zenith/El_Primero_400Z",
  ZENITH_EL_PRIMERO_4021: "./movements/Zenith/El_Primero_4021",
  ZENITH_P_12_4_50: "./movements/Zenith/P_12_4_50",
};

function findFiles(dir: string, ext: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(fullPath, ext));
    } else if (entry.name.endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

const watchModelsDir = path.resolve(__dirname, "../src/app/data/watchModels");
const files = findFiles(watchModelsDir, ".tsx");

let modifiedCount = 0;
let skippedCount = 0;
const errors: string[] = [];

for (const filePath of files) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Check if file imports MovementsDataDB
  if (!content.includes("MovementsDataDB")) {
    skippedCount++;
    continue;
  }

  // Find all MovementsDataDB.KEY references
  const keyRefs = [...content.matchAll(/MovementsDataDB\.(\w+)/g)];
  if (keyRefs.length === 0) {
    skippedCount++;
    continue;
  }

  // Collect unique keys used in this file
  const usedKeys = [...new Set(keyRefs.map((m) => m[1]))];

  // Build new imports and replacements
  const newImports: string[] = [];
  const replacements: [string, string][] = [];

  for (const key of usedKeys) {
    const movementPath = DB_KEY_TO_PATH[key];
    if (!movementPath) {
      errors.push(`${filePath}: Unknown MovementsDataDB key "${key}"`);
      continue;
    }

    // Convert ./movements/X/Y to ../../movements/X/Y (relative from watchModels/Brand/)
    const importPath = movementPath.replace("./movements/", "../../movements/");
    const varName = `movement_${key}`;

    newImports.push(`import ${varName} from "${importPath}";`);
    replacements.push([`MovementsDataDB.${key}`, varName]);
  }

  if (errors.length > 0 && errors[errors.length - 1].includes(filePath)) {
    continue;
  }

  // Remove the MovementsDataDB import line
  content = content.replace(
    /import\s*\{\s*MovementsDataDB\s*\}\s*from\s*"[^"]*movementsData[^"]*";\n?/,
    "",
  );

  // Add new direct imports (after the last existing enum import, before WatchDetails import)
  const watchDetailsImportIdx = content.indexOf("import { WatchDetails }");
  if (watchDetailsImportIdx !== -1) {
    content =
      content.slice(0, watchDetailsImportIdx) +
      newImports.join("\n") +
      "\n" +
      content.slice(watchDetailsImportIdx);
  } else {
    // Fallback: add at the end of imports section
    const lastImportIdx = content.lastIndexOf("import ");
    const lineEnd = content.indexOf("\n", lastImportIdx);
    content =
      content.slice(0, lineEnd + 1) + newImports.join("\n") + "\n" + content.slice(lineEnd + 1);
  }

  // Apply replacements
  for (const [from, to] of replacements) {
    content = content.replaceAll(from, to);
  }

  fs.writeFileSync(filePath, content, "utf-8");
  modifiedCount++;
}

console.log(`Modified: ${modifiedCount} files`);
console.log(`Skipped: ${skippedCount} files (no MovementsDataDB usage)`);
if (errors.length > 0) {
  console.log(`Errors:`);
  errors.forEach((e) => console.log(`  ${e}`));
}
