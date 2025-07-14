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

const details: WatchDetails = {
  title: "1950 Cuervo y Sobrino Historiador Habana",
  sliderImages: [
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2682.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2684.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2685.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2686.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2687.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2688.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2689.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2690.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2691.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2692.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2693.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2694.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2695.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2670.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2671.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2672.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2673.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2675.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2676.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2677.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2678.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2679.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2680.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2681.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2696.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2697.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2698.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2699.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2700.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2701.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2702.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2703.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2704.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2705.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2711.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2712.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2713.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2714.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2715.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2716.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2717.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2718.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2707.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2708.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2709.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2710.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANIQUE_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.CUERVO_Y_SOBRINOS,
      series: "Historiador",
      catalogueReference: "Habana",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Dark Brown",
    },

    movement: MovementsDataDB.LANDERON_159_17J,
  },
};

export default details;
