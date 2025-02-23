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
  title: "1955 Tissot Visodate",
  sliderImages: [
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3352.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3353.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3354.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3355.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3356.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3357.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3358.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3359.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3360.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3361.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3362.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3363.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3364.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3365.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3367.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3368.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3369.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3370.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3371.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3372.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3373.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3374.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3375.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3376.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3377.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3378.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3379.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3380.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3381.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3382.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/IMG_3384.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/visodate-sell-add1.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/visodate-sell-add.JPG",
    "public/assets/Images/Tissot/1954_Tissot_Visodate/tissot_manufacturing_dates.JPG",
  ],
  saleReport: {
    price: 138,
    date: "25/09/2020",
    url: "https://www.catawiki.com/l/40821933",
  },
  technicalData: {
    features: [
      "Date",
      "Automatic",
      "Gold Plated 20 \u339B",
      "Movement with production number 3299521, dating the watch back to 1955",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.VISODATE,
      catalogueReference: "6606-1",
      productionYear: "1955",
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
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
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
        "public/assets/Images/Tissot/1954_Tissot_Visodate/mov3.PNG",
        "public/assets/Images/Tissot/1954_Tissot_Visodate/mov1.PNG",
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
