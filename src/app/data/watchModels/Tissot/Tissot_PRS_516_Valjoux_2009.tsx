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
  title: "2009 Tissot PRS 516 Automatic Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5075.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5076.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5077.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5078.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5079.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5080.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5081.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5082.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5083.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_5084.JPG",

    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4517.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4518.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4519.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4520.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4521.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4522.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4523.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4524.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4525.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4526.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4527.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4528.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4529.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4530.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4531.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4532.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4533.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4534.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4535.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4536.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4538.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4540.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4541.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4542.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4543.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4544.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4546.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4547.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4548.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4549.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4550.JPG",
    "public/assets/Images/Tissot/2014_Tissot_PRS_516_Valjoux/IMG_4551.JPG",
  ],

  technicalData: {
    features: ["Date", "Automatic Chronograph", "100 meters", "Screw-in crown", "Tachymeter"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: "PRS 516 Valjoux",
      catalogueReference: "J564/664",
      productionYear: "2009",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Racing style bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "21 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
