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

const details: WatchDetails = {
  title: "1999 DuBois Grand Prix D'Europe Formula 1 - 1999",

  sliderImages: [
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9097.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9098.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9099.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9100.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9101.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9103.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/catalogue.JPG",

    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9071.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9072.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9073.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9074.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9076.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9077.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9078.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9079.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9081.JPG",

    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9082.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9083.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9084.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9085.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9086.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9087.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9088.JPG",

    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_0007_1.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_0010.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_0011.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_0012_1.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_0013.JPG",

    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9095.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9096.JPG",

    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9089.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9090.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9091.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9092.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9093.JPG",
    "public/assets/Images/DuBois/1999_DuBois_Gran_Prix_Europe_F1_7750/IMG_9094.JPG",
  ],

  saleReport: {
    price: 765,
    date: "25/01/2026",
    url: "https://www.catawiki.com/en/l/100887530",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.DUBOIS,
      series: "Grand Prix D'Europe Formula 1 - 1999",
      catalogueReference: "Limited Edition 499",
      productionYear: "1999",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "38 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Brushed",
      bezel: "Brushed",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
