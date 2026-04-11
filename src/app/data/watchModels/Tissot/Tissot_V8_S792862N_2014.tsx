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

import movement_ETA_G10_211 from "../../movements/ETA/ETA_G10_211";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2014 Tissot V8 S762/862N Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3610.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3611.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3612.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3613.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3614.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3615.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3616.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3617.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3618.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3619.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3620.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3621.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3622.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3623.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3624.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3625.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3626.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3617.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3628.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3629.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3630.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3631.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3632.JPG",
    "public/assets/Images/Tissot/2014_Tissot_V8/IMG_3633.JPG",
  ],
  saleReport: {
    price: 145,
    date: "06/07/2019",
    url: "https://www.catawiki.pt/l/27790361-tissot-v8-chronograph-special-edition-s762-862n-eta-caliber-homem-2011-presente",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.TACHYMETER],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_SPORTS,
      catalogueReference: "S762/862N",
      productionYear: "2014",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_43,
      thickness: CaseThicknessEnum.T_11,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.LIGHT_GREY,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER_NATO,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_21,
      color: ColorEnum.DARK_BROWN,
    },

    movement: movement_ETA_G10_211,
  },
};

export default details;
