import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_FE_233_69 from "../../movements/FE/FE_233_69_17J";
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
  saleReport: {
    price: 181,
    date: "26/05/2025",
    url: "https://www.catawiki.com/en/l/95627432-corticima-tuxedo-fe-233-17-jewels-no-reserve-price-269-men-1977",
  },
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
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_16,
      color: ColorEnum.BROWN,
    },

    movement: movement_FE_233_69,
  },
};

export default details;
