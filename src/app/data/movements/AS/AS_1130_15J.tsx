import { JewelsNumberEnum } from "@/app/enums/caliberEnums";

import type { Caliber } from "../../caliberTypes";
import AS_1130 from "./AS_1130_17J";

// Same caliber as AS_1130 (description and links are shared); only the jewel count differs.
// The gallery leads with the 15-jewel movement's own photo, then the shared AS 1130 set.
const AS_1130_15J: Caliber = {
  ...AS_1130,
  // Title
  title: "A. Schild 1130 (15 Jewels)",
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/AS/AS_1130/AS_1130_15J_08.JPG",
    ...AS_1130.sliderImages,
  ],
  // Details
  details: {
    ...AS_1130.details,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
  },
};

export default AS_1130_15J;
