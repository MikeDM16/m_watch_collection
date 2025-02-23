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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1976 Novart Incabloc 17 Jewels",
  sliderImages: [
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3950.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3953.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3951.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3952.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3955.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3956.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3957.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3958.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3959.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3960.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3962.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3963.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3964.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3965.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3966.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3967.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3968.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3969.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3970.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3971.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3973.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3974.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3976.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3977.JPG",

    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3978.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3979.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3980.JPG",
    "public/assets/Images/Novart/1976_Novart_Incabloc_White/IMG_3981.JPG",
  ],

  sellReport: {
    price: 163,
    date: "22/10/2024",
    url: "https://www.catawiki.com/en/l/89180477-novart-incabloc-nos-no-reserve-price-unitas-6389-17-jewels-men-1976",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.NOVART,
      series: "Incabloc",
      catalogueReference: "10072",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Wgite",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;
