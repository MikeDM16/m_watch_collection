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

import movement_ETA_Valjoux_7750_17J from "../../movements/ETA/ETA_Valjoux_7750_17J";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1993 Tissot PRX P376 Automatic Chronograph Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6389.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6390.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6391.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6393.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6394.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6395.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6396.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6397.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6398.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6399.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6400.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6401.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6402.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6403.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6404.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6405.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6407.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6408.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6409.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6410.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6411.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6413.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6413-1.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6414.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6415.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6416.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6417.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6423.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6425.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6426.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6427.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6427-1.JPG",
    "public/assets/Images/Tissot/1993_Tissot_PRX_P376_7750/IMG_6428.JPG",
  ],
  saleReport: {
    price: 370,
    date: "08/05/2022",
    url: "https://www.catawiki.com/en/l/58220069",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRX,
      catalogueReference: "P376",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.DODECAGON_GOLD,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_Valjoux_7750_17J,
  },
};

export default details;
