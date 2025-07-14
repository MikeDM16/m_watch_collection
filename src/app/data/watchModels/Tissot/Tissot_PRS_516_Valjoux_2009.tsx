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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2014 Tissot PRS 516 NASCAR Racing Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0167.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0168.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0169.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0171.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0098.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0099.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0101.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0121.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0122.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0124.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0102.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0104.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0105.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0107.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0108.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0110.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_4546.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_4547.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_4548.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0111.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0112.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0115.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0118.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0125.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0126.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0127.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0128.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0129.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0130.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0132.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0133.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0134.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0143.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0144.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0145.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0165.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0166.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0146.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0147.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0148.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0149.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0150.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0152.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0135.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0137.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0138.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0139.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0140.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0141.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0142.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0153.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0154.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0155.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0156.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0157.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0158.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0159.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0160.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_V7750/IMG_0161.JPG",
  ],

  saleReport: {
    price: 900,
    date: "03/07/2025",
    url: "https://www.catawiki.com/en/l/96350695",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRS_516,
      catalogueReference: "Valjoux J564/664",
      productionYear: "2014",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Racing style bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "21 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
