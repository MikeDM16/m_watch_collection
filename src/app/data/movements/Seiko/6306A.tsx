import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const SEIKO_6306A: Caliber = {
  // Title
  title: "Seiko 6306A",
  //Description
  description:
    "In-house Seiko movement produced from around 1976 until 1981. \n" +
    "The cal. 6306 movement has 21 jewels and runs at 21,600 A/h. \
                          It hacks and has a quickset day/date calendar mechanism with a Japanese/English day wheel \n \n" +
    "The 6306 divers are much rarer to find since they were Japan-only models that use a 21 jewels \
                           hackable movement (compared to the 17 jewels non-hacking movements in the 6309s). \n" +
    "From the serial number, the watch dates to August 1976, beeing assembled in the first year of the model release.",

  // UsefullLinks
  usefullLinks: {},

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Seiko/6306A/6306A_1.JPG",
    "public/assets/Images/Movements/Seiko/6306A/6306A_2.JPG",
    "public/assets/Images/Movements/Seiko/6306A/6306A_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.SEIKO,
    // ModelReference
    modelReference: "6306",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_21,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Day, Date, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default SEIKO_6306A;
