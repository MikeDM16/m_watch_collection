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

const details: WatchDetails = {
  title: "2011 Tonino Lamborghini Bologna II",

  sliderImages: [
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1398.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1399.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1400.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1401.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1402.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1403.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1404.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1405.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1406.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1407.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1408.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1409.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1410.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1411.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1412.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1413.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1414.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1415.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1416.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1417.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1418.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1419.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1420.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1421.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1422.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1423.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1424.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1425.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1426.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1427.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1428.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1429.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1430.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1431.JPG",
    "public/assets/Images/Tonino_Lamborghini/2011_Tonino_Lamborghini_Bologna_II/IMG_1432.JPG",
  ],
  sellReport: {
    price: 342,
    date: "31/01/2021",
    url: "https://www.catawiki.com/l/44549819",
  },
  technicalData: {
    features: ["Date", "Chronograph", "100 meters"],

    information: {
      brand: BrandsEnum.TONINO_LAMBORGHINI,
      series: "Bologna II",
      catalogueReference: "-",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "38 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Circular Polished",
      bezel: "Polished Plain bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Yellow",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
