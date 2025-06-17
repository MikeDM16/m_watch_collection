import AS_1130 from "./movements/AS/AS_1130_17J";
import AS_1950 from "./movements/AS/AS_1950_17J";
import CERTINA_331 from "./movements/Certina/Certina_331_15J";
import DD_2000_ETA_955_232 from "./movements/Debois_Depraz/DD_2000_955";
import DD_2000_ETA_2982 from "./movements/Debois_Depraz/DD_2000_2892";
import EBERHARD_16000_17J from "./movements/Eberhard/Eberhard_16000_17J";
import ETA_C07_111 from "./movements/ETA/C07_111";
import ETA_251_262 from "./movements/ETA/ETA_251_262_27J";
import ETA_251_265 from "./movements/ETA/ETA_251_265_23J";
import ETA_251_272 from "./movements/ETA/ETA_251_272_22J";
import ETA_900 from "./movements/ETA/ETA_900_17J";
import ETA_902_101 from "./movements/ETA/ETA_902_101";
import ETA_955_112 from "./movements/ETA/ETA_955_112";
import ETA_955_114 from "./movements/ETA/ETA_955_114";
import ETA_1256 from "./movements/ETA/ETA_1256";
import ETA_2671 from "./movements/ETA/ETA_2671_25J";
import ETA_2783 from "./movements/ETA/ETA_2783";
import ETA_2824 from "./movements/ETA/ETA_2824";
import ETA_2836 from "./movements/ETA/ETA_2836";
import ETA_2894_2_37J from "./movements/ETA/ETA_2894_2_37J";
import ETA_2895_1_30J from "./movements/ETA/ETA_2895_1_30J";
import ETA_2895_2_27J from "./movements/ETA/ETA_2895_2_27J";
import ETA_A05_H31_27 from "./movements/ETA/ETA_A05_H31_27J";
import ETA_G10_211 from "./movements/ETA/ETA_G10_211";
import ETA_G10_961 from "./movements/ETA/ETA_G10_961";
import ETA_Valjoux_7750_17 from "./movements/ETA/ETA_Valjoux_7750_17J";
import ETA_Valjoux_7750_25 from "./movements/ETA/ETA_Valjoux_7750_25J";
import ETA_Valjoux_7751_25 from "./movements/ETA/ETA_Valjoux_7751_25J";
import FE_140 from "./movements/FE/FE_140_17J";
import FE_233_69 from "./movements/FE/FE_233_69_17J";
import FHF_96_4 from "./movements/FHF/FHF_96_4_17J";
import FHF_974 from "./movements/FHF/FHF_974_17J";
import Landeron_48_17J from "./movements/Landeron/Landeron_48_17J";
import Landeron_51_17J from "./movements/Landeron/Landeron_51_17J_";
import MIYOTA_OS10 from "./movements/Miyota/OS10";
import OMEGA_30T2 from "./movements/Omega/Omega_30T2_15J";
import OMEGA_265 from "./movements/Omega/Omega_265_15J";
import OMEGA_267 from "./movements/Omega/Omega_267_17J";
import OMEGA_268 from "./movements/Omega/Omega_268_17J";
import OMEGA_410 from "./movements/Omega/Omega_410_17J";
import OMEGA_1151 from "./movements/Omega/Omega_1151";
import OMEGA_1370 from "./movements/Omega/Omega_1370";
import OMEGA_1430 from "./movements/Omega/Omega_1430";
import OMEGA_1441 from "./movements/Omega/Omega_1441";
import OMEGA_1445 from "./movements/Omega/Omega_1445";
import OMEGA_1449 from "./movements/Omega/Omega_1449";
import OMEGA_1665 from "./movements/Omega/Omega_1665";
import OMEGA_1670 from "./movements/Omega/Omega_1670";
import OMEGA_1675 from "./movements/Omega/Omega_1675";
import OMEGA_T17 from "./movements/Omega/Omega_T17_15J";
import ORIENT_46D40 from "./movements/Orient/Orient_46D40";
import POLJOT_3133_25J from "./movements/Poljot/Polot_3133_25_Jewels";
import RW_4200 from "./movements/Raymond_Weil/RW_4200";
import RONDA_5030D from "./movements/Ronda/Ronda_5030D";
import RONDA_5040D from "./movements/Ronda/Ronda_5040D";
import RONDA_6004B from "./movements/Ronda/Ronda_6004B";
import SEAGULL_ST2505 from "./movements/Seagull/Seagull_ST2505";
import SEIKO_8M25 from "./movements/Seiko/8M25";
import SEIKO_6306A from "./movements/Seiko/6306A";
import SELLITA_SW200 from "./movements/Sellita/SW200";
import HEUER_1_93 from "./movements/Tag_Heuer/Tag_Heuer_1_93";
import HEUER_1_94 from "./movements/Tag_Heuer/Tag_Heuer_1_94";
import HEUER_1_97 from "./movements/Tag_Heuer/Tag_Heuer_1_97";
import HEUER_4_93 from "./movements/Tag_Heuer/Tag_Heuer_4_93";
import HEUER_4_95 from "./movements/Tag_Heuer/Tag_Heuer_4_95";
import HEUER_4_96 from "./movements/Tag_Heuer/Tag_Heuer_4_96";
import TIMEX_M100 from "./movements/Timex/Timex_M100";
import TISSOT_26_9_261 from "./movements/Tissot/26_9_621_17J";
import TISSOT_27_3 from "./movements/Tissot/27_3_15J";
import TISSOT_781 from "./movements/Tissot/781_17J";
import TISSOT_784 from "./movements/Tissot/784_21J";
import TISSOT_794 from "./movements/Tissot/794_21J";
import TISSOT_2031 from "./movements/Tissot/2031";
import TISSOT_2060_7734_17J from "./movements/Tissot/2060_7734_17J";
import UNITAS_6380 from "./movements/Unitas/Unitas_6380";
import ZENITH_EL_PRIMERO_400Z from "./movements/Zenith/El_Primero_400Z";
import ZENITH_EL_PRIMERO_4021 from "./movements/Zenith/El_Primero_4021";
import ZENITH_P_12_4_50 from "./movements/Zenith/P_12_4_50";

