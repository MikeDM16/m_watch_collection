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
  title: "1958 Tissot Nuevo Horizonte Cross-Hair",
  sliderImages: [
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4717.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4718.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4719.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4720.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4721.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4723.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4724.JPG",

    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4790.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4792.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4793.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4794.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4795.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4796.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4798.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4799.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4801.JPG",

    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4725.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4726.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4727.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4728.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4729.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4730.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4731.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4732.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4735.JPG",
    "public/assets/Images/Tissot/1958_Tissot_Nuevo_Horizonte_27B21/IMG_4736.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      "Movement with production number 4231033, dating the watch back to 1958",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.NUEVO_HORIZONTE,
      catalogueReference: "50052-1",
      productionYear: "1958",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "7 mm",
      material: "Stainless Steel - Gold Plated 20 \u339B",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.TISSOT_27B_21,
  },
};

export default details;
