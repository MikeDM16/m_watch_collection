import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../caliberTypes";

const VACHERON_CONSTANTIN_K1014_17J: Caliber = {
  // Title
  title: "Vacheron Constantin K1014",
  //Description
  description:
    "Following the design from K1001, collapses the five-bridge into three bridges. \n\." +
    "Based on Jaeger-LeCoultre 818",

  // UsefullLinks
  usefullLinks: {
    "Collector Guide Vacheron Constantin Time-Only Movements of the 20th Century":
      "https://www.beyondthedial.com/post/collector-guide-vacheron-constantin-time-only-movements-of-the-20th-century-a-complete-catalog-of-serially-produced-large-format-round-calibers/",
    "EmmyWatch UG 262": "https://www.emmywatch.com/db/movement/universal_geneve--262/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/movements/Vacheron_Constantin/K1014/K1014_1.JPG",
    "public/assets/Images/movements/Vacheron_Constantin/K1014/K1014_2.JPG",
    "public/assets/Images/movements/Vacheron_Constantin/K1014/K1014_3.JPG",
    "public/assets/Images/movements/Vacheron_Constantin/K1014/K1014_4.JPG",
    "public/assets/Images/movements/Vacheron_Constantin/K1014/K1014_5.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VACHERON_CONSTANTIN,
    // ModelReference
    modelReference: "K1014",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Hours, Minutes",
  },
};

export default VACHERON_CONSTANTIN_K1014_17J;
