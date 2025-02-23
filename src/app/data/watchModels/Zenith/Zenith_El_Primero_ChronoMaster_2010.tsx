import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
import { ZenithBrandSeries } from "./ZenithBrandSeries";

const details: WatchDetails = {
  title: "2010 Zenith El Primero ChronoMaster",
  sliderImages: [
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3450.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3452.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3453.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3454.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3455.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3456.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3457.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3458.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3459.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3460.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3461.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3462.JPG",

    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3463.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3464.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3465.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3466.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3467.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3468.JPG",

    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3488.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3489.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3490.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3491.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3492.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3493.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3494.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3495.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3496.JPG",

    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3473.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3474.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3475.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3476.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3477.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3478.JPG",

    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3469.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3470.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3471.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3472.JPG",

    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3479.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3480.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3481.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3482.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3483.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3484.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3485.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3486.JPG",
    "public/assets/Images/Zenith/2010_Zenith_El_Primero_ChronoMaster/IMG_3487.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.ZENITH,
      series: ZenithBrandSeries.EL_PRIMERO,
      catalogueReference: "ChronoMaster - 03 1260 4021",
      productionYear: "2010",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "45 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "22 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ZENITH_EL_PRIMERO_4021,
  },
};

export default details;
