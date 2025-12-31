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
  title: "1992 Lorenz Classic Rattrapante Chronograph",
  sliderImages: [
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8796.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8797.JPG",

    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8807.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8808.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8809.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8810.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8811.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8812.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8813.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8814.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8815.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8816.JPG",

    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8801.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8802.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8803.JPG",

    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8690.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8691.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8692.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8693.JPG",

    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8805.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8806.JPG",

    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8817.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8818.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8819.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8820.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8821.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8822.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8823.JPG",

    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8824.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8825.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8826.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8827.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8828.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8829.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8835.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8836.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8837.JPG",
    "public/assets/Images/Lorenz/1992_Lorenz_Classic_Rattrapante/IMG_8838.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.LORENZ,
      series: "Classic",
      catalogueReference: "14659",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Gold Plated bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
