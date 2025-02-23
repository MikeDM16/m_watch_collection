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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2019 Tissot Fetes Des Vignerons Limited Edition",
  sliderImages: [
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7557.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7558.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7559.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7560.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7561.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7562.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7563.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7564.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7565.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7566.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7567.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7568.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7569.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7570.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7571.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7572.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7573.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7574.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7575.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7576.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7577.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7578.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7579.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7580.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7581.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7582.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7583.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7584.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7585.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7586.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7587.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7589.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7590.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7591.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7592.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7593.JPG",
    "public/assets/Images/Tissot/2019_Tissot_Fetes_Des_Vignerons_2/IMG_7594.JPG",
  ],

  technicalData: {
    features: ["Date"],

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
