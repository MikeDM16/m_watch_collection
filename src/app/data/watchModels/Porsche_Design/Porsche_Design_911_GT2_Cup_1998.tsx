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

import movement_ETA_251_251 from "../../movements/ETA/ETA_251_251_27J";
import { WatchDetails } from "../../watchDetails";
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "1998 Eterna - Porsche Design 911 - GT2 Cup",
  sliderImages: [
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1107.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1108.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1112.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1114.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1055.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1056.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1057.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1060.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1063.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1081.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1064.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1067.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1068.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1069.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1076.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1077.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1078.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1079.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1082.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1083.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1070.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1071.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1072.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1073.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1074.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1075.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1086.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1087.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1088.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1089.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1090.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1091.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1092.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1084.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1085.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1093.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1094.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1095.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1096.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1097.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1098.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_1099.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0776.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0780.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0781.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0784.JPG",
  ],

  saleReport: {
    price: 1801,
    date: "21/04/2026",
    url: "https://www.catawiki.com/en/l/102605935",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      "This exclusive Porsche Design was commissioned to Eterna as a victory prize for the 1998 FIA GT Championship.",
    ],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.PORSCHE_DESIGN_911,
      catalogueReference: "FIA GT - Porsche 911 - GT2 Cup",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.SANDBLASTED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.SS_SANDBLASTED,
    },

    movement: movement_ETA_251_251,
  },
};

export default details;
