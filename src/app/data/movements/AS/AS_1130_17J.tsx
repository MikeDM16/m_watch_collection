import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const AS_1130: Caliber = {
  // Title
  title: "A. Schild 1130",
  //Description
  description:
    'AS 1130 base movement. \n\
    It was also used in some prestigious brand, as for instance the caliber Girard-Perregaux 27 or the Alpina 652.\n\
    This movement is known as the Wehrmachtswerk, which translates to "army movement", as it was deeply used in German military watches.',
  // UsefullLinks
  usefullLinks: {
    "Ranfft AS 1130": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&0&2uswk&AS_1130",
    "AS 1130 Parts Catalogue": "../Files/2448_AS 1130.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/AS/AS_1130/AS_1130_3.JPG",
    "public/assets/Images/Movements/AS/AS_1130/AS_1130_4.JPG",
    "public/assets/Images/Movements/AS/AS_1130/AS_1130_5.JPG",
    "public/assets/Images/Movements/AS/AS_1130/AS_1130_6.JPG",
    "public/assets/Images/Movements/AS/AS_1130/AS_1130_7.JPG",
    "public/assets/Images/Movements/AS/AS_1130/mov_1130.PNG",
    "public/assets/Images/Movements/AS/AS_1130/mov_1130-GP.PNG",
    "public/assets/Images/Movements/AS/AS_1130/mov_1130-GP2.PNG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.AS,
    // ModelReference
    modelReference: "Cal. 1130",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default AS_1130;
