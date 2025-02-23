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
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "2016 Porsche Design Drivers Collection Cayenne",
  sliderImages: [
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5688.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5689.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5690.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5691.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5692.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5693.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5694.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5695.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5696.JPG",

    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5714.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5715.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5718.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5719.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5720.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5721.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5722.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5723.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5724.JPG",

    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5703.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5704.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5705.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5706.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5707.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5708.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5709.JPG",

    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5727.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5728.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5729.JPG",

    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5697.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5698.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5699.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5700.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5701.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5702.JPG",

    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5710.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5711.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5712.JPG",
    "public/assets/Images/Porsche_Design/2016_Porsche_Design_Drivers_Collection_Cayenne/IMG_5713.JPG",
  ],

  saleReport: {
    price: 560,
    date: "13/12/2024",
    url: "https://www.catawiki.com/en/l/91343753",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.DRIVER_COLLECTION_CAYENNE,
      catalogueReference: "Cayenne",
      productionYear: "2016",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished sides",
      bezel: "Inner Tachymeter Scale",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "22 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.RONDA_5030D,
  },
};

export default details;
