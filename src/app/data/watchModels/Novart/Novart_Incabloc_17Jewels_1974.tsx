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
  title: "1974 Novart 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6224.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6225.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6226.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6227.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6228.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6229.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6230.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6231.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6232.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6233.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6234.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6235.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6236.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6237.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6238.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6239.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6240.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6241.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6242.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6243.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6244.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6245.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6246.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6247.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6248.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6249.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6250.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6251.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6252.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6253.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6254.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Blue/IMG_6255.JPG",
  ],
  sellReport: {
    price: 240,
    date: "09/02/2024",
    url: "https://www.catawiki.com/en/l/79956939",
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
      dialMarkers: DialMarketsEnum.ARABIC,
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
