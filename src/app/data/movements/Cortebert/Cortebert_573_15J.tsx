import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const CORTEBERT_573: Caliber = {
  // Title
  title: "Cortébert Cal. 573",
  //Description
  description:
    "The Cortébert 573 is a 9¾''' (22 mm) manual-wind movement with small seconds and Incabloc shock protection, made around 1942.\n" +
    "It belongs to Cortébert's 571-665 series, and Cortébert also supplied it to other brands, including Zodiac and Glycine.\n\n" +
    "Variants:\n" +
    "- 571, 673: 10½'''\n" +
    "- 575, 583, 665: 10½''', higher or bigger barrel\n" +
    "- 577, 581, 661: 9¾''', higher or different bridge layout",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Cortebert 573": "https://ranfft.org/caliber/2032-Cortebert-573",
  },
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/Cortebert/Cortebert_573/Cortebert_573_1.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.CORTEBERT,
    // ModelReference
    modelReference: "Cal. 573",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_37,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default CORTEBERT_573;
