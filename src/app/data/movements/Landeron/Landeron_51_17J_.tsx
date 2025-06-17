import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const Landeron_51_17J: Caliber = {
  // Title
  title: "Landeron 51",
  //Description
  description:
    "The Landeron 51 is a cam-switching chronograph movement produced by Landeron in the 1950s",
  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Landeron/Landeron_51_17J/Landeron_51_17J_2.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_51_17J/Landeron_51_17J_1.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_51_17J/Landeron_51_17J_3.JPG",
    "public/assets/Images/Movements/Landeron/Landeron_51_17J/Landeron_51_17J_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.LANDERON,
    // ModelReference
    modelReference: "51",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Minutes, Sub Seconds at 9 o'clock, 30 minutes Chronograph",
    // Battery
    battery: undefined,
  },
};

export default Landeron_51_17J;
