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
  title: "1974 Novart Vitesse Blue 17 Jewels",

  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5982.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5983.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5984.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5985.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5986.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5987.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5988.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5989.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6003.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6004.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6005.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6006.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6007.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6008.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6009.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5990.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5991.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5992.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5993.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5994.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5995.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5996.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5997.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5998.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5999.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6001.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6002.JPG",
  ],

  sellReport: {
    price: 200,
    date: "02/12/2024",
    url: "https://www.catawiki.com/en/l/91104395",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Vitesse",
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
