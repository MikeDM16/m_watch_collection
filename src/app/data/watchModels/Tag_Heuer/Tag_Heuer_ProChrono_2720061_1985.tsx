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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "1985 Tag Heuer Professional 272.006/1 Chronograph",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0505.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0506.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0507.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0508.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0509.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0510.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0511.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0512.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0513.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0514.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0515.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0516.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0517.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0518.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0519.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0520.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0521.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0522.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0523.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0524.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0525.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0526.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0527.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0528.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0529.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0530.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0531.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0532.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0533.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0534.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0535.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0536.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0538.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0539.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0540.JPG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1987_catalogue_p16.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1987_catalogue_p86.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1987_catalogue_p95.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p100.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p101.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p102.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p95.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p96.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p97.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p98.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1988_catalogue_p99.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1990_catalogue_p10.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1990_catalogue_p11.PNG",
    "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/1990_catalogue_p12.PNG",
  ],
  sellReport: {
    price: 470,
    date: "30/04/2021",
    url: "https://www.catawiki.com/en/l/47328697",
  },
  technicalData: {
    features: [
      "Date",
      "Chronograph",
      "Screw-in crown",
      "200 meters",
      "Uni-directional rotating bezel",
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.PROFESSIONAL_2000_SERIES,
      catalogueReference: "272.0061-1",
      productionYear: "1985",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Matte",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.DD_2000_ETA_955_232,
  },
};

export default details;
