import { MovementsDataDB } from "../../movementsData";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1987 Omega Seamaster Polaris Day Date 396.1222",
  sliderImages: [
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_7168.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_7170.JPG",

    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1297.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1298.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1299.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1300.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1301.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1302.JPG",

    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1312.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1314.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1315.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1316.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1317.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1318.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1319.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1322.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1323.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1324.JPG",

    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_7040.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_7041.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_7061.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_7062.JPG",

    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1303.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1304.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1305.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1306.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1307.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1308.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1309.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1310.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1311.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1325.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1326.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_7190.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1328.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1329.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1330.JPG",

    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1331.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1332.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1333.JPG",
    "public/assets/Images/Omega/1987_Polaris_Calendar_396_1222/IMG_1334.JPG",
  ],
  sellReport: {
    price: 565,
    date: "10/04/2024",
    url: "https://www.catawiki.com/en/l/82331781",
  },

  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Polaris",
      catalogueReference: "DR 396.1222",
      productionYear: "1987",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "6 mm",
      material: "Stainless Steel - Gold Inlay",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.DAY_DATE_SUBDIALS,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.OMEGA_1445,
  },
};

export default details;
