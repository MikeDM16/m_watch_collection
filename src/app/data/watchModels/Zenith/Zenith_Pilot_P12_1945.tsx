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
import { MovementsDataDB } from "../../movementsData";
import { ZenithBrandSeries } from "./ZenithBrandSeries";

const details: WatchDetails = {
  title: "1945 Zenith Pilot P12",
  sliderImages: [
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4670.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4671.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4672.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4673.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4674.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4675.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4676.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4677.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4678.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4668.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4669.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4666.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4667.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4658.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4659.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4660.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4665.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4662.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4663.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4664.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4684.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4685.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4686.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4687.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4688.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4689.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4690.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4691.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4692.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4694.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4695.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4696.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4697.JPG",

    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4679.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4680.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4681.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4682.JPG",
    "public/assets/Images/Zenith/1945_Zenith_Pilot_P12_4_50/IMG_4683.JPG",
  ],

  technicalData: {
    features: ["Mechanical"],

    information: {
      brand: BrandsEnum.ZENITH,
      series: ZenithBrandSeries.VINTAGE_PILOT,
      catalogueReference: "Pilot P12",
      productionYear: "1945",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "9 mm",
      material: "Gold Plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Salmon",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ZENITH_P_12_4_50,
  },
};

export default details;
