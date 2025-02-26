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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2019 Tissot PRS 516 Alpine Limited Edition 444/516",
  sliderImages: [
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9161.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9162.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9163.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9164.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9168.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9169.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9170.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9171.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9172.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9174.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9176.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9179.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9180.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9182.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9184.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9189.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9190.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9191.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9192.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9193.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9195.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9196.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9197.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9198.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9199.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9200.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9201.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9202.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9203.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9204.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9205.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9206.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9207.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9208.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9209.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9210.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9212.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9213.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9235.JPG",

    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9246.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9247.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9248.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9249.JPG",

    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9252.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9254.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9255.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9259.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9260.JPG",

    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9236.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9237.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9238.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9239.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9240.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9241.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9242.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9243.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9244.JPG",
    "public/assets/Images/Tissot/2019_Tissot_PRS_516_Alpine_Edition/IMG_9245.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRS_516,
      catalogueReference: "Alpine Limited Edition 444/516 (T100427AAL18)",
      productionYear: "2019",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "45 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Carbon Fiber",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Leather Racing style bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "22 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.ETA_A05_H31_27,
  },
};

export default details;
