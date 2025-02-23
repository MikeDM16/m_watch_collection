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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2014 Tissot T-Classic Dream",
  sliderImages: [
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0876.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0877.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0878.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0879.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0880.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0881.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0882.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0883.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0884.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0885.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0886.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0821.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0822.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0913.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0914.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0915.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0916.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0917.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0918.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0919.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0920.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0921.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/IMG_0833.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/Capturar.JPG",
    "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/Capturar2.JPG",
  ],
  saleReport: {
    price: 100,
    date: "29/12/2018",
    url: "https://www.catawiki.com/l/23134883-tissot-classic-dream-shappire-crystal-heren-2017",
  },
  technicalData: {
    features: ["Date"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_CLASSIC,
      catalogueReference: "Dream White - T0334101601301",
      productionYear: "2014",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "7.5 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Dark Brown",
    },

    movement: {
      title: "ETA 805.112",
      description:
        "Very basic Quartz movement from ETA's fashion line series. \n" +
        "Those calibers represent the entry line from the ETA range of movements.",
      usefullLinks: {
        "Technical Information from ETA": "../Files/3585_ETA 805.112.pdf",
        "Instruction Manual from Tissot": "../Files/tissot-T-classic_user_manual.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/eta-caliber-805_112-1.JPG",
        "public/assets/Images/Tissot/2014_Tissot_T_Classic_Dream/eta-caliber-805_112-2.JPG",
      ],
      details: {
        manufacturer: "ETA",
        modelReference: "805.112",
        type: "Quartz",
        battery: "377",
        jewels: "0 Jewels (None) ",
        functions: "Date, Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;