export const CaliberTechinicalDetailskeyToDisplayTextmappings: Record<string, string> = {
  manufacturer: "Manufacturer",
  modelReference: "Model",
  type: "Type",
  jewels: "Jewels",
  frequency: "Frequency",
  reserve: "Reserve",
  functions: "Functions",
  battery: "Battery",
};

export interface CaliberTechinicalDetails {
  manufacturer: string;
  modelReference: string;
  type: string;
  jewels: string;
  frequency?: string;
  reserve?: string;
  functions?: string;
  battery?: string;
}

export interface Caliber {
  title: string;
  details: CaliberTechinicalDetails;
  sliderImages: string[];
  description?: string;
  usefullLinks?: Record<string, string>;
}

export const MovementsDataDB: Record<string, Caliber> = {
  AS_1130: AS_1130,
  AS_1950: AS_1950,

  CERTINA_331: CERTINA_331,

  DD_2000_ETA_2982: DD_2000_ETA_2982,
  DD_2000_ETA_955_232: DD_2000_ETA_955_232,

  EBERHARD_16000_17J: EBERHARD_16000_17J,

  ETA_900: ETA_900,
  ETA_1256: ETA_1256,
  ETA_251_262: ETA_251_262,
  ETA_251_265: ETA_251_265,
  ETA_251_272: ETA_251_272,
  ETA_2671: ETA_2671,
  ETA_2783: ETA_2783,
  ETA_2824: ETA_2824,
  ETA_2836: ETA_2836,
  ETA_2894_2: ETA_2894_2_37J,
  ETA_2895_1: ETA_2895_1_30J,
  ETA_2895_2: ETA_2895_2_27J,
  ETA_902_101: ETA_902_101,
  ETA_955_112: ETA_955_112,
  ETA_955_114: ETA_955_114,
  ETA_A05_H31_27: ETA_A05_H31_27,
  ETA_C07_111: ETA_C07_111,
  ETA_G10_211: ETA_G10_211,
  ETA_G10_961: ETA_G10_961,
  ETA_Valjoux_7750_17J: ETA_Valjoux_7750_17,
  ETA_Valjoux_7750_25J: ETA_Valjoux_7750_25,
  ETA_Valjoux_7751_25J: ETA_Valjoux_7751_25,

  FE_140: FE_140,
  FE_233: FE_233_69,
  FE_233_69: FE_233_69,

  FHF_96_4: FHF_96_4,
  FHF_974: FHF_974,

  // same base ETA 955.112 / 412
  HEUER_1_93: HEUER_1_93,
  HEUER_1_94: HEUER_1_94,
  HEUER_1_97: HEUER_1_97,
  HEUER_4_93: HEUER_4_93,
  HEUER_4_95: HEUER_4_95,
  HEUER_4_96: HEUER_4_96,

  LANDERON_48_17J: Landeron_48_17J,
  LANDERON_51_17J: Landeron_51_17J,

  MIYOTA_OS10: MIYOTA_OS10,

  OMEGA_1151: OMEGA_1151,
  OMEGA_1370: OMEGA_1370,
  OMEGA_1430: OMEGA_1430,
  OMEGA_1441: OMEGA_1441,
  OMEGA_1445: OMEGA_1445,
  OMEGA_1449: OMEGA_1449,
  OMEGA_1665: OMEGA_1665,
  OMEGA_1670: OMEGA_1670,
  OMEGA_1675: OMEGA_1675,
  OMEGA_265: OMEGA_265,
  OMEGA_267: OMEGA_267,
  OMEGA_268: OMEGA_268,
  OMEGA_30T2: OMEGA_30T2,
  OMEGA_410: OMEGA_410,
  OMEGA_T17: OMEGA_T17,

  ORIENT_46D40: ORIENT_46D40,

  POLJOT_3133_25J: POLJOT_3133_25J,

  RAYMON_WEIL_4200: RW_4200,

  RONDA_5030D: RONDA_5030D,
  RONDA_5040D: RONDA_5040D,
  RONDA_6004B: RONDA_6004B,

  SEAGULL_ST2505: SEAGULL_ST2505,
  SEIKO_6306A: SEIKO_6306A,
  SEIKO_8M25: SEIKO_8M25,
  SELLITA_SW200: SELLITA_SW200,

  TISSOT_2031: TISSOT_2031,
  TISSOT_2060_7734_17J: TISSOT_2060_7734_17J,
  TISSOT_26_9_261: TISSOT_26_9_261,
  TISSOT_27_3: TISSOT_27_3,

  TISSOT_781: TISSOT_781,
  TISSOT_784: TISSOT_784,
  TISSOT_794: TISSOT_794,

  TIMEX_M100: TIMEX_M100,

  UNITAS_6380: UNITAS_6380,

  ZENITH_EL_PRIMERO_400Z: ZENITH_EL_PRIMERO_400Z,
  ZENITH_EL_PRIMERO_4021: ZENITH_EL_PRIMERO_4021,
  ZENITH_P_12_4_50: ZENITH_P_12_4_50,
};
