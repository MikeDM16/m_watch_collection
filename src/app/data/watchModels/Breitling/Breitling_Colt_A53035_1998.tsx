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
  title: "1998 Breitling Colt A53035 Chronograph",
  sliderImages: [
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9224.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9225.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9226.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9227.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9228.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9229.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9231.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6278.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6279.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6280.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6281.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6282.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6283.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6291.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6293.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6294.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6272.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6273.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6274.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6275.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6276.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6277.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9175.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_9176.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6295.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6296.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6297.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6298.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6299.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6300.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6301.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6302.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6303.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6304.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6305.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6306.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6307.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6308.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6309.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6310.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6311.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6312.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6313.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6314.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6315.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6316.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6242.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6243.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6244.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6246.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6247.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6248.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6249.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6250.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6251.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6252.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6253.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6261.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6262.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6263.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6264.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6265.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6266.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6267.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6268.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6254.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6255.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6256.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6257.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6258.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6259.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Colt_A53035_Chronograph/IMG_6260.JPG",
  ],

  saleReport: {
    price: 1005,
    date: "08/01/2025",
    url: "https://www.catawiki.com/en/l/92589175",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.COLT,
      catalogueReference: "Colt (A53035)",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Rider Tabs, 5 min graduated",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Polished",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
