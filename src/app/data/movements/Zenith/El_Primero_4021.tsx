import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ZENITH_EL_PRIMERO_4021: Caliber = {
  // Title
  title: "Zenith caliber El Primero 4021",

  //Description
  description:
    "The Zenith El Primero 4021 is a automatic chronograph movement  movement with power reserve display.\n\
  \n\
  The El Primero 4021 operates at a high frequency of 36,000 vibrations per hour (vph), allowing for a remarkable accuracy. \n\
  This high beat rate is a defining characteristic of the El Primero series and the Zenith chronographs.",
  // UsefullLinks
  usefullLinks: {
    "WatchBase 4021": "https://watchbase.com/zenith/caliber/el-primero-4021",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Zenith/El_Primero_4021/El_Primero_4021_0.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_4021/El_Primero_4021_1.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_4021/El_Primero_4021_2.JPG",
  ],

  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ZENITH,
    // ModelReference
    modelReference: "El Primero 4021",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_36600,
    // Jewels
    jewels: JewelsNumberEnum.J_39,
    // Reserve
    reserve: ReserveHoursEnum.R_50,
    // Functions
    functions:
      "Hours, Minutes, Sweep Seconds, Chronograph, Column wheel, Small Seconds, Power Reserve Indicator",
    // Battery
    battery: undefined,
  },
};

export default ZENITH_EL_PRIMERO_4021;
