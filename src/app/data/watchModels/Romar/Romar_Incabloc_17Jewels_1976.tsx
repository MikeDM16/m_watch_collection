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
  title: "1976 Romar Incabloc 17 Jewels",
  sliderImages: [
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_7994.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_7995.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_7996.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_7997.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_7998.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_7999.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8001.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8002.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8003.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8004.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8005.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8006.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8007.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8008.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8009.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8010.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8011.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8012.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8013.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8014.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8015.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8016.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8017.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8018.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8019.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8020.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8021.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8022.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8023.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8024.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8025.JPG",
    "public/assets/Images/Romar/1976_Romar_Incabloc_U6380/IMG_8026.JPG",
  ],

  saleReport: {
    price: 144,
    date: "25/07/2024",
    url: "https://www.catawiki.com/en/l/86454331-romar-blue-shades-nos-no-reserve-price-unitas-6389-17j-gold-plated-men-1976",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.ROMAR,
      series: "Incabloc",
      catalogueReference: "-",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Gold Plated (10 \u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue Shades",
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;
