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
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "2002 Breitling Chronomat B13050.1 Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5086.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5087.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5088.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5089.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5090.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5091.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5092.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5093.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5094.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5095.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5097.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5098.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5099.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5100.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5101.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5102.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5103.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5104.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5105.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5106.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5108.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5109.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5110.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5111.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5113.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5114.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5115.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5116.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5117.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5119.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5120.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5121.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5122.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5123.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5124.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5125.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5127.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5128.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5129.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5130.JPG",
    "public/assets/Images/Breitling/2002_Breitling_Chronomat_B13050/IMG_5131.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT,
      catalogueReference: "B13050.1",
      productionYear: "2002",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "14 mm",
      material: "Stainless Steel - Gold Pushers",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Chronomat Riders Tabs bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
