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
import { ZenithBrandSeries } from "./ZenithBrandSeries";

const details: WatchDetails = {
  title: "1945 Zenith Militare Cal. 106",
  sliderImages: [
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6135.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6138.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6140.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6132.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6133.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6163.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6165.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6141.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6142.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6143.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6144.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6145.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6147.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6148.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6118.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6120.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6121.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6122.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6123.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6124.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6126.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6127.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6128.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6129.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6149.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6150.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6151.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6152.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6153.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6154.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6155.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6156.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6157.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6158.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6159.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6160.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6161.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Militare_Cal_106/IMG_6162.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.ZENITH,
      series: ZenithBrandSeries.VINTAGE_PILOT,
      catalogueReference: "Militare (8562269)",
      productionYear: "1945",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "9 mm",
      material: "Chromium Case - Stainless Steel Back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Brushed",
      bezel: "Without",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Nilon (Fixed Lugs)",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ZENITH_106_15J,
  },
};

export default details;
