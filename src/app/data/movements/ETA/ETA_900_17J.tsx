import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_900: Caliber = {
  // Title
  title: "ETA 900",
  //Description
  description:
    "Description\n\
  - 900: 10.5, sub second \n\
  - 901: 10.5, sweep second \n\
  - 930: 11.5, sub second \n\
  - 932: 11.5, sweep second \n",
  // UsefullLinks
  usefullLinks: {
    "Emmy Watch ETA 900": "https://www.emmywatch.com/db/movement/eta--900/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_900/ETA_900_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_900/ETA_900_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "Cal. 900",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default ETA_900;
