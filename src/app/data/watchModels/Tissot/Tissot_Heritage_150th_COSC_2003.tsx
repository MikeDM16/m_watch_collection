import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
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
  title: "2003 Tissot Heritage COSC Limited Edition 0837/8888",
  sliderImages: [
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4948.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4949.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4996.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4997.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4950.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4951.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4952.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4953.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4989.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4991.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4956.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4957.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5831.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5833.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5834.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4960.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4962.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4963.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4964.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4965.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4966.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4967.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4968.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4969.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4970.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4971.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4972.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4973.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4974.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4975.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4976.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4977.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4978.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4979.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4980.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4981.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4982.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4983.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4984.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4985.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4986.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4987.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4988.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4993.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4994.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_4995.JPG",
  ],

  saleReport: {
    price: 950,
    date: "01/10/2025",
    url: "https://www.catawiki.com/en/l/98063593",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,

      catalogueReference: "150th Anniversary T66.1.721.31 0837/8888",
      productionYear: "2003",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Silver",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2895_1,
  },
};

export default details;
