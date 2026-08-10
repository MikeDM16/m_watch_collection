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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2001 Tag Heuer Kirium Formula 1 Chronograph",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3328.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3329.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3330.JPG",

    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3337.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3340.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3341.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3342.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3343.JPG",

    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3331.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3332.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3333.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3334.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3335.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3336.JPG",

    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3367.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3368.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3369.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3370.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3371.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3372.JPG",

    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3344.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3345.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3346.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3347.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3348.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3349.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3350.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3351.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3352.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3353.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3354.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3355.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3356.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3357.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3359.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3360.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3361.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3362.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3363.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3364.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3365.JPG",
    "public/assets/Images/Tag_Heuer/2001_Tag_Heuer_Kirium_F1_Titan/IMG_3366.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.KIRIUM,
      catalogueReference: "CL1180",
      productionYear: "2001",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_40,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.TITANIUM,
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: CaseFinishingEnum.SANDBLASTED,
      bezel: BezelTypeEnum.UNI_10_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.CARBON_FIBER,
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.CARBON_FIBER,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.RUBBER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BLACK,
    },

    movement: movement_ETA_251_262,
  },
};

export default details;
