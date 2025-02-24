import { BraceletInformation, TechnicalData } from "../data/watchDetails";
import { CalendarWatchTypeEnum } from "../enums/calendarWatchTypeEnum";
import { DialMarketsEnum } from "../enums/dialMarketsEnum";
import { featuresEnum } from "../enums/featuresEnum";
import { StrapMaterialEnum } from "../enums/strapMaterialEnum";
import { technicalDataHasFeature } from "../services/brandModelService";

interface DialType {
  DEFAULT: string;
  CALENDAR: string;
  CHRONOGRAPH: string;
}
const dialBackgrounds: Record<string, DialType> = {
  ARABIC: {
    DEFAULT: "/assets/Backgrouds/Details/Dials/Arabic.JPG",
    CALENDAR: "/assets/Backgrouds/Details/Dials/Arabic_Calendar.JPG",
    CHRONOGRAPH: "/assets/Backgrouds/Details/Dials/Arabic_Chronograph.JPG",
  },
  ARABIC_STICKS: {
    DEFAULT: "/assets/Backgrouds/Details/Dials/Arabic_Sticks.JPG",
    CALENDAR: "/assets/Backgrouds/Details/Dials/Arabic_Sticks_Calendar.JPG",
    CHRONOGRAPH: "/assets/Backgrouds/Details/Dials/Arabic_Sticks_Chronograph.JPG",
  },
  ROMAN: {
    DEFAULT: "/assets/Backgrouds/Details/Dials/Roman.JPG",
    CALENDAR: "/assets/Backgrouds/Details/Dials/Roman_Calendar.JPG",
    CHRONOGRAPH: "/assets/Backgrouds/Details/Dials/Roman_Chronograph.JPG",
  },
  ROMAN_STICKS: {
    DEFAULT: "/assets/Backgrouds/Details/Dials/Roman_Sticks.JPG",
    CALENDAR: "/assets/Backgrouds/Details/Dials/Roman_Sticks_Calendar.JPG",
    CHRONOGRAPH: "/assets/Backgrouds/Details/Dials/Roman_Sticks_Chronograph.JPG",
  },
  STICKS: {
    DEFAULT: "/assets/Backgrouds/Details/Dials/Sticks.JPG",
    CALENDAR: "/assets/Backgrouds/Details/Dials/Sticks_Calendar.JPG",
    CHRONOGRAPH: "/assets/Backgrouds/Details/Dials/Sticks_Chronograph.JPG",
  },
};

export function getColumnDialBackgroud(technicalData: TechnicalData) {
  // Roman || Arabic || Stick || Roman and Sticks || Arabic and Sticks
  const markers = technicalData.dial.dialMarkers;
  let dictKey = undefined;
  if (markers == DialMarketsEnum.ARABIC || markers == DialMarketsEnum.BREGUET) {
    dictKey = "ARABIC";
  } else if (markers == DialMarketsEnum.ARABIC_STICKS) {
    dictKey = "ARABIC_STICKS";
  } else if (markers == DialMarketsEnum.ROMAN) {
    dictKey = "ROMAN";
  } else {
    dictKey = "STICKS";
  }

  const calendarFlag = technicalData.dial.calendar != CalendarWatchTypeEnum.WITHOUT;
  const chronoFlag = technicalDataHasFeature(technicalData, featuresEnum.CHRONOGRAPH.name);

  return chronoFlag
    ? dialBackgrounds[dictKey]["CHRONOGRAPH"]
    : calendarFlag
      ? dialBackgrounds[dictKey]["CALENDAR"]
      : dialBackgrounds[dictKey]["DEFAULT"];
}

const casesBackgrounds: Record<string, string> = {
  DIVE_GOLD: "/assets/Backgrouds/Details/Cases/Dive_Gold.JPG",
  DIVE_SS: "/assets/Backgrouds/Details/Cases/Dive_SS.JPG",
  DRESS_GOLD: "/assets/Backgrouds/Details/Cases/Dress_Gold.JPG",
  DRESS_SS: "/assets/Backgrouds/Details/Cases/Dress_SS.JPG",
  GMT_GOLD: "/assets/Backgrouds/Details/Cases/GMT_Gold.JPG",
  GMT_SS: "/assets/Backgrouds/Details/Cases/GMT_SS.JPG",
  TACHYMETER_GOLD: "/assets/Backgrouds/Details/Cases/Tachymeter_Gold.JPG",
  TACHYMETER_SS: "/assets/Backgrouds/Details/Cases/Tachymeter_SS.JPG",
};

