import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const BREITLING_B40_38J: Caliber = {
  // Title
  title: "Breitling B40",
  //Description
  description:
    "Breitling B40 is a hybrid movement combining an automatic ETA 2892-A2 with a custom chronograph module. \n\
  The chronograph is a Kelek cal. 10000, made especially for Breitling with 3-hour/10-minute chronograph registers. Kelek made the movements based on a highly modified ebauche from ETA.",
  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Breitling/Breitling_B40_38J/Breitling_B40_38J_1.JPG",
    "public/assets/Images/Movements/Breitling/Breitling_B40_38J/Breitling_B40_38J_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.BREITLING,
    // ModelReference
    modelReference: "B40",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_38,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Minutes, Sub Seconds at 3 o'clock, 3 hours/10 minutes chronograph registers",
    // Battery
    battery: undefined,
  },
};

export default BREITLING_B40_38J;
