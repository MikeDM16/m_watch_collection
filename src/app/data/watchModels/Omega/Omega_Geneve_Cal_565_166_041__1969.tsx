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

const details: WatchDetails = {
  title: "1969 Omega Geneve Cal. 565 (166.041)",
  sliderImages: [
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5356.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5357.JPG",

    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5326.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5327.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5328.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5329.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5330.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5331.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5332.JPG",

    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5341.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5342.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5343.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5344.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5346.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5349.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5350.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5351.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5353.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5355.JPG",

    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5333.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5334.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5335.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5336.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5337.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5338.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5339.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5340.JPG",

    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5358.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5359.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5350.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5361.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5362.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5363.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5364.JPG",
    "public/assets/Images/Omega/1969_Omega_Geneve_166_041__565/IMG_5366.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.GOLD_PLATED_20M,
      "Movement with production number 29858967, dating the watch back to 1969",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Geneve Collection",
      catalogueReference: "166.041 (Caliber 29858967)",
      productionYear: "1969",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Gold Plated (20\u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Sunshine Brushed",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.OMEGA_565,
  },
};

export default details;
