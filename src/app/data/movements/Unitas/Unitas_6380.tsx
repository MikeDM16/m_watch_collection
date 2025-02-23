import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const UNITAS_6380: Caliber = {
  // Title
  title: "Unitas Cal. 6380",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Unitas/Unitas_6380/Unitas_6380_0.JPG",
    "public/assets/Images/Movements/Unitas/Unitas_6380/Unitas_6380_1.JPG",
    "public/assets/Images/Movements/Unitas/Unitas_6380/Unitas_6380_2.JPG",
    "public/assets/Images/Movements/Unitas/Unitas_6380/Unitas_6380_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.UNITAS,
    // ModelReference
    modelReference: "6380",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default UNITAS_6380;
