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

import movement_ETA_988_432 from "../../movements/ETA/ETA_988_432_7J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1989 Baume et Mercier Le Roy Tank",

  sliderImages: [
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0604.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0605.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0606.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0607.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0608.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0609.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0610.JPG",

    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0616.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0617.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0618.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0619.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0620.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0621.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0622.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0623.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0624.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0625.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0627.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0628.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0629.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0630.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0631.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0632.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0633.JPG",

    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0611.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0612.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0614.JPG",
    "public/assets/Images/Baume_Mercier/1999_Baume_Mercier_LeRoy_AnaDigital/IMG_0615.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.ALARM],

    information: {
      brand: BrandsEnum.BAUME_MERCIER,
      series: "Le Roy",
      catalogueReference: "(Analogic-Digital",
      productionYear: "1989",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_32,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.VERTICAL_BRUSHED,
      bezel: BezelTypeEnum.POLISHED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLACK_LCD,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.GREY,
    },

    movement: movement_ETA_988_432,
  },
};

export default details;
