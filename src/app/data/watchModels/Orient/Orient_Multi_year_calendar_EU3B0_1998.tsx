import { MovementsDataDB } from "../../movementsData";
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

const details: WatchDetails = {
  title: "1998 Orient Multi Year Calendar",
  sliderImages: [
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5730.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5731.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5732.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5733.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5734.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5735.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5736.JPG",

    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5754.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5755.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5756.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5757.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5758.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5759.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5760.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5761.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5762.JPG",

    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5743.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5744.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5745.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5746.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5747.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5748.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5749.JPG",

    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5737.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5738.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5739.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5740.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5741.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5742.JPG",

    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5750.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5751.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5752.JPG",
    "public/assets/Images/Orient/1998_Orient_Multi_Year_Calendar_EU03B0/IMG_5753.JPG",
  ],

  technicalData: {
    features: ["Automatic"],

    information: {
      brand: BrandsEnum.ORIENT,
      series: "Multi Year Calendar",
      catalogueReference: "EU03-B0 CA",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "42 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Compass bezel",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.DAY_DATE_SUBDIALS,
    },

    bracelet: {
      material: "Stainless Steel Links",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ORIENT_46D40,
  },
};

export default details;
