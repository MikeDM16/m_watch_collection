import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const Landeron_48_17J: Caliber = {
  // Title
  title: "Landeron 51",
  //Description
  description:
    "The Landeron Cal. 48 is one of a family of chronograph movements produced by Landeron from 1937 through the 1970s. \n\
  Unlike many 2-button chronograph movements, the stop function is activated by the reset button rather than the start button. \n\
  Therefore, on many Cal. 48 family movements from Landeron, the buttons function as follows:\n\
  \t - 2:00 Start Chronograph\n\
  \t - 4:00 Stop/Reset Chronograph\n",
  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Landeron/Landeron_48_17J/Landeron_48_17J_3.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_48_17J/Landeron_48_17J_2.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_48_17J/Landeron_48_17J_1.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_48_17J/Landeron_48_17J_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.LANDERON,
    // ModelReference
    modelReference: "48",
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

export default Landeron_48_17J;
