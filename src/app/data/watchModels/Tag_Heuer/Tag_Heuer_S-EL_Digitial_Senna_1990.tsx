import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "1990 Tag Heuer S/EL Digital Chrono Senna",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1379.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1380.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1381.JPG",

    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1371.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/catalogue.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1374.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1375.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1376.JPG",

    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1346.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1347.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1348.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1349.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1350.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1351.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1352.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1353.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1354.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1355.JPG",

    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1304.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1305.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1306.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1307.JPG",

    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1312.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1313.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1314.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1316.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1317.JPG",

    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1356.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1357.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1358.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1359.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1360.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1361.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1362.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1363.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1364.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1365.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1366.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1367.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1368.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1369.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1370.JPG",

    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1297.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1298.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1300.JPG",

    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1318.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1319.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1320.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1321.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1322.JPG",
    "public/assets/Images/Tag_Heuer/1990_Tag_Heuer_S_EL_Digital_Senna/IMG_1323.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.SCREWED_IN_CROWN, featuresEnum.WR_200_METERS],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.S_EL,
      catalogueReference: "CG1123-0",
      productionYear: "1990",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "13 mm",
      material: "Stainless Steel - Gold plated Details",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Brushed",
      bezel: "10 minute graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Tag Heuer S/EL style Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TAG_HEUER_2_95,
  },
};

export default details;
