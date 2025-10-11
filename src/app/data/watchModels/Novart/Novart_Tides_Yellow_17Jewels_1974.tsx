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
  title: "1974 Novart Tides Yellow 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5800.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5802.JPG",

    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5785.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5786.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5787.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5788.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5789.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5790.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5791.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5792.JPG",

    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5804.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5805.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5807.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5808.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5811.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5812.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5814.JPG",

    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5793.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5794.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5795.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5796.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5797.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5798.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Yellow_17J/IMG_5799.JPG",
      "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5817.JPG",

  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Tides",
      catalogueReference: "(Yellow Dial)",
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Yellow",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Snake Skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;
