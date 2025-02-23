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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1974 Novart Blue Borealis 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0614.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0615.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0616.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0617.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0618.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0619.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0620.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0621.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0623.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0624.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0626.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0641.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0645.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0646.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0647.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0865.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0866.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0867.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0868.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0869.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0870.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0871.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0627.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0628.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0629.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0630.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0631.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0632.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0633.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0634.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0635.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0636.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0637.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0638.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0639.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue_Borealis/IMG_0640.JPG",
  ],

  sellReport: {
    price: 191,
    date: "22/09/2024",
    url: "https://www.catawiki.com/en/l/88396971",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Borealis",
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
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue",
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
