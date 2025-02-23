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

const details: WatchDetails = {
  title: "1961 Omega Geneve Honeycomb Cal. 268",
  sliderImages: [
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8299.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8303.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8304_2.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8304.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8305.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8306.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8308.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8309.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8310.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8311.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8312.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8313.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_8314.JPG",

    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6654.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6655.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6656.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6657.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6658.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6659.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6662.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6664.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6665.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6667.JPG",

    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6644.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6645.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6646.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6647.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6648.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6649.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6650.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6651.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6652.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6653.JPG",

    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6632.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6633.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6634.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6635.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6636.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6637.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6638.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6639.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6640.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6641.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6642.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6643.JPG",

    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6668.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6669.JPG",
    "public/assets/Images/Omega/1961_Omega_Geneve_Cal_268/IMG_6670.JPG",
  ],

  saleReport: {
    price: 751,
    date: "26/07/2024",
    url: "https://www.catawiki.com/en/l/86455107-omega-seamaster-honeycomb-dial-cal-268-17j-gold-plated-men-1961",
  },

  technicalData: {
    features: [
      featuresEnum.GOLD_PLATED_20M,
      "Movement with production number 18435708, dating the watch back to 1961",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Geneve Collection",
      catalogueReference: "14713-61 (Caliber 18435708)",
      productionYear: "1961",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "33 mm",
      thickness: "8 mm",
      material: "Gold Plated (20\u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.HONEYCOMB,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Brown",
    },

    movement: MovementsDataDB.OMEGA_268,
  },
};

export default details;
