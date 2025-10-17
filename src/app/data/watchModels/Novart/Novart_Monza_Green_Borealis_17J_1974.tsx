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
import { NovartBrandSeries } from "./NovartBrandSeries";

const details: WatchDetails = {
  title: "1974 Novart Monza Green Borealis 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5770.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5771.JPG",

    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5752.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5753.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5754.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5755.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5756.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5757.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5758.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5760.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5761.JPG",

    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5772.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5773.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5774.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5777.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5778.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5779.JPG",

    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5762.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5763.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5764.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5765.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5766.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5767.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5768.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5769.JPG",

    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5780.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5781.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5783.JPG",
    "public/assets/Images/Novart/1974_Novart_Monza_Green_Borealis_Unitas_17J/IMG_5784.JPG",

    "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5817.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: NovartBrandSeries.MONZA,
      catalogueReference: "(Green Borealis Dial)",
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
      color: "Green",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;
