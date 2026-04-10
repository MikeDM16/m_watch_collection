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
import { CertinaBrandSeries } from "./CertinaBrandSeries";

const details: WatchDetails = {
  title: "2014 Certina DS First White Ceramic",
  sliderImages: [
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3151.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3152.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3153.JPG",

    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3163.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3164.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3165.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3166.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3167.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3168.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3169.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3170.JPG",

    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3156.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3157.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3158.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3160.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3161.JPG",

    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3171.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3172.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3173.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3174.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3175.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3176.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3177.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3178.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3179.JPG",

    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3180.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3181.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3182.JPG",
    "public/assets/Images/Certina/2014_Certina_DS_First_Ceramic_white/IMG_3184.JPG",
  ],

  saleReport: {
    price: 254,
    date: "29/07/2025",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.SCREWED_IN_CROWN],

    information: {
      brand: BrandsEnum.CERTINA,
      series: CertinaBrandSeries.DS_FIRST,
      catalogueReference: "White Ceramic (C014410A)",
      productionYear: "2014",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_41,
      thickness: CaseThicknessEnum.T_10,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: CaseFinishingEnum.BRUSHED,
      bezel: BezelTypeEnum.CERAMIC_10_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.GREY,
    },

    movement: MovementsDataDB.ETA_955_112,
  },
};

export default details;
