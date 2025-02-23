import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { WatchDetails } from "../../watchDetails";
import { SeikoBrandSeries } from "./SeikoBrandSeries";

const details: WatchDetails = {
  title: "1992 Seiko 6M25 Multi-Function Chronograph",
  description: {
    text:
      'Along the 1980s and 1990s, Seiko keeps up with the "Sports 150" series of watches. \n' +
      "Most of those models used the well know Seiko 7T32, which back then was one of the most reliable and durable movements assemble by Seiko. \n \n" +
      "This Seiko model, however, was one of the first models that use another great movement from Seiko, based on the 6M caliber. \n" +
      "This caliber, along with the 8M, became known as the Dancing hand's movement and were manufactured from the late 1980s to the early 1990s. \n \n" +
      'These calibers were also used in the  "Olimpic" and "Age of Discovery" series, receiving the names "Intelligent quartz" or "Intelligent calendar" \
                as they were a quartz movement with at least  7 features. \n \n' +
      "The functions are displayed on the subdial at the 6 O'Clock position and changed by turning the crown - clockwise or counterclockwise. \n" +
      "The watch case itself was made in a military style, with the multi-function pushers assemble in the left side of the case. \n \n" +
      'All three hands are also independently movable. To start the  "dancing hands", when in Time mode (the subdial indicator should bracket "Time") the demo dancing hands mode can be activated by pressing both pushers for 2 seconds. \n' +
      "All three hands are independently moved all over the dial and this mode stops after 2 min for the battery save or when the 10 o'clock pusher is depressed. \n \n" +
      "Other functions are a 1/10 sec. chronograph, alarm, countdown timer and pointer calendar, all operated through rotating the crown (no need to pull it out) and the two pushers. \n" +
      "<b>Time mode</b>: shows regular time, it can be set when crown is pulled and the 10 o'clock pusher is depressed (for minutes), the seconds hand hacks to zero so time can be set precisely. The 8 o'clock pusher is used to set the hours. \n" +
      '<b>Chrono mode</b>: turn the crown counter clockwise and all three hands set to zero  (if not read Reset chrono after battery change), when started by upper button, seconds hand "sweeps" back and forth between 12 and 1 o clock, showing 1/10 second intervals, hour and minute hand indicate seconds and minutes \n' +
      "<b>Month/date mode</b>: all three hands point the month of the year, shown on edge of dial \n" +
      "<b>Timer mode</b>: hands can be set to countdown \n" +
      "<b>Set alarm</b> mode: hands can be set to the alarm time \n" +
      "<b>Alarm on</b> mode: alarm is active, deactivated by any buttons  \n" +
      'Interesthing thread on WatchUSeek, to see a huge collection of mint condition 6M/8M Seiko watchs: <a href="https://forums.watchuseek.com/f21/loving-my-quartz-my-entire-seiko-6m-8m-collection-1823162.html"> link </a>	',
    sliderImages: [],
  },
  sliderImages: [
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1819.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1820.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1821.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1822.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1823.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1824.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1825.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1826.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1827.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1828.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1829.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1830.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1831.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1832.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1833.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1834.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1835.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1836.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1837.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1838.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1839.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1840.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1841.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1842.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1843.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1844.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1845.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M25/IMG_1657.JPG",
  ],
  technicalData: {
    features: ["Date", "Chronograph", "Alarm", "150 meters", "Countdown Timer"],

    information: {
      brand: BrandsEnum.SEIKO,
      series: SeikoBrandSeries.SPORTS_150,
      catalogueReference: '6M25-6000 "Dancing Hands"',
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "43 mm",
      thickness: "- mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_150M,
      finishingDetails: "Polished",
      bezel: "Uni-directional bezel, minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.HARDLEX,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Two tone Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Two tone: Grey with Gold details",
    },

    movement: {
      title: "Seiko 6M25",
      description: "",
      usefullLinks: {
        "Instruction manual/specs from Seiko": "../Files/SEIKO_6M25.pdf",
        "Seiko 6M25 Parts Catalogue": "../Files/1623_Seiko6M25A.pdf",
      },
      sliderImages: ["public/assets/Images/Seiko/1992_Seiko_6M25/6M25-cal.JPG"],
      details: {
        manufacturer: "Seiko",
        modelReference: "6M25",
        type: "Quartz",
        battery: "399 / SR 927 W",
        jewels: "9 (Nine) Jewels",
        functions:
          "Hours, minutes, 12 hours chronograph with 1/10 seconds, Date, Alarm, Timer, Month",
      },
    },
  },
};

export default details;
