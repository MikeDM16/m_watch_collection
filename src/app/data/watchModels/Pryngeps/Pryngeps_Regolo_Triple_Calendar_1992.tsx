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
  title: "1992 Pryngeps Regolo Triple Calendar",

  sliderImages: [
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9060.JPG",

    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9028.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9029.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9030.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9031.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9032.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9033.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9035.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9036.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9037.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9038.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9039.JPG",

    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9048.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9050.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9051.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9052.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9053.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9054.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9055.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9056.JPG",

    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9041.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9042.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9043.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9044.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9045.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9046.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9047.JPG",

    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9062.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9063.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9064.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9065.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9066.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9067.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9069.JPG",
    "public/assets/Images/Pryngeps/1992_Pryngeps_Regolo_Triple_Calendar/IMG_9070.JPG",
  ],

  saleReport: {
    price: 120,
    date: "17/01/2026",
    url: "https://www.catawiki.com/en/l/100608086",
  },

  technicalData: {
    features: [
      featuresEnum.TRI_COMPAX_CALENDAR,
      featuresEnum.REGOLO_BEZEL,
      featuresEnum.WR_30_METERS,
    ],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Regolo",
      catalogueReference: "1511",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold plated details",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Regolo graduated bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Dark Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.ANUAL,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Yellow",
    },

    movement: MovementsDataDB.FE_TRIPLE_CALENDAR_5J,
  },
};

export default details;
