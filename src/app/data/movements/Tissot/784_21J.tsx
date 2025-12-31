import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const TISSOT_784: Caliber = {
  // Title
  title: "Tissot 784-1",

  //Description
  description:
    "In-house Tissot movement produced around 1965 until 1972. \n" +
    "Family references:\n" +
    "  - 781: manual wind\n" +
    "  - 782: manual wind, date\n" +
    "  - 783 (785): automatic\n" +
    "  - 784 (786): automatic, date\n" +
    "  - 787: manual wind, 24h, date\n" +
    "  - 788 (798): automatic, 24h, date\n" +
    "  - 791: manual wind, no second\n" +
    "  - 792: manual wind, date, no second\n" +
    "  - 793: manual wind, day, date, no second\n" +
    "  - 794 (796): automatic, day, date\n" +
    "  - 884: like 784-2, but polymide bearings\n" +
    "  - 894: like 794, but polymide bearings\n" +
    "\nMain features:\n" +
    '  - Suffix "-1": new Incabloc, date jumper with long hole for date change by forth-and back setting. \
                   Therefore, it allows quick date set, by changing around 21:30-24h. \n' +
    "  - Suffix -2: modified barrel arbor and bridge\n",

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
