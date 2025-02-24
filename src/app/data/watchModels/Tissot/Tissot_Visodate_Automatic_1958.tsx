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

import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1958 Tissot Visodate Automatic",
  sliderImages: [
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0423.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0424.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0425.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0426.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0427.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0428.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0429.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0430.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0431.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0432.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0433.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0434.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0435.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0436.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0437.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0439.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0440.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0441.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0442.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0443.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0444.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0446.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0447.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0448.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0449.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/IMG_0451.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/visodate-sell-add1.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/visodate-sell-add.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Visodate/tissot_manufacturing_dates.JPG",
  ],
  saleReport: {
    price: 320,
    date: "10/12/2019",
    url: "https://www.catawiki.com/l/32660783-tissot-visodate-gold-20microns-cal-28-5r-19800a-h-men-1958",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC,
      featuresEnum.GOLD_PLATED_20M,
      "Movement with production number 4257252, dating the watch back to 1958",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.VISODATE,
      catalogueReference: "67050-2",
      productionYear: "1958",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "34 mm",
      thickness: "11 mm",
      material: "Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Lizard skin leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Bordeaux",
    },

    movement: {
      title: "Tissot 28.5R-621",
      description:
        "In-house Tissot movement produced around 1950s until 1960.\n \n" +
        'Suffix "5R-621" reffers to the variant with automatic winding and date. \n',
      usefullLinks: {
        "Ranfft 28.5R-621":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Tissot_28_5R_621",
        "Vintage technical information from Tissot": "../Files/3879_Tissot 28.5R-21 Part Sheet.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/1958_Tissot_Visodate/28-5R-621 1.JPG",
        "public/assets/Images/Tissot/1958_Tissot_Visodate/28-5R-621 2.JPG",
        "public/assets/Images/Tissot/1958_Tissot_Visodate/28-5R-621 3.JPG",
      ],
      details: {
        manufacturer: "Tissot (Swiss Made)",
        modelReference: "28.5R-621",
        type: "Automatic",
        frequency: "19800 A/h",
        jewels: "17 (Seventeen) Jewels ",
        reserve: "40 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
