import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
  title: "1995 Tissot Ballade Seastar",
  sliderImages: [
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1043.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1044.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1045.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1046.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1049.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1050.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1051.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/KOJC0577.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1052.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1053.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1054.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1055.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1056.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1059.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1060.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1061.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1062.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1063.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1064.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1065.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1066.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1067.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1070.JPG",
    "public/assets/Images/Tissot/1995_Tissot_Seastar/IMG_1071.JPG",
  ],
  saleReport: {
    price: 155,
    date: "22/12/2018",
    url: "https://www.catawiki.com/l/22969801-tissot-t-classic-seastar-a665-765k-eta-men-2000-2010",
  },
  technicalData: {
    features: [featuresEnum.DATE],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.BALLADE,
      catalogueReference: "A665/765K TKS-JA",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "6 mm",
      material: "Stainless Steel with gold details",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Gold edge bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Two tone: Grey with Gold details",
    },

    movement: MovementsDataDB.ETA_955_114,
  },
};

export default details;
