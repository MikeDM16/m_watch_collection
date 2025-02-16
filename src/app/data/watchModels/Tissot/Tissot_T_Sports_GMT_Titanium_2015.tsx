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

const details: WatchDetails = {
  title: "2015 Tissot T-Sports GMT Titanium",
  sliderImages: [
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5956.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5958.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5959.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5960.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5961.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5962.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5963.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5964.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5965.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5966.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5967.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5968.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5969.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5970.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5971.JPG",

    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5991.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5992.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5990.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5994.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5995.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5996.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5997.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5998.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5999.JPG",

    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5972.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5973.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5975.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5970.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5976.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5977.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5978.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5979.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5980.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5981.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5982.JPG",

    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5996.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5997.JPG",

    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5983.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5984.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5985.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5986.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5987.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5988.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5989.JPG",
    "public/assets/Images/Tissot/2015_Tissot_T_Sports_GMT_Titanium/IMG_5990.JPG",
  ],

  sellReport: {
    price: 281,
    date: "05/02/2024",
    url: "https://www.catawiki.pt/l/79719259",
  },

  technicalData: {
    features: ["Date", "GMT"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: "T-Sports",
      catalogueReference: "GMT Titanium",
      productionYear: "2015",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "43 mm",
      thickness: "10 mm",
      material: "Titanium",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Sattin-mate",
      bezel: "Without Bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Dark Brown",
    },

    movement: MovementsDataDB.ETA_G10_961,
  },
};

export default details;
