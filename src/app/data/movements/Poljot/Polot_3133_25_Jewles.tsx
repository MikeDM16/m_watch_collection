import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const POLJOT_3133_25J: Caliber = {
  // Title
  title: "Eberhard 16000",
  //Description
  description:
    "In the 1970s, Valjoux sold the chronograph caliber 7734 patent and machinery to the USSR. \
    The Russian factory Poljot then used this rigths to produce the chronograph movement 3133. \
    Most of the parts of the Poljot 3133 are identical to the Valjoux 7734.\n\
    Different from the original ETA-Valjoux 7734 movement, all chronograph related gears run in jewels, and the Glucydur balance swings in a shock protection system that was developed by Poljot. \n\
    The balance was modified to a smaller diameter that makes the 3133 beating at a higher 21,600H/h. (ETA 7734 runs runs at 18.000 vph). \n\
    The Russian caliber is renowned for being robust, precise and reliable.",
  // UsefullLinks
  usefullLinks: {
    "17Jewels Poljot 3133": "https://17jewels.info/movements/p/poljot/poljot-3133/",
    "CaliberCorner Poljot 3133": "https://calibercorner.com/poljot-caliber-p3133/",
  },

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Landeron/Landeron_48_17J/Landeron_48_17J_3.JPG",
    "public/assets/Images/Movements/Poljot/Poljot_3133/Poljot_3133_1.JPG",
    "public/assets/Images/Movements/Poljot/Poljot_3133/Poljot_3133_1.JPG",
    "public/assets/Images/Movements/Poljot/Poljot_3133/Poljot_3133_1.JPG",
    "public/assets/Images/Movements/Poljot/Poljot_3133/Poljot_3133_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.POLJOT,
    // ModelReference
    modelReference: "3133",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions:
      "Hours, Minutes, Central Chronograph seconds, 9 o'clock seconds subdial, 3 o'clock 30 minutes subdial, 6 o'clock 24 hour subdial, date at 4 o'clock",
    // Battery
    battery: undefined,
  },
};

export default POLJOT_3133_25J;
