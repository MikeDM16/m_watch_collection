import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_1370: Caliber = {
  // Title
  title: "Omega Cal. 1370",
  //Description
  description:
    "Vintage Omega quartz eletronic movement. \n\n" +
    "Hours are set without altering the minutes hand. The hour hand is set by pulling the crown out and turn it in the desire direction. The hour hand jumps in 1h intervals. \n\n" +
    "Minutes are set by pressing the crown inside by at least 5 seconds. Release it and press it again immediately. \
              The second hands begins to turn rapidly, moving the minute hand along the movement. \
              Stop pressing when the minute hand is under the desider minute. \n\n" +
    "Seconds are set by pressing the crown inside. This will stop the seconds hand movement. \
              Release the crown when the time matches the current seconds hand position.\n\n\
              Also used by several Tissot watches as Tissot 2031 movement.",

  // UsefullLinks
  usefullLinks: {
    "Vintage Instructions Manual from Omega": "../Files/omega_1370.pdf",
    "Technical Information from Omega": "../Files/omega_1370_parts.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_1370/omega_1370_1.JPG",
    "public/assets/Images/Movements/Omega/cal_1370/omega_1370_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1370",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_7,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date at 3 o'clock, Hours, Minutes, Seconds",
    // Battery
    battery: "392",
  },
};

export default OMEGA_1370;
