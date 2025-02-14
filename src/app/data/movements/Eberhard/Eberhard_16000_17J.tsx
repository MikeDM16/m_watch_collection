import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const EBERHARD_16000_17J: Caliber = {
  // Title
  title: "Eberhard 16000",
  //Description
  description:
    "The Eberhard 1600 (or 16000) was produced exclusively for Eberhars by Valjoux. \
  \nBased on the Valjoux 65 chronograph caliber, the 1600 is a single pusher cronograph. \
  \n-The upper pusher controls the cronograph in a single pusher style (Start - Stop - Reset) \
  \n-The lower pusher, is not a button bur rather a slider, that allows to lock the cronograpg and perform the Stop - Continue operations without reseting the cronograph. \
  \n\nProduced from around 1935 until 1950. Later replaced by the Eberhard 14000 caliber. ",
  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Landeron/Landeron_48_17J/Landeron_48_17J_3.JPG",
    "public/assets/Images/Movements/Eberhard/Eberhard_16000/Eberhard_16000_3.JPG",
    "public/assets/Images/Movements/Eberhard/Eberhard_16000/Eberhard_16000.JPG",
    "public/assets/Images/Movements/Eberhard/Eberhard_16000/Eberhard_16000_1.JPG",
    "public/assets/Images/Movements/Eberhard/Eberhard_16000/Eberhard_16000_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.EBERHARD,
    // ModelReference
    modelReference: "1600 (Or 16000)",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions: "Minutes, Sweep Seconds at 9 o'clock, 30 minutes Chronograph",
    // Battery
    battery: undefined,
  },
};

export default EBERHARD_16000_17J;
