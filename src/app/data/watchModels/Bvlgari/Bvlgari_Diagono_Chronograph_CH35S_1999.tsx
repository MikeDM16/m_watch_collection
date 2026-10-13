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

import movement_ETA_2894_2 from "../../movements/ETA/ETA_2894_2_37J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1999 Bvlgari Diagono Chronograph CH35S",

  sliderImages: [
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5646.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5647.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5648.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5649.JPG",

    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5597.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5600.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5601.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5602.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5603.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5604.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5606.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5607.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5608.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5609.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5610.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5611.JPG",

    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5644.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5645.JPG",

    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5612.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5613.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5614.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5615.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5616.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5617.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5618.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5620.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5621.JPG",

    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5626.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5627.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5628.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5629.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5630.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5631.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5632.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5633.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5634.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5635.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5636.JPG",

    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_3628.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_3629.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_3632.JPG",

    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5622.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5623.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5624.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5625.JPG",

    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5637.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5638.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5639.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5640.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5641.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5642.JPG",
    "public/assets/Images/Bvlgari/1999_Bvlgari_Diagono_CH35S_2984/IMG_5643.JPG",
  ],

  technicalData: {
    features: [featuresEnum.AUTOMATIC_CHRONOGRAPH, featuresEnum.DATE],

    information: {
      brand: BrandsEnum.BVLGARI,
      series: "Diagono",
      catalogueReference: "CH35S",
      productionYear: "1999",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.DETAILED,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_INTEGRATED,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_22,
      color: ColorEnum.GREY,
    },

    movement: movement_ETA_2894_2,
  },
};

export default details;
