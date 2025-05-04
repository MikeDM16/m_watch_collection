import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2783: Caliber = {
  // Title
  title: "ETA 2783",
  //Description
  description:
    "The ETA 2783, which debuted around 1974, is a direct relative of the caliber family of the ETA 2824.\n\
    The main difference is at the escapement system: The ETA 2783 runs at 21600 A/h while the ETA 2824 runs at 28800 A/h and uses the ETAChron fine regulator.\n\n\
    Movements beating at 21600 A/h:\n\
    - 2750 / 2770, 2776: no date\n\
    - 2752 / 2772: date\n\
    - 2753 / 2773: date, precision regulator\n\
    - 2758 / 2778: day, date\n\
    - 2759 / 2779: day, date, precision regulator\n\
    - 2761 / 2781: quick set date, high\n\
    - 2762 / 2782: quick set date\n\
    - 2763 / 2783: quick set date\n\
    - 2763-F6 / 2783-F6: quick set date, digital\n\
    - 2768 / 2788: day, quick set date\n\
    - 2769 / 2789: quick set day and date\n\
    - 2769-1 / 2789-1: quick set day and date, double-language\n\
    \n\n\
    Movements beating at 28800 A/h:\n\
    - 2751 / 2771: no date\n\
    - 2754 / 2774: date\n\
    - 2760 / 2780: day, date\n\
    - 2764 / 2784: quick set date\n\
    - 2790 : quick set day and date\n\
    - 2790-1: quick set day and date, double-language\n\
    - 2791: quick set date, high",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2783/ETA_2783_4.JPG",
    "public/assets/Images/Movements/ETA/ETA_2783/ETA_2783_5.JPG",
    "public/assets/Images/Movements/ETA/ETA_2783/ETA_2783_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_2783/ETA_2783_6.JPG",
    "public/assets/Images/Movements/ETA/ETA_2783/ETA_2783_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2783",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_2783;
