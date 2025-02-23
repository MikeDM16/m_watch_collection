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

const details: WatchDetails = {
  title: "1969 Provita Automatic 25 Jewels",

  sliderImages: [
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0453.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0454.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0455.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0456.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0457.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0458.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0459.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0460.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0461.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0462.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0463.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0464.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0465.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0466.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0467.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0468.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0469.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0470.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0471.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0472.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0473.JPG",
    "public/assets/Images/Provita/1969_Provita_Automatic/IMG_0474.JPG",
  ],
  saleReport: {
    price: 85,
    date: "05/08/2020",
    url: "https://www.catawiki.pt/l/39599285-provita-sports-automatic-eta-2783-21600a-h-25j-homem-1960-1969",
  },
  technicalData: {
    features: ["Date", "Automatic"],

    information: {
      brand: BrandsEnum.PROVITA,
      series: "Automatic",
      catalogueReference: "-",
      productionYear: "1969",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Polished bezel edge",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Integrated Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "24 mm",
      color: "SS Grey",
    },

    movement: {
      title: "ETA 2783",
      description: " Quick date-set by date: set by changing around 22:30-24h.",
      usefullLinks: {
        "Ranfft ETA 2783": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&ETA_2783",
        "17Jewels ETA 2783": "https://17jewels.info/movements/e/eta/eta-2783/",
        "ETA 2783 Vintage Parts Catalogue": "../Files/496_ETA2750,1,2,6,4.pdf",
      },
      sliderImages: [
        "public/assets/Images/Provita/1969_Provita_Automatic/ETA2783 1.JPG",
        "public/assets/Images/Provita/1969_Provita_Automatic/ETA2783 2.JPG",
        "public/assets/Images/Monumental/1975_Monumental_Swiss/mov1.PNG",
        "public/assets/Images/Monumental/1975_Monumental_Swiss/mov2.PNG",
        "public/assets/Images/Monumental/1975_Monumental_Swiss/mov3.PNG",
      ],
      details: {
        manufacturer: "ETA",
        modelReference: "2783",
        type: "Automatic wind",
        frequency: "21600 A/h",
        jewels: "25 (Twenty-five) Jewels ",
        reserve: "47 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set",
      },
    },
  },
};

export default details;
