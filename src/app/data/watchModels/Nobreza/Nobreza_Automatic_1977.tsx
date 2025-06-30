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
  title: "1977 Nobreza Automatic ETA 2783 25 Jewels",

  sliderImages: [
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1841.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1842.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1843.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1802.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1808.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1809.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1810.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1811.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1812.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1814.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1815.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1816.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1817.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1818.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1787.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1788.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1791.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1792.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1793.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1795.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1796.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1798.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1799.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1800.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1826.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1828.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1829.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1830.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1831.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1832.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1833.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1834.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1819.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1820.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1821.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1822.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1823.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1824.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1835.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1836.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1837.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1838.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1839.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Automatic_25_jewels/IMG_1840.JPG",
  ],
  saleReport: {
    price: 150,
    date: "10/06/2025",
    url: "https://www.catawiki.com/en/l/95829619",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.NOBREZA,
      series: "Automatic",
      catalogueReference: "6034",
      productionYear: "1977",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "12 mm",
      material: "Stainless Steel - Gold plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_40M,
      finishingDetails: "Polished",
      bezel: "Inner graduated bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Brown",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2783,
  },
};

export default details;
