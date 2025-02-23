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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2000 Tissot Sports E662/762M",
  sliderImages: [
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1073.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1074.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1075.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1076.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1077.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1078.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1080.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1081.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1082.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1083.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1084.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1085.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1086.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1087.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1088.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1089.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1090.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1091.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1092.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1093.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1095.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1095_1.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1096.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1097.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1098.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1099.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1100.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_E662762M/IMG_1101.JPG",
  ],
  saleReport: {
    price: 140,
    date: "16/01/2020",
    url: "https://www.catawiki.com/l/33498283-tissot-sport-dive-chrono-e662-762m-eta-chronograph-men-2000-2010",
  },
  technicalData: {
    features: ["Date", "Chronograph", "100 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SPORTS,
      catalogueReference: "E662/762M",
      productionYear: "2000",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Vertical Brushing",
      bezel: "Uni-directional, 5-minute graduated",
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
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
