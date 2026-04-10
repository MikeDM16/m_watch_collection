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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2008 Tag Heuer Professional Formula-1 WAC1212",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3209.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3210.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3212.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3213.JPG",

    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3214.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3239.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3240.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3241.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3242.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/catalogue.JPEG",

    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3215.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3216.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3217.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3218.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3219.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3220.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3221.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3222.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3223.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3224.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3225.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3226.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3227.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3228.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3229.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3230.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3231.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3232.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3233.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3234.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3235.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3236.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3237.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3237-1.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3238.JPG",

    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3243.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3244.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3245.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3246.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3247.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3249.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3250.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3251.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3253.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3254.JPG",
  ],

  saleReport: {
    price: 440,
    date: "19/12/2023",
    url: "https://www.catawiki.com/en/l/78189911",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.FORMULA_1_3RD_GEN,
      catalogueReference: "WAC1212",
      productionYear: "2008",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: CaseFinishingEnum.MATTE,
      bezel: BezelTypeEnum.UNI_5_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_JUBILEE,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.SS_GREY,
    },

    movement: {
      title: "ETA F05.111",
      description: "Quartz movement ETA Trendline F05.111.",
      usefullLinks: {},
      sliderImages: [
        "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/F05-111.JPG",
        "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/F05-111 2.JPG",
      ],
      details: {
        manufacturer: "ETA (Swiss Made)",
        modelReference: "ETA F05.111",
        type: "Quartz",
        battery: "371",
        jewels: "3 (Three) Jewels ",
        functions: "Date, Hours, Minutes, Seconds ",
      },
    },
  },
};

export default details;
