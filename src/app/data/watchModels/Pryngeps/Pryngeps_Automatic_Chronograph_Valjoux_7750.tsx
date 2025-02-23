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
  title: "1975 Pryngeps Autavia Chronograph Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1985.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1986.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1987.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1988.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1989.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1990.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1991.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1992.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1993.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1994.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1995.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1996.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1997.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1998.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1999.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2001.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2007.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2009.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2010.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1708.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3907.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3908.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3909.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3910.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3911.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3912.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3913.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3914.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2002.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2003.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2004.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2005.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2006.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2012.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2014.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4839.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4840.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4841.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4842.JPG",
  ],
  sellReport: {
    price: 550,
    date: "26/06/2024",
    url: "https://www.catawiki.com/en/l/85394479-pryngeps-autavia-nos-valjoux-7750-chrono-25-jewels-men-1980-1989",
  },

  technicalData: {
    features: [
      "Date",
      "Automatic Chronograph",
      "100 meters",
      "Screw-in crown",
      "GMT Bezel",
      "Tachymeter",
    ],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Automatic",
      catalogueReference: "4.034.0.0.32",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "39 mm",
      thickness: "14 mm",
      material: "Stainless Steel - Gold plated details",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "GMT 12 Hour graduated bezel",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_17J,
  },
};

export default details;
