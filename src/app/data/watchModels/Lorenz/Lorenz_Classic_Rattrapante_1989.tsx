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
  title: "1989 Lorenz Classic Rattrapante Chronograph",
  sliderImages: [
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8698.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8701.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8703.JPG",

    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8694.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8695.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8696.JPG",

    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8713.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8714.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8715.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8716.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8717.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8718.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8719.JPG",

    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8704.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8705.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8706.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8707.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8708.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8711.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8712.JPG",

    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8720.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8722.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8723.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8724.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8725.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8726.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8727.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8728.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8729.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8730.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8731.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8732.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8733.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8734.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8735.JPG",
    "public/assets/Images/Lorenz/1989_Lorenz_Classic_Rattrapante/IMG_8736.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.LORENZ,
      series: "Classic",
      catalogueReference: "15052",
      productionYear: "1989",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Bourdeaux Red",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
