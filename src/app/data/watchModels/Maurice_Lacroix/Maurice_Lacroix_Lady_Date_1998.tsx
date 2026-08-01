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

import movement_ETA_955_112 from "../../movements/ETA/ETA_955_112";
import { WatchDetails } from "../../watchDetails";
import { MauriceLacroixBrandSeries } from "./MauriceLacroixBrandSeries";

const details: WatchDetails = {
  title: "1998 Maurice Lacroix Lady Date",

  sliderImages: [
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2425.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2426.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2427.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2428.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2429.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2432.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2433.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2434.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2435.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2436.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2438.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2439.JPG",

    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2459.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2460.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2461.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2463.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2464.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2465_1.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2466.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2469.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2470.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2471.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2472.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2473.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2474.JPG",

    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2444.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2445.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2446.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2447.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2448.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2449.JPG",

    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2440.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2441.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2442.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2443.JPG",

    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2450.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2451.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2452.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2453.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2454.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2455.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2456.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2457.JPG",
    "public/assets/Images/Maurice_Lacroix/1999_Maurice_Lacroix_Lady/IMG_2458.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE],

    information: {
      brand: BrandsEnum.MAURICE_LACROIX,
      series: MauriceLacroixBrandSeries.VINTAGE_SERIES,
      catalogueReference: "89519",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_28,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.SS_GOLD_PLATED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_14,
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_ETA_955_112,
  },
};

export default details;
