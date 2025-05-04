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
import { CaunyBrandSeries } from "./CaunyBrandSeries";

const details: WatchDetails = {
  title: "1965 Cauny Apollon Calendario 17 Rubis",

  sliderImages: [
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1897.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1898.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1899.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1900.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1901.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1902.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1903.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1904.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1905.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1924.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1925.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1926.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1927.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1928.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1929.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1930.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1934.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1935.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1550.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1551.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1914.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1915.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1916.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1917.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1918.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1919.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1920.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1922.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1923.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1906.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1907.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1908.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1909.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1910.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1911.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1912.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1913.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.CAUNY,
      series: CaunyBrandSeries.APOLLON,
      catalogueReference: "255-552-96/4",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "8",
      material: "Gold Plated (10 \u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Champagne",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FHF_96_4,
  },
};

export default details;
