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
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4791.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4792.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4793.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4795.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4796.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4797.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4799.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4800.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4807.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4808.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4809.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4810.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4811.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4812.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4818.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4819.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4820.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4821.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4822.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4823.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4824.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4826.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4827.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4829.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4801.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4802.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4803.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4804.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4805.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4806.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4813.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4814.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4815.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4816.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4817.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/tissot_manufacturing_dates.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4006.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4007.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4008.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4009.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4010.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4011.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4012.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4013.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3982.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3983.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3985.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3986.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3987.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3988.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3990.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3991.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3992.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3994.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3995.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3997.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3998.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_3999.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4001.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4002.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4003.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4005.JPG",

    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4014.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4015.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4016.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4017.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4018.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4019.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4020.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4021.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4022.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4023.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4024.JPG",
    "public/assets/Images/Tissot/1979_Tissot_PR_516_Quartz/IMG_4025.JPG",
  ],

  sellReport: {
    price: 180,
    date: "06/11/2024",
    url: "https://www.catawiki.com/en/l/90103157-pr-516-le-locle-1st-gen-quartz-cal-2031-4-jewels-omega-1370-no-reserve-price-men-1979",
  },

  technicalData: {
    features: [
      "Date",
      "10 meters",
      "Movement with production number 21946, dating the watch back to 1979",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "40738",
      productionYear: "1979",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "38 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Circular Decoration",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Bourdeaux",
    },

    movement: MovementsDataDB.TISSOT_2031,
  },
};

export default details;
