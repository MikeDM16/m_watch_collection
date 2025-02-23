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

import { WatchDetails } from "../../watchDetails";
import { CaunyBrandSeries } from "./CaunyBrandSeries";

const details: WatchDetails = {
  title: "1957 Cauny Apollon 17 Rubis",

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
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1581.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1582.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1583.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1584.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1586.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1588.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1589.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1591.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1593.JPG",
    "public/assets/Images/Cauny/1957_CaunyApollon/IMG_1594.JPG",
  ],
  saleReport: {
    price: 51,
    date: "16/04/2018",
    url: "https://www.catawiki.pt/l/17956057-cauny-prima-apollon-homem-1950-1959",
  },
  technicalData: {
    features: ["Date", "Mechanical", "Gold Plated 10 \u339B"],

    information: {
      brand: BrandsEnum.CAUNY,
      series: CaunyBrandSeries.APOLLON,
      catalogueReference: "385-552-320",
      productionYear: "1957",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "34 mm",
      thickness: "-",
      material: "Gold Plated (10 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Champagne",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: {
      title: "Peseux 320",
      description: "",
      usefullLinks: {
        "Ranfft Peseux 320":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&0&2uswk&Peseux_320",
        "CaliberCorner Peseux 320": "http://calibercorner.com/peseux-caliber-320/",
        " 17jewels Peseux 320":
          "http://17jewels.info/movements-en/movements-p-en/movements-p-peseux-en/1019-peseux-320.html",
        "Peseux 320 Parts Catalogue": "../Files/3179_Peseux 330.pdf",
      },
      sliderImages: [
        "public/assets/Images/Cauny/1957_CaunyApollon/Peseux_320.JPG",
        "public/assets/Images/Cauny/1957_CaunyApollon/Peseux_320-0.JPG",
        "public/assets/Images/Cauny/1957_CaunyApollon/Peseux_320-1.JPG",
        "public/assets/Images/Cauny/1957_CaunyApollon/Peseux_320-2.JPG",
      ],
      details: {
        manufacturer: "Peseux (Swiss Made)",
        modelReference: "320",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "17 (Seventeen) Jewels ",
        reserve: "40 Hours",
        functions: "Hours, Minutes, Sweep Seconds at 6 o'clock",
      },
    },
  },
};

export default details;
