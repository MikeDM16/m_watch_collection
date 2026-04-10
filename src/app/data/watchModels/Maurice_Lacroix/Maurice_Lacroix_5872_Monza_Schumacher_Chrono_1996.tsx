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
import { MauriceLacroixBrandSeries } from "./MauriceLacroixBrandSeries";

const details: WatchDetails = {
  title: "1996 Maurice Lacroix Monza Schumacher Chrono",

  sliderImages: [
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1002.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1003.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1004.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1005.JPG",

    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1046.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1047.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1048.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1050.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1052.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1053.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1054.JPG",

    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1009.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1010.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1012.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1014.JPG",

    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1020.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1021.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1022.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1023.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1024.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1025.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1026.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1027.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1028.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1029.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1030.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1031.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1032.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1033.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1034.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1035.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1036.JPG",

    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1018.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1019.JPG",

    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1037.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1038.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1039.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1040.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1041.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1042.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1043.JPG",
    "public/assets/Images/Maurice_Lacroix/1996_Maurice_Lacroix_Monza_Schumacher_Chrono/IMG_1044.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.MAURICE_LACROIX,
      series: MauriceLacroixBrandSeries.MONZA_CHRONOGRAPH,
      catalogueReference: "5872",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_37,
      thickness: CaseThicknessEnum.T_11,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.BRUSHED,
      bezel: BezelTypeEnum.POLISHED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.YELLOW,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.YELLOW,
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
