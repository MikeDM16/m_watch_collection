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
  title: "1974 Tissot Seastar Automatic",
  sliderImages: [
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4688.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4689.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4690.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4691.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4692.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4694.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4695.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4696.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4697.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4698.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4699.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4700.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4701.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4700.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4703.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4704.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4705.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4706.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4707.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4708.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4709.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4710.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4711.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4712.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4713.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4714.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4715.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4716.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4717.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4718.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4719.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4720.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4721.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4722.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4723.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4724.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4725.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/IMG_4726.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/tissot_manufacturing_dates.JPG",
  ],

  sellReport: {
    price: 221,
    date: "05/01/2024",
    url: "https://www.catawiki.com/en/l/78613199",
  },

  technicalData: {
    features: [
      "Date",
      "Automatic",
      "Gold Plated 20 \u339B",
      "Movement with production number 17339670, dating the watch back to 1974",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: "44520-5",
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "10 mm",
      material: "Stainless Steel - Gold Plated 20 \u339B",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Slight Horizontal brush",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Green",
    },

    movement: {
      title: "Tissot 2481",
      description:
        "In-house Tissot movement produced around 1972 until 1980. \n \n" +
        "Date quickset by repeatedly pressing in the crown. Equivalent to Omega 1481.",
      usefullLinks: {
        "Ranfft 2481": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Tissot_2481",
      },
      sliderImages: [
        "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/tissot_2481_1.JPG",
        "public/assets/Images/Tissot/1974_Tissot_Seastar_Automatic/tissot_2481_2.JPG",
      ],
      details: {
        manufacturer: "Tissot (Swiss Made)",
        modelReference: "2481",
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
