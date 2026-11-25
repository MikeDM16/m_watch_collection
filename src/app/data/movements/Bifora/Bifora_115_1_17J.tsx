import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const BIFORA_115_1: Caliber = {
  // Title
  title: "Bifora Cal. 115/1",
  //Description
  description:
    "Bifora 115/1 is an 11½-ligne (25.94 mm) German hand-wound movement, introduced in 1967, " +
    "with centre seconds and Bifora-Bishock shock protection. " +
    "The /1 suffix marks lever banking by the cock instead of by pins.\n\n" +
    "Variants:\n" +
    "- 115: base calibre\n" +
    "- 115 (CLD): date\n" +
    "- 115/1 (CLD): date",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Bifora 115/1": "https://ranfft.org/caliber/1237-Bifora-1151",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Bifora/Bifora_115_1/Bifora_115_1_1.JPG",
    "public/assets/Images/Movements/Bifora/Bifora_115_1/Bifora_115_1_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.BIFORA,
    // ModelReference
    modelReference: "Cal. 115/1",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default BIFORA_115_1;
