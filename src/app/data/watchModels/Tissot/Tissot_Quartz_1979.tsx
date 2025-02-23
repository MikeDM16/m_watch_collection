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
  title: "1979 Tissot Quartz Cal.2031",
  sliderImages: [
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4669.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4670.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4671.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4672.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4673.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4674.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4675.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4676.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4677.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4678.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4679.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4680.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4681.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4682.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4683.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4684.JPG",

    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4639.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4640.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4641.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4637.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4646.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4647.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4648.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4649.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4650.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4651.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4652.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4653.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4654.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4655.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4656.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4657.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4658.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4659.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4660.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4661.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4662.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4663.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4664.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4665.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4666.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4667.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Quartz/IMG_4668.JPG",

    //"public/assets/Images/Tissot/1979_Tissot_Quartz/tissot_manufacturing_dates.JPG",
  ],

  sellReport: {
    price: 169,
    date: "05/01/2024",
    url: "https://www.catawiki.com/en/l/78613643",
  },

  technicalData: {
    features: ["Date", "10 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: "40733",
      productionYear: "1979",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Gold Plated 10 \u339B",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Vertical Brushing detail",
      bezel: "Fluted Decoration",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather (Lizard texture)",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Bourdeaux",
    },

    movement: MovementsDataDB.TISSOT_2031,
  },
};

export default details;
