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
  title: "2000 Tissot Sports E662/762M",
  sliderImages: [
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0498.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0499.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0500.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0501.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0502.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0503.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0504.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0505.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0506.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0507.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0508.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0509.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0510.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0511.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0512.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/back1.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/back2.JPG",
  ],
  saleReport: {
    price: 145,
    date: "30/10/2018",
    url: "https://www.catawiki.pt/l/21734773-tissot-eta-chronograph-e662-762m-men-2000-2010",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SPORTS,
      catalogueReference: "E662/762M",
      productionYear: "2000",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_41,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.VERTICAL_BRUSHED,
      bezel: BezelTypeEnum.UNI_5_MIN,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_ETA_G10_211,
  },
};

export default details;
