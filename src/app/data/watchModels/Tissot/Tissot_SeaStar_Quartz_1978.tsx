import { MovementsDataDB } from "../../movementsData";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
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
  sellReport: {
    price: 120,
    date: "14/01/2021",
    url: "https://www.catawiki.com/l/44308901",
  },
  technicalData: {
    features: ["Date", "Gold Plated 10 \u339B"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "40210",
      productionYear: "1978",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold Plated 10 \u339B",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Brushing detail",
      bezel: "Polished bezel edge",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Mesh - Gold Plated",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Gold",
    },

    movement: MovementsDataDB.TISSOT_2031,
  },
};

export default details;
