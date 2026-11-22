import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const CYMA_012: Caliber = {
  // Title
  title: "Cyma Cal. 012",
  //Description
  description:
    "Cyma 012 is a 10½-ligne (23.7 mm) round hand-wound hunter calibre from around 1925, with small seconds. " +
    "It was built with 7 or 15 jewels. Ranfft also records the family supplied to Alpina, as the Alpina 751 (Cyma 022).\n\n" +
    "Family (hunter / open face):\n" +
    "- 010 / 011: three train cocks\n" +
    "- 012, 022 / 013: two train cocks\n" +
    "- suffix K: Cymaflex shock protection",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Cyma 012": "https://ranfft.org/caliber/2085-Cyma-012",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Cyma/Cyma_012_15_jewels/Cyma_012_01.JPG",
    "public/assets/Images/Movements/Cyma/Cyma_012_15_jewels/Cyma_012_02.JPG",
    "public/assets/Images/Movements/Cyma/Cyma_012_15_jewels/Cyma_012_03.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.CYMA,
    // ModelReference
    modelReference: "Cal. 012",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default CYMA_012;
