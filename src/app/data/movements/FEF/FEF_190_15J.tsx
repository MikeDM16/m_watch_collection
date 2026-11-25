import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const FEF_190: Caliber = {
  // Title
  title: "FEF (Fabrique d'Ébauches de Fleurier) Cal. 190",
  //Description
  description:
    "FEF 190 is a 10½-ligne (23.7 mm) hand-wound movement by the Fabrique d'Ébauches de Fleurier, introduced around 1945. " +
    "A typical 1940s calibre: 15 jewels in all the important bearings, small seconds at 6 and no shock protection.\n\n" +
    "Variants:\n" +
    "- 190-1: sweep seconds\n" +
    "- 210: 11½''', sub seconds\n" +
    "- 210-1: 11½''', sweep seconds",
  // UsefullLinks
  usefullLinks: {
    "Ranfft FEF 190": "https://ranfft.org/caliber/4734-FEF-190",
    "17jewels FEF 190": "https://17jewels.info/movements/f/fef/fef-190/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FE/FE_190/FE_190_1.JPG",
    "public/assets/Images/Movements/FE/FE_190/FE_190_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FEF,
    // ModelReference
    modelReference: "Cal. 190",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default FEF_190;
