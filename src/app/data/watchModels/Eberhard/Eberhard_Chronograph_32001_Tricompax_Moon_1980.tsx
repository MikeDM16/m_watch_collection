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
import { EberhardBrandSeries } from "./EberhardBrandSeries";

const details: WatchDetails = {
  title: "1980 Eberhard 32001 Tricompax Moon Phase Valjoux 88",
  sliderImages: [
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5682.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5685.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5680.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5681.JPG",

    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5653.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5654.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5656.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5658.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5659.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5660.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5661.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5662.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5663.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5664.JPG",

    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5626.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5627.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5628.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5629.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5632.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5633.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5635.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5638.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5639.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5640.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5641.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5642.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5643.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5644.JPG",

    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5665.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5666.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5667.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5668.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5669.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5670.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5671.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5672.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5673.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5674.JPG",

    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5675.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5676.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5677.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5678.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_Ref_32001_TriCompax_Moon_Phase/IMG_5679.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.SOLID_GOLD,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.EBERHARD,
      series: EberhardBrandSeries.RE_EDITION,
      catalogueReference: "32001-132 (80/100 Replica of the 1940s model)",
      productionYear: "1980",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "13 mm",
      material: "Solid Gold 18K (0.750)",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.PERPETUAL,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "16 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.VALJOUX_726_88_17J,
  },
};

export default details;
