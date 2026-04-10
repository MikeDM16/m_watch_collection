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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1978 Tissot Seastar Quartz Cal.2031",

  sliderImages: [
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0979.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0980.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0981.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0982.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0983.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0984.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0985.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0986.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0987.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0988.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0989.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0990.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0991.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0992.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0993.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0994.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0995.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0996.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0997.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_0998.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1005.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1006.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1007.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1005.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1010.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1011.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1012.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1013.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/IMG_1014.JPG",
    "public/assets/Images/Tissot/1978_Tissot_Seastar_Quartz/tissot_manufacturing_dates.JPG",
  ],
  saleReport: {
    price: 120,
    date: "14/01/2021",
    url: "https://www.catawiki.com/l/44308901",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: "40210",
      productionYear: "1978",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.GP_10_SS_BACK,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.VERTICAL_BRUSHED,
      bezel: BezelTypeEnum.POLISHED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GOLD,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.MESH_GOLD,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.GOLD,
    },

    movement: MovementsDataDB.TISSOT_2031,
  },
};

export default details;
