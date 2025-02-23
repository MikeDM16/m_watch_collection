import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1995 Tissot Sports E662/762M",
  sliderImages: [
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1299.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1300.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1301.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1302.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1303.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1304.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1305.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1306.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1307.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1308.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1309.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1310.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1311.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1312.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1313.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1314.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1315.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1316.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1317.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1318.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1319.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1319.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1320.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1320-1.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1321.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1322.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Chrono_E662762M/IMG_1323.JPG",
  ],
  saleReport: {
    price: 110,
    date: "18/01/2021",
    url: "https://www.catawiki.com/l/44308675",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SPORTS,
      catalogueReference: "E662/762M",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Vertical Brushing",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Jubilee style Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey metal",
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
