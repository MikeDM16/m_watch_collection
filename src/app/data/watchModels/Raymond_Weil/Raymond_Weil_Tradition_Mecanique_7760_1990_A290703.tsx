import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { WatchDetails } from "../../watchDetails";
import { RaymondWeilBrandSeries } from "./RaymondWeilBrandSeries";

const details: WatchDetails = {
  title: "1990 Raymond Weil Tradition Mécanique Enamel",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2210.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2216.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2206.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2207.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2208.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2209.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2253.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2256.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2257.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2212.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2213.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2214.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2215.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2217.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2218.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2219.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2220.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2222.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2223.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2224.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2225.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2226.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2242.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2243.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2244.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2245.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2199.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2203.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2204.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2227.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2228.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2229.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2230.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2231.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2232.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2233.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2234.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2235.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2236.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2238.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2239.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2240.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2241.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2248.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2249.JPG",
  ],
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.ELETRO_GOLD_PLATED_18k,
      featuresEnum.OPEN_CASE_BACK,
      featuresEnum.WR_10_METERS,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.TRADITION_MECANIQUE,
      catalogueReference: "White Enamel Dial - A290703",
      productionYear: "1990",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "12 mm",
      material: "18K Gold Electroplated",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Enamel White",
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Brown",
    },

    movement: {
      title: "Valjoux 7760",
      description:
        "High quality mechanique chronograph from Valjoux (Pré-ETA). \n" +
        "Adjusted by Raymond Weil with some polishing details added.",
      usefullLinks: {
        "Ranfft 7760 Caliber":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Valjoux_7760",
        "Technical Information from ETA": "../Files/4230_Valjoux7760Smaller.pdf",
        "Instruction Manual from ETA": "../Files/3135_Valjoux7760operatingInstructions.pdf",
      },
      sliderImages: [
        "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/7760_1.PNG",
        "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/7760_2.PNG",
        "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/7760_4.JPG",
      ],
      details: {
        manufacturer: "Valjoux",
        modelReference: "7760 (Mechanique, date)",
        type: "Manual wind",
        frequency: "28800 A/h",
        jewels: "17 (Seventeen) Jewels ",
        reserve: "52 Hours",
        functions: "Day, Date, Hours, Minutes, Sub Seconds at 9 o'clock, 12h 30M 60s Chronograph",
      },
    },
  },
};

export default details;
