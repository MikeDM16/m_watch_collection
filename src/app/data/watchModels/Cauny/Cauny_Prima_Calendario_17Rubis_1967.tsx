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
  title: "1967 Cauny Prima Calendario 17 Rubis",
  description: {
    text:
      "Cauny was founded around in 1927, at la Chaux de Fonds, in Switzerland. \n" +
      "Although the brand was born at the heart of the Swiss watches jewellery, their models were mostly intended for the Spanish and Portuguese market, \
             as is founder was Spanish and have a good set of commercial connections. \n \n" +
      'The main name, "Cauny" was always present in the various title changes that the brand went through. \n' +
      'Their prime model, the "Prima" watches line, were first registered around 1953. The brand seems to desapear in the late 1960s, perhaps due to the emerging of the quartz mechanisms. \n' +
      "Today, the brand is still in the market, but mostly as a Spanish operation using mechanisms from Miyota ou Hatori. \n \n" +
      "Sadly, there is a big gap between what the Swiss made Cauny watches were in the past and how the brand survives nowadays. \n" +
      "In the past, Cauny was then a Swiss-based company that produces middle-range mechanical and automatic watches. \
             Their model collection also includes some professional divers and high-quality mechanical chronographs powered by Landeron or Valjoux mechanisms. \n" +
      "As many brands at the time, Cauny did not produce his in-house mechanisms. They rather use models built by other companies like FHF, AS and, \
              as already stated, Landeron and Valjoux in their high-end models. \n \n" +
      "Most of their watches present good finishing quality and their gold plated was always with, at least, 10 microns. \n" +
      "Just how far Cauny went in terms of manufacture and assembly is not clear and it has been mooted that the firm used second hand or unwanted parts from Omega and Tissot watches. \n" +
      "Cauny may have designed their watches and put them out to other firms to manufacture, but I think that Cauny watches were at least assembled by the Cauny company, \
               at least prior to the modern period. \n" +
      "Cauny his nowadays certainly a collectable brand, due to their original shapes and cases designs. \
               Also, their essence was to build reliable and yet affordable Swiss made watches to the Iberian market. \n \n" +
      "This particular model, the Apollon, was launch to celebrate the Nasa Apollon program, that puts the man on the moon in 1969. \
               The model comes whit the Peseux caliber 320, a Swiss movement produced around in the 50s. \n" +
      "It can be found with or without shock protection and other variations also exist, depending on when it was manufactured. \
                This caliber is one of the most successful (and some even say one of the most beautiful) flat hand winding movements.\n \n" +
      "Independent of the variation and functions, it has a height of only 3mm, making it really unique when concerning the height.",
    sliderImages: [
      "public/assets/Images/Cauny/CaunyModels/m1 (1).JPG",
      "public/assets/Images/Cauny/CaunyModels/m1 (2).JPG",
      "public/assets/Images/Cauny/CaunyModels/m1 (3).JPG",
      "public/assets/Images/Cauny/CaunyModels/m2 (2).JPG",
      "public/assets/Images/Cauny/CaunyModels/m2 (3).JPG",
      "public/assets/Images/Cauny/CaunyModels/m2 (1).JPG",
      "public/assets/Images/Cauny/CaunyModels/cauny210.JPG",
      "public/assets/Images/Cauny/CaunyModels/Cauny-Bicompax (5).JPG",
      "public/assets/Images/Cauny/CaunyModels/Cauny-Bicompax (4).JPG",
      "public/assets/Images/Cauny/CaunyModels/Cauny-Bicompax (1).JPG",
      "public/assets/Images/Cauny/CaunyModels/Cauny-Bicompax (2).JPG",
      "public/assets/Images/Cauny/CaunyModels/Cauny-Bicompax (3).JPG",
      "public/assets/Images/Cauny/CaunyModels/chrono (1).JPG",
      "public/assets/Images/Cauny/CaunyModels/chrono (3).JPG",
      "public/assets/Images/Cauny/CaunyModels/chrono (2).JPG",
    ],
  },
  sliderImages: [
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1808.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1809.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1810.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1811.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1812.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1813.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1814.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1815.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1816.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1817.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1818.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1819.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1820.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1821.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1822.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1823.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1824.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1825.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1826.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1827.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1828.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1829.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1830.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/IMG_1832.JPG",
    "public/assets/Images/Cauny/1967_CaunyPrimaCalendario/XZIK1870.JPG",
  ],
  saleReport: {
    price: 135,
    date: "21/03/2019",
    url: "https://www.catawiki.pt/l/25161393-cauny-prima-calendario-cal-as-1950-homem-1960-1969",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.CAUNY,
      series: CaunyBrandSeries.PRIMA,
      catalogueReference: "27.5-70029",
      productionYear: "1967",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "38 mm",
      thickness: "12 mm",
      material: "Gold Plated (10 \u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Vertical brushed",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.AS_1950,
  },
};

export default details;
