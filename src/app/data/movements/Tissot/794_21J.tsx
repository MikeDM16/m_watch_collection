import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const TISSOT_794: Caliber = {
  // Title
  title: "Tissot 794-1",

  //Description
  description:
    "In-house Tissot movement produced around 1965 until 1972. \n" +
    "Incabloc, date jumper with long hole for date change by forth-and back setting.\
  Therefore, it allows quick date set, by changing around 21:30-24h.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Tissot 794": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Tissot_794",
    "Vintage technical Information from Tissot": "../Files/344_Tissot 2451, 2461, 2481, 2531.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/794/794_1.JPG",
    "public/assets/Images/Movements/Tissot/794/794_2.JPG",
    "public/assets/Images/Movements/Tissot/794/794_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "794",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_21,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Day/Date, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_794;
