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
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1988 Omega De Ville Longchamp 191.0198 Cal. 1340",
  sliderImages: [
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0260.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0261.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0262.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0263.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0264.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0265.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0266.JPG",

    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0288.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0289.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0290.JPG",

    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0275.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0276.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0277.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0278.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0279.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0280.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0283.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0284.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0285.JPG",

    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0267.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0268.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0269.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0270.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0271.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0272.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0273.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0274.JPG",

    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0291.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0292.JPG",
    "public/assets/Images/Omega/1988_Omega_1910198_DeVille_longchamp/IMG_0293.JPG",
  ],
  saleReport: {
    price: 200,
    date: "01/04/2025",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WATER_RESIST, featuresEnum.GOLD_PLATED_20M],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.DE_VILLE_VINTAGE,
      catalogueReference: "Longchamp 191.0198",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "32 mm",
      thickness: "5 mm",
      material: "14K Gold Plated (20 \u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.OMEGA_1430,
  },
};

export default details;
