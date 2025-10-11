import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const VALJOUX_726_88_17J: Caliber = {
  // Title
  title: "Valjoux Cal. 88",
  //Description
  description:
    "Valjoux Cal. 88 VZHCL (“Valjoux Counter Heures Calendrier Lune”) is a hand-winding chronograph movement in the Valjoux 72 family with “triple date” and moon phase. \n\
    It was used in high end watches from 1947 through 1974. Cal. 88 was replaced by Cal. 886 in the 1970s.\n\n\
    Famaly References \n\
    18000 A/h:\n\
    - 23 : base calibre\n\
    - 230: fly back\n\
    - 23C: calendar\n\
    - 72 : hour counter\n\
    - 720: hour counter, fly back\n\
    - 724: hour counter, 24h hand gear\n\
    - 72C: hour counter, calendar\n\
    - 78 : no chronograph, calendar\n\
    - 88 : hour counter, calendar, moon phase\n\
    - 90 : no chronograph, calendar, moon phase\n\
    21600 A/h:\n\
    - 236: base calibre\n\
    - 234: date (window)\n\
    - 235: fly back\n\
    - 237: date (window), fly back\n\
    - 725: hour counter, fly back\n\
    - 726: hour counter\n\
    - 729: hour counter, 24h hand gear\n\
    - 730: hour counter, calendar\n\
    - 886: hour counter, calendar, moon phase",

  // UsefullLinks
  usefullLinks: {
    "Grail Watch Reference Valjoux 726": "https://reference.grail-watch.com/movement/valjoux-726/",
    "Grail Watch Reference Valjoux 88": "https://reference.grail-watch.com/movement/valjoux-88/",
    "Emmy Watch Valjoux 77": "https://www.emmywatch.com/db/movement/valjoux--726/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Valjoux/Valjoux_726_88_17J/Valjoux_726_88_17J_0.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_726_88_17J/Valjoux_726_88_17J_3.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_726_88_17J/Valjoux_726_88_17J_5.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_726_88_17J/Valjoux_726_88_17J_1.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_726_88_17J/Valjoux_726_88_17J_2.JPG",
    "public/assets/Images/Movements/Valjoux/Valjoux_726_88_17J/Valjoux_726_88_17J_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VALJOUX,
    // ModelReference
    modelReference: "88 VZHCL (“Valjoux Counter Heures Calendrier Lune”)",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions:
      "Moon phase, Day, Date and Month Calendar, Hours, Minutes, Sub Seconds at 9 o'clock, Central Chronograph Hands and 12 o'clock 30min Chrono",
    // Battery
    battery: undefined,
  },
};

export default VALJOUX_726_88_17J;