export function getColumnCaseBackgroud(technicalData: TechnicalData) {
  const type = technicalDataHasFeature(technicalData, featuresEnum.TACHYMETER.name)
    ? "TACHYMETER"
    : technicalDataHasFeature(technicalData, "GMT")
      ? "GMT"
      : technicalData.case.bezel.includes("minute graduated")
        ? "DIVE"
        : "DRESS";

  const goldFeature = technicalDataHasFeature(technicalData, "gold");
  const searchCaseMaterial = technicalData.case.material.toLowerCase();
  const material = goldFeature || /gold|plated/.test(searchCaseMaterial) ? "GOLD" : "SS";

  return casesBackgrounds[`${type}_${material}`];
}

const braceletsBackgrounds: Record<string, string> = {
  LEATHER_COW_BROWN: "/assets/Backgrouds/Details/Bracelets/Leather_Brown.JPG",
  LEATHER_COW_BLACK: "/assets/Backgrouds/Details/Bracelets/Leather_Black.JPG",
  LEATHER_CROCODILE_BROWN: "/assets/Backgrouds/Details/Bracelets/Leather_Crocodile_Brown.JPG",
  LEATHER_CROCODILE_BLACK: "/assets/Backgrouds/Details/Bracelets/Leather_Crocodile_Black.JPG",
  LEATHER_LIZARD_BROWN: "/assets/Backgrouds/Details/Bracelets/Leather_Lizard_Brown.JPG",
  LEATHER_LIZARD_BLACK: "/assets/Backgrouds/Details/Bracelets/Leather_Lizard_Black.JPG",
  NATO: "/assets/Backgrouds/Details/Bracelets/Nato.JPG",
  RUBBER: "/assets/Backgrouds/Details/Bracelets/Rubber.JPG",
  STAINLESS_STEEL_JUBILEE: "/assets/Backgrouds/Details/Bracelets/SS_Jubilee.JPG",
  STAINLESS_STEEL_PRESIDENT: "/assets/Backgrouds/Details/Bracelets/SS_President.JPG",
  STAINLESS_STEEL_PRESIDENT_2_TONE:
    "/assets/Backgrouds/Details/Bracelets/SS_President_Two_Tone.JPG",
};

export function getColumnBraceletBackgroud(bracelet: BraceletInformation) {
  const braceletMaterial = bracelet.material.toLowerCase();
  const braceletKey: string = braceletMaterial.includes(StrapMaterialEnum.RUBBER.toLowerCase())
    ? StrapMaterialEnum.RUBBER
    : braceletMaterial.includes(StrapMaterialEnum.NATO.toLowerCase())
      ? StrapMaterialEnum.NATO
      : /links|titanium|ss|stainless|stainless/.test(braceletMaterial)
        ? StrapMaterialEnum.STAINLESS_STEEL
        : StrapMaterialEnum.LEATHER;

  let type = undefined;
  switch (braceletKey) {
    case StrapMaterialEnum.RUBBER:
      return braceletsBackgrounds["RUBBER"];

    case StrapMaterialEnum.NATO:
      return braceletsBackgrounds["NATO"];

    case StrapMaterialEnum.STAINLESS_STEEL:
      type = braceletMaterial.includes("jubilee")
        ? "JUBILEE"
        : bracelet.color.toLowerCase().includes("two tone")
          ? "PRESIDENT_2_TONE"
          : "PRESIDENT";
      return braceletsBackgrounds[`STAINLESS_STEEL_${type}`];

    default:
      const colorKey = bracelet.color.toLowerCase().includes("black") ? "BLACK" : "BROWN";

      type = braceletMaterial.includes("lizard")
        ? "LIZARD"
        : braceletMaterial.includes("crocodile")
          ? "CROCODILE"
          : "COW";
      return braceletsBackgrounds[`LEATHER_${type}_${colorKey}`];
  }
}
