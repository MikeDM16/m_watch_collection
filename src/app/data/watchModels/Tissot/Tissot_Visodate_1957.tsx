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
  title: "1957 Tissot Visodate",
  sliderImages: [
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1657.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1658.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1659.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1661.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1662.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1663.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1664.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1665.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1666.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1667.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1668.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1669.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1670.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1671.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_1672.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0903.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0904.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0905.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0906.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0907.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0908.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0909.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0910.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0911.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0912.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_0153.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/FUGT0776.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_2994.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_2987.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_2988.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/JKVC6411.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/RZVP0560.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/visodate-sell-add1.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/visodate-sell-add.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/tissot_manufacturing_dates.JPG",
  ],
  technicalData: {
    features: [
      "Date",
      "Mechanical",
      "Gold Plated 20 \u339B",
      "Movement with production number 3909420, dating the watch back to 1957",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.VISODATE,
      catalogueReference: "56000-1S",
      productionYear: "1957",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.PAN_DIAL,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Lizard skin leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: {
      title: "Tissot 27B-21",
      description:
        "In-house Tissot movement produced around 1950s until 1961. \n" +
        'Suffix "21-1": variant with sweep second and Incabloc. \n',
      usefullLinks: {
        "Ranfft 27B-21":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&ae&2uswk&Tissot_27_221",
        "Vintage technical information from Tissot":
          "../Files/1867_Tissot 27B, 27b1,27b2,27b21.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/1957_Tissot_Visodate/mov3.PNG",
        "public/assets/Images/Tissot/1957_Tissot_Visodate/mov1.PNG",
      ],
      details: {
        manufacturer: "Tissot (Swiss Made)",
        modelReference: "27B-21",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "16 (Sixteen) Jewels ",
        reserve: "44 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
