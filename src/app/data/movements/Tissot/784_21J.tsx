import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const TISSOT_784: Caliber = {
  // Title
  title: "Tissot 784-1",

  //Description
  description:
    "In-house Tissot movement produced around 1965 until 1972. \n" +
    'Suffix "-1": new Incabloc, date jumper with long hole for date change by forth-and back setting. \
                   Therefore, it allows quick date set, by changing around 21:30-24h. \n',
  // UsefullLinks
  usefullLinks: {
    "Ranfft Tissot 784-1":
      "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Tissot_784_1",
    "Vintage technical Information from Tissot": "../Files/2789_Tissot 781,782,783,784.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/784/784_1_1.JPG",
    "public/assets/Images/Movements/Tissot/784/784_1_2.JPG",
    "public/assets/Images/Movements/Tissot/784/784_1_3.JPG",
    "public/assets/Images/Movements/Tissot/784/784_1_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "784-1",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_21,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_784;
