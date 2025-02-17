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
import { ZenithBrandSeries } from "./ZenithBrandSeries";

const details: WatchDetails = {
  title: "2005 Zenith El Primero Port Royal V",
  sliderImages: [
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4261.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4262.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4263.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4265.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3740.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3741.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3742.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3744.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4608.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4609.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4610.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4611.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4612.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4613.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4614.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4615.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4616.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4206.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4650.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4651.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4652.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4654.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4656.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4657.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4627.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4628.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4629.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4630.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4631.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4632.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4633.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4634.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4635.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4636.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4637.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4638.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4639.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4640.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4641.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4642.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4643.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4647.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4648.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4617.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4618.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4619.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4620.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4621.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4622.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4623.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4624.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4625.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4626.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4252.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4253.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4254.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4255.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4256.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4257.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4258.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4259.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4198.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4199.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4200.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4201.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4367.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4368.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4366.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_4369.JPG",
  ],

  technicalData: {
    features: ["Date", "Automatic Chronograph"],

    information: {
      brand: BrandsEnum.ZENITH,
      series: ZenithBrandSeries.EL_PRIMERO,
      catalogueReference: "Port Royal V - 01/02.0451.400",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "40 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ZENITH_EL_PRIMERO_400Z,
  },
};

export default details;
