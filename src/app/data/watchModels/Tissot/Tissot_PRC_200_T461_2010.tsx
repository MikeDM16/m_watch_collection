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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2010 Tissot PRC 200 T461 Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3639.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3780.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3640.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3781.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3642.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3782.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3644.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3783.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3641.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3643.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3645.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3647.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3648.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3649.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3651.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3652.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3653.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3654.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3753.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3754.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3755.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3756.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3757.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3758.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3759.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3760.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3761.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3762.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3784.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3785.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3786.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3787.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3788.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3789.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3790.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3791.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3792.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3793.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3794.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3795.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3796.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3797.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3798.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3799.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3800.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3801.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3802.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3803.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3804.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3805.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRC_200/IMG_3806.JPG",
  ],
  saleReport: {
    price: 170,
    date: "06/07/2019",
    url: "https://www.catawiki.pt/l/27822175-tissot-prc-200-t641-eta-caliber-homem-2011-presente",
  },
  technicalData: {
    features: ["Date", "Chronograph", "Tachymeter", "200 meters", "Screw-in crown"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRC_200,
      catalogueReference: "T461",
      productionYear: "2010",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Polished",
      bezel: "Inner bezel, tachymeter graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Jubilee Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
