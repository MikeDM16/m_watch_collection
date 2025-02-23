import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const SELLITA_SW200: Caliber = {
  // Title
  title: "ETA 2824",
  //Description
  description:
    "Sellita is a Swiss movement manufacturer that has a history of producing movements that are based on or inspired by ETA movements.\n\
  The Sellita SW200 is a diret competitor to the ETA 2824-2, from whom shares a lot of similaraties. \n\
  Introduced around 2012, the SW200-1 is an updated version of the initial SW200 caliber.\n",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Sellita/SW200/SW200_3.JPG",
    "public/assets/Images/Movements/Sellita/SW200/SW200_4.JPG",
    "public/assets/Images/Movements/Sellita/SW200/SW200_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.SELLITA,
    // ModelReference
    modelReference: "SW200-1",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_26,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default SELLITA_SW200;
