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
  title: "1967 Tissot Seastar PR 516",
  sliderImages: [
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0572.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0573.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0574.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0575.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0576.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0577.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0578.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0579.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0580.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0581.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0582.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0583.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0584.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0585.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0586.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0587.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0588.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/IMG_0589.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/UEND1785.JPG",
    "public/assets/Images/Tissot/1967_Tissot_PR_516/tissot_manufacturing_dates.JPG",
  ],
  saleReport: {
    price: 181,
    date: "01/11/2018",
    url: "https://www.catawiki.com/l/21870059-tissot-visodate-seastar-pr-516-cal-782-1-men-1960-1969",
  },
  technicalData: {
    features: [
      "Date",
      "Mechanical",
      "Movement with production number 9324299, dating the watch back to 1967",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "Visodate Seastar 42516-9X",
      productionYear: "1967",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Vertical brushed polishing",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: {
      title: "Tissot 782-1",
      description:
        "In-house Tissot movement produced around 1965 until 1972. \n" +
        'Suffix "-1": new Incabloc, date jumper with long hole for date change by forth-and back setting. \
                           Therefore, it allows quick date set, by changing around 21:30-24h. \n',
      usefullLinks: {
        "Ranfft Tissot 782-1":
          "https://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Tissot_782_1",
        "Vintage technical Information from Tissot":
          "../Files/2790_Tissot 781.1,782.1,783.1,784.1.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/1967_Tissot_PR_516/tissot_7821-1.PNG",
        "public/assets/Images/Tissot/1967_Tissot_PR_516/tissot_7821-2.PNG",
        "public/assets/Images/Tissot/1967_Tissot_PR_516/tissot_7821-3.PNG",
      ],
      details: {
        manufacturer: "Tissot (Swiss Made)",
        modelReference: "782-1",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "17 (Seventeen) Jewels ",
        reserve: "49 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
