import { CaliberBrandsEnum, FrequencyEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const DARWIL_7041: Caliber = {
  // Title
  title: "Darwil Cal. 7041",
  //Description
  description:
    "Darwil 7041 is Darwil's own number for a rebadged FHF 821, a flat 11½-ligne (25.55 mm, 3.55 mm high) " +
    "hand-wound movement by the Fabrique d'Horlogerie de Fontainemelon, based on the FHF 82. " +
    "It has small seconds at 6 and no shock protection, a common trade-off in the 1960s to keep a movement extra flat.\n" +
    "Darwil also numbered the FHF 821 as the Darwil 7066.",
  // UsefullLinks
  usefullLinks: {
    "17jewels FHF 821": "https://17jewels.info/movements/f/fhf/fhf-821/",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.DARWIL,
    // ModelReference
    modelReference: "Cal. 7041",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default DARWIL_7041;
