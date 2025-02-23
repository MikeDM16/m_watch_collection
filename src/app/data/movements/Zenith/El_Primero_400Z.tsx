import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ZENITH_EL_PRIMERO_400Z: Caliber = {
  // Title
  title: "Zenith caliber El Primero 400",

  //Description
  description:
    "The Zenith El Primero 400Z is a renowned automatic chronograph movement known for its precision and innovation.\n\
  Introduced in the late 1960s, it was one of the first automatic chronograph movements, making it a significant milestone in horological history.\n\
  \n\
  The El Primero 400Z operates at a high frequency of 36,000 vibrations per hour (vph), allowing for a remarkable accuracy. \n\
  This high beat rate is a defining characteristic of the El Primero series and the Zenith chronographs.",
  // UsefullLinks
  usefullLinks: {
    "WatchBase 400Z": "https://watchbase.com/zenith/caliber/el-primero-400",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Zenith/El_Primero_400Z/El_Primero_400Z_0.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_400Z/El_Primero_400Z_2.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_400Z/El_Primero_400Z_3.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_400Z/El_Primero_400Z_4.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_400Z/El_Primero_400Z_5.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_400Z/El_Primero_400Z_6.JPG",
    "public/assets/Images/Movements/Zenith/El_Primero_400Z/El_Primero_400Z_1.JPG",
  ],

  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ZENITH,
    // ModelReference
    modelReference: "El Primero 400",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_36600,
    // Jewels
    jewels: JewelsNumberEnum.J_31,
    // Reserve
    reserve: ReserveHoursEnum.R_50,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds, Chronograph, Column wheel, Small Seconds",
    // Battery
    battery: undefined,
  },
};

export default ZENITH_EL_PRIMERO_400Z;
