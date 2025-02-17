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
  title: "1985 Heuer Airline Professional 895.513",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2795.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2796.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2797.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2798.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2799.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2800.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2801.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2802.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2803.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2804.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2805.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2806.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2807.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2809.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2810.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2811.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2812.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2813.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2814.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2815.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2816.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2817.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2819.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2820.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2821.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2822.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2823.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2824.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2825.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2825_1.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2826.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_4006.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/Heuer_Catalogue_1.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/Heuer_Catalogue_2.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/Heuer_Catalogue_3.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/Heuer_Catalogue_4.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/Heuer_Catalogue_5.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/Heuer_Catalogue_6.JPG",
    "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/Heuer_Catalogue_7.JPG",
  ],
  sellReport: {
    price: 460,
    date: "24/08/2020",
    url: "https://www.catawiki.com/l/40034805-heuer-airline-gmt-professional-2000-895-513-men-1985",
  },
  technicalData: {
    features: ["Date", "200 meters", "Uni-directional rotating bezel", "GMT Hand"],

    information: {
      brand: BrandsEnum.HEUER,
      series: TagHeuerBrandSeries.AIRLINE_HEUER,
      catalogueReference: "985.513",
      productionYear: "1985 - 1988",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "34 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Matte",
      bezel: "Uni-directional, 5-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.POWDER_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Two tone: Grey with Gold details",
    },

    movement: {
      title: "ETA 955.414",
      description:
        "Vintage ETA Normflatline movement. \n \n" +
        "Added GMT hand over the normal 955.4XX series. GMT Hand adjusted using the 11 o'clock pusher.",
      usefullLinks: {
        "Ranfft ETA 955.414":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&0&2uswk&ETA-ESA_955_414",
        "Heuer 1985-1986 Catalogue":
          "https://www.calibre11.com/catalogues/vintage-heuer-catalogues/1985-1986-catalogue/#1985-1986-catalogue-111",
      },
      sliderImages: ["public/assets/Images/Tag_Heuer/1985_Heuer_Airline/ETA_955_414.JPG"],
      details: {
        manufacturer: "ETA (Swiss Made)",
        modelReference: "955.414",
        type: "Quartz",
        battery: "371",
        jewels: "7 (Seven) Jewels ",
        functions: "Date, GMT, Hours, Minutes, Seconds ",
      },
    },
  },
};

export default details;
