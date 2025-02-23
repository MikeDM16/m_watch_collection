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
  title: "2012 Tissot Heritage Visodate Automatic",
  sliderImages: [
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_4704.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_4707.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_4711.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_4714.JPG",

    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0965.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0966.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0967.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0968.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0969.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0970.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0971.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0972.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0973.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0974.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0975.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0976.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0977.JPG",

    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0991.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0992.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0993.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0994.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0995.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0997.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0998.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0999.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_1001.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_1002.JPG",

    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0978.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0979.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0980.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0981.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0982.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0983.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0984.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0985.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0986.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0987.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0988.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0989.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Heritage_Visodate/IMG_0990.JPG",
  ],
  sellReport: {
    price: 466,
    date: "07/11/2024",
    url: "https://www.catawiki.com/en/l/90002273-tissot-visodate-heritage-150th-anniversary-eta-2836-25-jewels-men-2012",
  },

  technicalData: {
    features: ["Date", "Open Case Back", "Automatic"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,
      catalogueReference: "Visodate T019430.1603101",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Bordeaux",
    },

    movement: MovementsDataDB.ETA_2836,
  },
};

export default details;
