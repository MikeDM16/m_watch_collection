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
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1956 Omega Seamaster Cal. 267",
  sliderImages: [
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3764.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3765.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3766.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3767.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3768.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3769.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3770.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3771.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3772.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3773.JPG",

    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3780.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3781.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3782.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3783.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3784.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3785.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3786.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3787.JPG",

    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3795.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3796.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3797.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3798.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3799.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3800.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3801.JPG",

    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3212.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3213.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3214.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3215.JPG",

    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3774.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3775.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3776.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3777.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3778.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3779.JPG",

    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3788.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3789.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3790.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3791.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3792.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3793.JPG",
    "public/assets/Images/Omega/1956_Omega_Seamaster_2891_Cal_267/IMG_3794.JPG",
  ],

  saleReport: {
    price: 600,
    date: "21/11/2024",
    url: "https://www.catawiki.com/en/l/90756887-omega-seamaster-2891-1-cal-267-17-jewels-twisted-curved-lugs-men-1956",
  },

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      "Movement with production number 15192765, dating the watch back to 1956",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SEAMASTER_VINTAGE,
      catalogueReference: "2891 - 1 (Caliber 15192765)",
      productionYear: "1956",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
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
      color: "Beige Patina",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.OMEGA_267,
  },
};

export default details;
