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
  title: "1974 Novart Tides 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5670.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5671.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5672.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5638.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5639.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5640.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5641.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5642.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5643.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5644.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5645.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5646.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5647.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5648.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5649.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5650.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5651.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5652.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5653.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5654.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5655.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5656.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5657.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5658.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5659.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5660.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5661.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5663.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5664.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5666.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5667.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5668.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Date_Blue/IMG_5669.JPG",
  ],

  sellReport: {
    price: 176,
    date: "29/01/2024",
    url: "https://www.catawiki.pt/l/79481491",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Incabloc",
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
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
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
