import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_2892_2_21J: Caliber = {
  // Title
  title: "ETA 2892",
  //Description
  description:
    "High quality, extremely compact ETA automatic movement with Bi-diretional winding. \n \n" +
    "It has been in production since 1983 until around 2000. \n\n" +
    "The 2892A2 has been widely used in the watch industry for many years as a base for brand specific caliber references. For example: \n" +
    "- Omega used this movement on calibers 1120, 1128 (GMT), and 2500\n" +
    "- Longines L619.2 and L888.4\n" +
    "- IWC 37524, 30110, and 30120\n" +
    "- TAG Heuer Calibre 7\n" +
    "- Maurice LaCroix Calibre ML-129\n" +
    "- Ball Watch Company: RR1101, RR1201 and RR1801\n" +
    "- Breitling Automatic calibers\n" +
    "- Sellita caliber SW300-1",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2892/ETA_2892_2_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_2892/ETA_2892_2_4.JPG",
    "public/assets/Images/Movements/ETA/ETA_2892/ETA_2892_2_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2892/ETA_2892_2_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2892-A2",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_21,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Day, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default ETA_2892_2_21J;
