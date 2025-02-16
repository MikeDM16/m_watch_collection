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
  title: "1995 Jaguar Fragrances Chronograph - Limited Edition",

  sliderImages: [
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3483.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3484.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3453.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3454.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3455.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3456.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3457.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3458.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3459.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3460.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3461.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3462.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3463.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3464.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3465.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3466.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3467.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3468.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3469.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3470.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3471.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3472.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3473.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3474.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3475.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3476.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3480.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3481.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono/IMG_3482.JPG",
  ],
  sellReport: {
    price: 340,
    date: "07/12/2023",
    url: "https://www.catawiki.com/en/l/77571631-jaguar-xj220-chronograph-nos-limited-edition-men-1995",
  },
  technicalData: {
    features: ["Date", "Chronograph", "30 meters"],

    information: {
      brand: BrandsEnum.JAGUAR_FRAGRANCES,
      series: "Fragrances Collection - Limited Edition",
      catalogueReference: "-",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Chromed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather (Shark skin)",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.MIYOTA_OS10,
  },
};

export default details;
