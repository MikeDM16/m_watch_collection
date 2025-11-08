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
  title: "1958 Tissot Nuevo Horizonte Cross-Hair",
  sliderImages: [
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6233.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6234.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6235.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6237.JPG",

    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6225.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6226.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6227.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6228.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6229.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6230.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6231.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6232.JPG",

    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6245.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6247.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6249.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6250.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6251.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6253.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6256.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6257.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6258.JPG",

    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6239.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6240.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6241.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6242.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6243.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6244.JPG",

    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6260.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6261.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6262.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6263.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6264.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6265.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6266.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B/IMG_6267.JPG",
  ],

  saleReport: {
    price: 500,
    date: "28/10/2025",
    url: "https://www.catawiki.com/en/l/98656371",
  },

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      "Movement with production number 4231033, dating the watch back to 1958",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.NUEVO_HORIZONTE,
      catalogueReference: "50052-1",
      productionYear: "1958",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "7 mm",
      material: "Stainless Steel - Gold Plated 20 \u339B",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.TISSOT_27B_21,
  },
};

export default details;
