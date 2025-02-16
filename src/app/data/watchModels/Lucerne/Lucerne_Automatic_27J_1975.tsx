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
  title: "1975 Lucerne Automatic 25 Jewels",
  description: {
    text:
      "Lucerne watches have their major appearance in the 1970s. \n" +
      'The brand name is the same as a city in central Switzerland, therefore possibly justifying the brand "Swiss made" origins and establishing. \n \n' +
      'Their models were essentially simple timepieces, built with a low production cost and taking advantage of the "Swiss Made" high-quality philosophy to\
         make their prices up. Still, the brand was reliable and provided rather affordable watches for their time. \n \n' +
      "The watches could use simple pin-lever movements up to decent jewelled calibers. If there is any information in the dial or in the movement engraving \
         regarding the jewels numbers, then the movement does have jewels. Otherwise, it's probably a pin-lever movement. ",

    sliderImages: [],
  },

  sliderImages: [
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_2034.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_2035.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_2036.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_2037.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_2038.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_2039.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_0443.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_0446.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_0448.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_0452.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1785.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1786.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1787.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1788.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1789.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1790.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1791.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1792.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1793.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1794.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/IMG_1795.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_Dive/BWAK2273.JPG",
  ],
  sellReport: {
    price: 150,
    date: "17/12/2018",
    url: "https://www.catawiki.com/l/22975267-lucerne-swiss-automatic-25-jewels-dive-watch-men-1970-1979",
  },
  technicalData: {
    features: ["Date", "Automatic", "50 meters", "Bi-directional rotating bezel"],

    information: {
      brand: BrandsEnum.LUCERNE,
      series: "Automatic",
      catalogueReference: "-",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "35 mm",
      thickness: "14 mm",
      material: "Stainless Steel - Chrome plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Bi-directional bezel, 15-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.POWDER_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Brown",
    },

    movement: {
      title: "Baumgartner 158",
      description: "",
      usefullLinks: {
        "Ranfft Baumgartner 158":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Baumgartner_158_31_7_CLDD",
      },
      sliderImages: [
        "public/assets/Images/Lucerne/1975_Lucerne_Dive/movBF158-1.JPG",
        "public/assets/Images/Lucerne/1975_Lucerne_Dive/movBF158-2.JPG",
        "public/assets/Images/Lucerne/1975_Lucerne_Dive/movBF158-3.JPG",
      ],
      details: {
        manufacturer: "Baumgartner",
        modelReference: "158 31/7(CLD)",
        type: "Automatic wind",
        frequency: "18000 A/h",
        jewels: "25 (Twenty-five) Jewels ",
        reserve: "42 Hours",
        functions: "Day, Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
