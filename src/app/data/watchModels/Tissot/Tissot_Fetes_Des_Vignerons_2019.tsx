import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2019 Tissot Fetes Des Vignerons Limited Edition",
  sliderImages: [
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6290.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6291.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6292.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6293.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6294.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6295.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6296.JPG",

    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6255.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6256.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6257.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6258.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6259.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6260.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6261.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6262.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6263.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6264.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6265.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6266.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6267.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6268.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6269.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6270.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6272.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6277.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6278.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6281.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6282.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6284.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6285.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6287.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6288.JPG",

    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6214.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6215.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6216.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6217.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6218.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6219.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6230.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6231.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6232.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6233.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6234.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6243.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6245.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6247.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6249.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6251.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6252.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6253.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6254.JPG",

    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6199.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6200.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6202.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6203.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6204.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6205.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6206.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons/IMG_6208.JPG",
  ],
  saleReport: {
    price: 380,
    date: "26/06/2024",
    url: "https://www.catawiki.com/en/l/85435053-tissot-fetes-des-vignerons-limited-edition-no-reserve-price-men-2019",
  },

  technicalData: {
    features: [featuresEnum.DATE],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_CLASSIC,
      catalogueReference: "Fetes Des Vignerons Ltd. Ed. ",
      productionYear: "2019",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "7 mm",
      material: "Stainless Steel, Rose Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Dark Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "19 mm",
      color: "Brown, Blue and Custom Fabric White",
    },

    movement: MovementsDataDB.ETA_902_101,
  },
};

export default details;
