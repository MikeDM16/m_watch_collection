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
  title: "2000 Pryngeps Timonier Rattrapante Chronograph",

  sliderImages: [
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2205.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2207.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2212.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2213.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2214.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2216.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2217.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2218.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2219.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2220.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2221.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2222.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2223.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2224.JPG",

    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2250.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2252.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2253.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2255.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2257.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2258.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2259.JPG",

    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2225.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2226.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2227.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2228.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2229.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2230.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2231.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2232.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2233.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2234.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2235.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2236.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2237.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2238.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2239.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2240.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2241.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2242.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2243.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2244.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2245.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2246.JPG",
    "public/assets/Images/Pryngeps/2000_Pryngeps_Timonier_Ratrappante_27_jewels/IMG_2247.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Timonier",
      catalogueReference: "2000",
      productionYear: "2000",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "11 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Pepsi 10 minute graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Two Tone Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Steel and Gold",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
