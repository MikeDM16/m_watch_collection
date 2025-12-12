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
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "1998 Eterna - Porsche Design 911 - Jean-Pierre Jarier",

  sliderImages: [
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8234.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8236.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8237.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8239.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8240.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8242.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8243.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8244.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8245.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8246.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8247.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8248.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8249.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8250.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8258.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8260.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8261.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8262.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8263.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8264.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8265.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8266.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8267.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8268.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8269.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8252.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8253.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8254.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8255.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8257.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8273.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8274.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8275.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8276.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8277.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8278.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8279.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8280.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8281.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8282.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8283.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8284.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8270.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8271.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8272.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8285.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8286.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8287.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8288.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8289.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8291.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8292.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_JP_Jarier/IMG_8293.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      "Jean-Pierre Jarier is a former French professional racing driver whose career spanned multiple decades and disciplines, including Formula 1, Formula 2, sports cars, touring cars, LeMans and GT racing.",
      "This exclusive Porsche Design (Eterna) model was issued Jean-Pierre Jarier after his victory in the 1998 FIA GT Championship.",
      "Exclusive autograph from the 2000 Budapest FIA GT race, the season in which Jarier finished 2nd in the Championship.",
    ],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.PORSCHE_DESIGN_911,
      catalogueReference: "FIA GT - Porsche 911 - Jean-Pierre Jarier",
      productionYear: "2016",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Sandblasted",
      bezel: "Tachymeter Scale",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Sandblasted Grey",
    },

    movement: MovementsDataDB.ETA_251_251,
  },
};

export default details;
