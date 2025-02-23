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
  title: "1987 Lorenz Montecarlo Sub 666ft",
  sliderImages: [
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0660.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0661.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0662.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0663.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0664.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0665.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0667.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0668.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0669.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0670.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0671.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0672.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0673.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0674.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0675.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0676.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0677.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0678.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0679.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0680.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0681.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0682.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0683.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0684.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0685.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0686.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0687.JPG",
    "public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/IMG_0689.JPG",
  ],
  sellReport: {
    price: 140,
    date: "23/11/2020",
    url: "https://www.catawiki.com/l/42628731",
  },

  technicalData: {
    features: ["Date", "200 meters", "Uni-directional rotating bezel", "Screw-in crown"],

    information: {
      brand: BrandsEnum.LORENZ,
      series: "Montecarlo Sub 666ft",
      catalogueReference: "1277993",
      productionYear: "1987",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Brushed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey",
    },

    movement: {
      title: "ETA 955.414",
      description: "Vintage ETA Normflatline movement.",
      usefullLinks: {
        "Ranfft ETA 955.414":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&0&2uswk&ETA-ESA_955_414",
      },
      sliderImages: ["public/assets/Images/Lorenz/1987_Lorenz_Montecarlo_600ft/ETA_955_414.JPG"],
      details: {
        manufacturer: "ETA (Swiss Made)",
        modelReference: "955.414",
        type: "Quartz",
        battery: "371",
        jewels: "7 (Seven) Jewels ",
        functions: "Date, GMT, Hours, Minutes, Seconds ",
      },
    },
  },
};

export default details;
