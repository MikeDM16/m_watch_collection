import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const TIMEX_M100: Caliber = {
  // Title
  title: "Timex M100",

  //Description
  description:
    "Produced around the 1970s. Know has the 'siwss cheese' movement due the amount of holes in it.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft M100": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?11&ranfft&0&2uswk&Timex_M100",
  },
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/Timex/Timex_M100/Timex_M100.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TIMEX,
    // ModelReference
    modelReference: "M100",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_0,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default TIMEX_M100;
