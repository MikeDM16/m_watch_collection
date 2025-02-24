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
  title: "2008 Breitling Chronomat Evolution A13356 COSC",
  sliderImages: [
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7208.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7209.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7210.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7211.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7212.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7214.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7215.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7217.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7219.JPG",

    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7161.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7162.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7163.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7166.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7167.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7168.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7169.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7170.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7171.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7172.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7173.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7174.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7175.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7176.JPG",

    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7196.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7198.JPG",

    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7147.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7148.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7149.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7150.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7151.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7152.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7154.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7155.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7156.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7157.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7158.JPG",

    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7191.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7192.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7193.JPG",

    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7200.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7201.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7203.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7204.JPG",

    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7177.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7178.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7183.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7185.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7186.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7187.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7188.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7189.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7190.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7194.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7195.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7199.JPG",

    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7122.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7125.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7126.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7127.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7128.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7129.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7131.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7132.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7133.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7134.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7135.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7136.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7137.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7138.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7139.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7140.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7141.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7142.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7143.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7144.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7145.JPG",
    "public/assets/Images/Breitling/2008_Breitling_Chronomat_Evolution_A13356/IMG_7146.JPG",
  ],

  saleReport: {
    price: 2900,
    date: "12/07/2024",
    url: "https://www.catawiki.com/en/l/85795637-breitling-chronomat-evolution-a13356-men-2008",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_300_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT,
      catalogueReference: "Evolution (A13356)",
      productionYear: "2008",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "44 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_300M,
      finishingDetails: "Polished",
      bezel: "Chronomat Riders Tabs bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "22 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
