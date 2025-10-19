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
  title: "1947 Orfina Pilot Chronograph Venus 170",

  sliderImages: [
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6310.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6311.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6312.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6358.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6359.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6360.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6314.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6315.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6316.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6317.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6318.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6319.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6320.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6321.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6322.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6323.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6332.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6333.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6334.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6335.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6337.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6338.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6340.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6341.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6324.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6325.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6326.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6327.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6328.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6329.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6346.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6347.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6348.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6349.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6350.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6351.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6352.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6353.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6356.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6357.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANIQUE_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.ORFINA,
      series: "Pilot Chronograph",
      catalogueReference: "170",
      productionYear: "1945",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "12 mm",
      material: "Chromium Case - Stainless Steel Back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Vertical Brushed",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "17 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.VENUS_170_17J,
  },
};

export default details;
