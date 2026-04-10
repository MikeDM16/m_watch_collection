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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2005 Ferrari Monza Chronograph",
  sliderImages: [
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4591.JPG",

    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4576.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4577.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4578.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4579.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4580.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4581.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4582.JPG",

    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4592.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4593.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4594.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4595.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4596.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4597.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4598.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4599.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4600.JPG",

    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4583.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4584.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4585.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4586.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4587.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4588.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4589.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4590.JPG",

    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4601.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Monza_Chronograph/IMG_4602.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH],

    information: {
      brand: BrandsEnum.FERRARI,
      series: "Monza Chronograph",
      catalogueReference: "-",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_11,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.CIRCULAR_BRUSHED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.MODENA_RED,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER_CARBON_FIBER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.CARBON_FIBER_BLACK,
    },

    movement: MovementsDataDB.MIYOTA_OS60,
  },
};

export default details;
