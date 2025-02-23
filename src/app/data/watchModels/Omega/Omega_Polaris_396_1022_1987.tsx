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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1987 Omega Seamaster Polaris 396.1022",
  sliderImages: [
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7192.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7193.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7194.JPG",

    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1336.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1337.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1338.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1339.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1340.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1341.JPG",

    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1351.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1352.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1353.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1354.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1355.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1356.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1357.JPG",

    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1342.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1343.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1344.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1345.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1346.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1347.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1348.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1349.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1350.JPG",

    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7233.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7234.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7235.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7236.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7237.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1370.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1371.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1373.JPG",

    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7189.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7191.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_7190.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1361.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1362.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1363.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1364.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1365.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1366.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1367.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1368.JPG",
    "public/assets/Images/Omega/1987_Polaris_396_1022/IMG_1369.JPG",
  ],
  sellReport: {
    price: 600,
    date: "10/05/2024",
    url: "https://www.catawiki.com/en/l/83421167",
  },

  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "DB 396.1022",
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
      color: "Cream Yellow",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey and Gold plated details",
    },

    movement: MovementsDataDB.OMEGA_1441,
  },
};

export default details;
