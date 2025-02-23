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
  title: "1974 HIPCO Incabloc 17 Jewels",
  sliderImages: [
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7965.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7966.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7967.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7968.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7969.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7970.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7971.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7972.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7973.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7974.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7975.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7976.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7977.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7978.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7979.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7980.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7981.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7982.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7983.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7984.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7985.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7986.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7987.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7988.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7989.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7990.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7991.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7992.JPG",
    "public/assets/Images/Hipco/1974_HIPCO_Incabloc_U6380/IMG_7993.JPG",
  ],

  saleReport: {
    price: 256,
    date: "05/08/2024",
    url: "https://www.catawiki.com/en/l/86729723",
  },

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.HIPCO,
      series: "Incabloc",
      catalogueReference: "10072",
      productionYear: "1974",
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
      color: "Brown",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;
