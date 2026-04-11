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

import { WatchDetails } from "../../watchDetails";
import { SeikoBrandSeries } from "./SeikoBrandSeries";

const details: WatchDetails = {
  title: "1990 Seiko Two Tone 0390",

  sliderImages: [
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3862.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3863.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3864.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3871.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3872.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3873.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3874.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3875.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3876.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3877.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3878.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3879.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3880.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3881.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3882.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3883.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3884.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3887.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3888.JPG",
    "public/assets/Images/Seiko/1990_Seiko_V732_0390/IMG_3889.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE],

    information: {
      brand: BrandsEnum.SEIKO,
      series: SeikoBrandSeries.VINTAGE_SERIES,
      catalogueReference: "V732-0390 (070008)",
      productionYear: "1990",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.TWO_TONE_GREY_GOLD,
    },

    movement: {
      title: "Seiko V732",
      description: "Seiko caliber V732 is an analog quartz watch movement. ±20 seconds/month",
      usefullLinks: {},
      sliderImages: ["public/assets/Images/Seiko/1990_Seiko_V732_0390/SEIKO_V732.JPG"],
      details: {
        manufacturer: "Seiko",
        modelReference: "V732",
        type: "Quartz",
        battery: "SR920SW / 371",
        jewels: "1 (One) Jewel",
        functions: "Date, Hours, minutes, seconds",
      },
    },
  },
};

export default details;
