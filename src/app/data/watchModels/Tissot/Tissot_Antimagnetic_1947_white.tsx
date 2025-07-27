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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1947 Tissot Antimagnetic",
  sliderImages: [
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3188.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3189.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3191.JPG",

    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3198.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3199.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3200.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3202.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3203.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3204.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3206.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3207.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3208.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3211.JPG",

    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3192.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3193.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3195.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3196.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3197.JPG",

    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3212.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3213.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3214.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3215.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3216.JPG",

    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3227.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3228.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3229.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/tissot_manufacturing_dates.JPG",

    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3217.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3218.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3219.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3220.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3221.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3222.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3223.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3224.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3225.JPG",
    "public/assets/Images/Tissot/1947_Tissot_Antimaginetic_27_3/IMG_3226.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANICAL,
      "Movement with production number 1769316, dating the watch back to 1947",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.ANTIMAGNETIC,
      catalogueReference: "6291-2",
      productionYear: "1947",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TISSOT_27_3,
  },
};

export default details;
