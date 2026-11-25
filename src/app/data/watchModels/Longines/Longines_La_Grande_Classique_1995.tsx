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

import movement_LONGINES_L263_2 from "../../movements/Longines/Longines_L263_2";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1995 Longines La Grande Classique",

  sliderImages: [
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7834.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7835.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7836.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7837.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7838.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7839.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7840.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7841.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7843.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7844.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7845.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7846.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7847.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7848.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7849.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7850.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7852.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7853.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7854.JPG",

    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7875.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7876.JPG",

    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7855.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7856.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7857.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7858.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7859.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7860.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7861.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7862.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7863.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7864.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7865.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7866.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7867.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7868.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7869.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7870.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7871.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7872.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7873.JPG",
    "public/assets/Images/Longines/1995_Longines_La_Grande_Classique_L263/IMG_7874.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.ELETRO_GOLD_PLATED_18k],

    information: {
      brand: BrandsEnum.LONGINES,
      series: "La Grande Classique",
      catalogueReference: "L4.636.2",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_6,
      material: CaseMaterialEnum.GOLD_18K_ELECTROPLATED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_LONGINES_L263_2,
  },
};

export default details;
