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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: '1974 Tissot Seastar "Lobster" Automatic',
  sliderImages: [
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1003.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1004.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1005.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1006.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1007.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1008.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1009.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1010.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1011.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1012.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1013.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1014.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1015.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1016.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1017.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1018.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1020.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1021.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1022.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1023.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1028.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1029.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1030.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1031.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1032.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1033.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1035.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1037.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1038.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/IMG_1039.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar/tissot_manufacturing_dates.JPG",
  ],
  sellReport: {
    price: 135,
    date: "20/12/2018",
    url: "https://www.catawiki.com/l/22969623-tissot-visodate-seastar-automatic-plaque-20microns-rare-cal-2571-men-1974",
  },
  technicalData: {
    features: [
      "Date",
      "Automatic",
      "Gold Plated 20 \u339B",
      "Movement with production number 18069091, dating the watch back to 1974",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: '"Lobster" 46669-1',
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "10 mm",
      material: "Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Slight Horizontal brush",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Brown",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "21 mm",
      color: "Black",
    },

    movement: {
      title: "Tissot 2571",
      description:
        "In-house Tissot movement produced around 1972 until 1980. \n \n" +
        "Date quickset by repeatedly pressing in the crown.",
      usefullLinks: {
        "Ranfft 2571": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Tissot_2571",
        "Vintage technical information from Tissot":
          "../Files/344_Tissot 2451, 2461, 2481, 2531.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/1974_Tissot_Seastar/eta2571-1.JPG",
        "public/assets/Images/Tissot/1974_Tissot_Seastar/eta2571-2.JPG",
        "public/assets/Images/Tissot/1974_Tissot_Seastar/eta2571-3.JPG",
        "public/assets/Images/Tissot/1974_Tissot_Seastar/eta2571-4.JPG",
        "public/assets/Images/Tissot/1974_Tissot_Seastar/eta2571-5.JPG",
        "public/assets/Images/Tissot/1974_Tissot_Seastar/eta2571-6.JPG",
      ],
      details: {
        manufacturer: "Tissot (Swiss Made)",
        modelReference: "2571",
        type: "Automatic",
        frequency: "21600 A/h",
        jewels: "21 (Tweenty-one) Jewels ",
        reserve: "42 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
