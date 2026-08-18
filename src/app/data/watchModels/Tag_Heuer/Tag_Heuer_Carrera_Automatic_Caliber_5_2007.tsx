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

import movement_TAG_HEUER_CALIBER_5 from "../../movements/Tag_Heuer/Tag_Heuer_Caliber_5_25J";
import { WatchDetails } from "../../watchDetails";
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2007 Tag Heuer Carrera Automatic Caliber 5",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3732.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3734.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3735.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3735_1.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3736.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3737.JPG",

    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3683.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3684.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3685.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3686.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3687.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3688.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3689.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3690.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3691.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3692.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3693.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3694.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3695.JPG",

    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3727.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3728.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3729.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3731.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3725.JPG",

    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3696.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3697.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3698.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3699.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3700.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3702.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3703.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3704.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3705.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3706.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3707.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3708.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3709.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3710.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3711.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3712.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3713.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3714.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3715.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3716.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3717.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3718.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3719.JPG",
    "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3720.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.CARRERA,
      catalogueReference: "Automatic (WV2210)",
      productionYear: "2007",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.CLOUD_DE_PARIS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_TAG_HEUER_CALIBER_5,
  },
};

export default details;
