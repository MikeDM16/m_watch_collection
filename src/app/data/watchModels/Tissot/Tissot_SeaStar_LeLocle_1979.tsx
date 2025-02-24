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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1979 Tissot Seastar LeLocle Cal.2031",
  sliderImages: [
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0207.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0209.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0211.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0213.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0213_2.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0215.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0217.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0219.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0221.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0223.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0225.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0227.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0229.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0231.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0233.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0233_2.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0235.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0237.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0239.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0241.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0243.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0245.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0247.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0249.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0251.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0105.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0106.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0107.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0107_1.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/IMG_0108.JPG",
    "public/assets/Images/Tissot/1979_Tissot_Seastar_LeLocle/tissot_manufacturing_dates.JPG",
  ],
  saleReport: {
    price: 120,
    date: "06/11/2020",
    url: "https://www.catawiki.com/l/42004487",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.LE_LOCLE,
      catalogueReference: "40210",
      productionYear: "1979",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Circular Brushing detail",
      bezel: "Polished bezel edge",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather (Cow)",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.TISSOT_2031,
  },
};

export default details;
