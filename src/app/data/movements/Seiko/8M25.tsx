import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const SEIKO_8M25: Caliber = {
  // Title
  title: 'Seiko 8M25 "Dancing Hands"',
  //Description
  description:
    'The 8M Caliber family became known as the Dancing hand\'s movement and were manufactured from the late 1980s to the early 1990s. \n\
    These calibers were also used in the  "Olimpic" and "Age of Discovery" series, receiving the names "Intelligent quartz" or "Intelligent calendar" \
    as they were a quartz movement with several complex features. \n\n \
    \
    The functions are displayed on the subdial at the 6 O\'Clock position and changed by turning the crown - clockwise or counterclockwise. \n\
    The watch case itself is made in a military style, with the multi-function pushers assemble in the left side of the case. \n\
    All hands are also independently movable.\
    To start the  "dancing hands", place the subdial selector on the 0 Match Position mode. The demo dancing hands mode can be activated by pressing the upperp usher and stopped with the lower pusher.\n\
    \
    The Dancing hands mode stops after 2 min for battery saving or when manually stopped \n \
    \
    Other functions are a Chronograph, Alarm and Countdown Timer, all operated through rotating the crown (no need to pull it out) and the two pushers. \n\
    - Time mode: Shows regular time, it can be set when the crown is pulled out and the 10 o\'clock pusher is pressed (for minutes). The 8 o\'clock pusher is used to set the hours. \n\
    - Chrono mode: Turn the crown until the chrono Mode. All hands will reset to zero  (if not read Reset chrono after battery change), when started hour and minute hand indicate seconds and minutes. \n\
    - Timer mode: Hands can be set to countdown. First pusher increases the minutes to countdown. \n\
    - Set alarm mode: Hands can be set to the alarm time. \n\
    - Alarm on mode: Alarm is active, deactivated by any other mode. \n',

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Seiko/8M25/8M25_1.JPG",
    "public/assets/Images/Movements/Seiko/8M25/8M25_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.SEIKO,
    // ModelReference
    modelReference: "8M25",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_4,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Alarm, Timer, Chronograpg, Hours, Minutes",
    // Battery
    battery: "370",
  },
};

export default SEIKO_8M25;
