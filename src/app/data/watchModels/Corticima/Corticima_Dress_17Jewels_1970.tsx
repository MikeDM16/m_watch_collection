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
  title: "1970 Corticima Dress 17 Jewels",
  sliderImages: [
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1844.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1845.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1846.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1847.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1848.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1849.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1850.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1851.JPG",

    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1876.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1877.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1878.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1879.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1880.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1882.JPG",

    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1860.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1861.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1862.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1863.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1864.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1865.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1866.JPG",

    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1884.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1885.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1886.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1887.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1888.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1889.JPG",

    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1853.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1854.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1855.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1856.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1857.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1858.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1859.JPG",

    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1871.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1872.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1873.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1874.JPG",
    "public/assets/Images/Corticima/1970_Corticima_Dress_17_jewels/IMG_1875.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.CORTICIMA,
      series: "17 Jewels",
      catalogueReference: "-",
      productionYear: "1970",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "16 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FE_233_69,
  },
};

export default details;
