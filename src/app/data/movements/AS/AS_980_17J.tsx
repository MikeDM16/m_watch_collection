import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const AS_980: Caliber = {
  // Title
  title: "A. Schild 980",
  //Description
  description:
    "The A. Schild 980 is an 8¾''' (19.7 mm) manual-wind movement with small seconds, launched in 1935 and made until 1967.\n" +
    "It belongs to A. Schild's 970–1828 series, whose parts are interchangeable; versions were made with 7, 15 or 17 jewels.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft AS 980": "https://ranfft.org/caliber/1093-AS-980",
    "17jewels ETA 980": "https://17jewels.info/movements/e/eta/eta-980/",
    "EmmyWatch ETA 980": "https://www.emmywatch.com/db/movement/eta--980/",
  },
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/AS/AS_980/AS_980_1.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.AS,
    // ModelReference
    modelReference: "Cal. 980",
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

export default AS_980;
