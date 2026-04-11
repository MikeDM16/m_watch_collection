import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_ETA_251_262 from "../../movements/ETA/ETA_251_262_27J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1996 Saint Honoré Classic Rattrapante Chronograph",

  sliderImages: [
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0351.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0353.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0354.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0355.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0357.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0358.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0359.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0360.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0361.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0362.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0363.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0364.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0365.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0386.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0387.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0373.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0375.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0376.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0377.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0378.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0366.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0367.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0368.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0369.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0370.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0371.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0372.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0379.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0380.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0381.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0382.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0383.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0384.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0385.JPG",
  ],

  saleReport: {
    price: 151,
    date: "25/02/2026",
    url: "https://www.catawiki.com/en/l/101496590",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH],

    information: {
      brand: BrandsEnum.SAINT_HONORE,
      series: "Classic",
      catalogueReference: "14659",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.SS_GOLD_PLATED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLUE,
    },

    movement: movement_ETA_251_262,
  },
};

export default details;
