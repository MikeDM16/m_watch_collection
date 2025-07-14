import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const UNIVERSAL_GENEVE_262_17J: Caliber = {
  // Title
  title: "Universal Geneve Cal. 262",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {
    "Ranfft UG 262": "https://ranfft.org/caliber/10399-Universal-262",
    "EmmyWatch UG 262": "https://www.emmywatch.com/db/movement/universal_geneve--262/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Universal_Geneve/Universal_Geneve_262/UG_262_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.UNIVERSAL_GENEVE,
    // ModelReference
    modelReference: "Cal. 262",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds at 6 o'clock sub-dial",
    // Battery
    battery: undefined,
  },
};

export default UNIVERSAL_GENEVE_262_17J;
