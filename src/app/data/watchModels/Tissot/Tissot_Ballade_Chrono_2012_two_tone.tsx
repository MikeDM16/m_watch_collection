import { MovementsDataDB } from "../../movementsData";
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
  title: "2012 Tissot Ballade Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4581.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4582.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4583.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4584.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4585.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4586.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4587.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4588.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4589.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4590.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4591.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4592.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4593.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4594.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4595.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4596.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4597.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4600.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4601.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4603.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4604.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4606.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4607.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Ballade_Chrono_Two_Tone/IMG_4608.JPG",
  ],

  technicalData: {
    features: ["Date", "Chronograph", "30 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: "Ballade",
      catalogueReference: "C288/388",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Coin Detail bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.WEB_TEXTURE_DIAL,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "18 mm",
      color: "Polished",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
