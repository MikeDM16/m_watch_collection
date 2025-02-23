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
  title: "2000 Tissot Sports E662/762M",
  sliderImages: [
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0498.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0499.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0500.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0501.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0502.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0503.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0504.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0505.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0506.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0507.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0508.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0509.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0510.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0511.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/IMG_0512.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/back1.JPG",
    "public/assets/Images/Tissot/2000_Tissot_Sport_Chrono/back2.JPG",
  ],
  sellReport: {
    price: 145,
    date: "30/10/2018",
    url: "https://www.catawiki.pt/l/21734773-tissot-eta-chronograph-e662-762m-men-2000-2010",
  },
  technicalData: {
    features: ["Date", "Chronograph", "100 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SPORTS,
      catalogueReference: "E662/762M",
      productionYear: "2000",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Vertical Brushing",
      bezel: "Uni-directional, 5-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Light Brown",
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
