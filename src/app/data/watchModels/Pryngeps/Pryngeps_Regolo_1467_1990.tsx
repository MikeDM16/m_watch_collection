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
  title: "1991 Pryngeps Regolo 1467",
  sliderImages: [
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0639.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0640.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0641.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0642.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0643.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0644.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0645.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0646.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0647.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0648.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0649.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0650.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0651.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0652.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0653.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0654.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0655.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0656.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0657.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0658.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0659.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0640_1.JPG",
  ],
  sellReport: {
    price: 90,
    date: "23/11/2020",
    url: "https://www.catawiki.com/l/42625815",
  },
  technicalData: {
    features: ["Tri-Compax Calendar", "Regolo Bezel", "30 meters"],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Regolo",
      catalogueReference: "1467",
      productionYear: "1990",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold plated details",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Regolo graduated bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.ANUAL,
    },

    bracelet: {
      material: "Suede Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: {
      title: "SpaceLine",
      description: "",
      usefullLinks: {},
      sliderImages: ["public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/spaceline_cal.JPG"],
      details: {
        manufacturer: "SpaceLine (Swiss Made)",
        modelReference: "-",
        type: "Quartz",
        battery: "399",
        jewels: "7 /Seven) Jewels",
        functions: "Tri-Compax (Month, Day, Date), Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;
