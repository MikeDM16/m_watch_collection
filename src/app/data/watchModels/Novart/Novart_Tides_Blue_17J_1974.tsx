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
  title: "1974 Novart Tides Blue Date 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5739.JPG",

    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5723.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5724.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5725.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5726.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5727.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5728.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5730.JPG",

    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5740.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5741.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5742.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5743.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5744.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5745.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5746.JPG",

    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5731.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5732.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5733.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5734.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5735.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5736.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5737.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5738.JPG",

    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5748.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5749.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5750.JPG",
    "public/assets/Images/Novart/1974_Novart_Tides_Blue_Unitas_17J/IMG_5751.JPG",
      "public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5817.JPG",

  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: NovartBrandSeries.TIDES,
      catalogueReference: "(Blue Dial)",
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
      color: "Blue",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;
