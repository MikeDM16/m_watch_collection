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
  title: "1976 Omega De Ville 191.0167 Cal. 1365",
  sliderImages: [
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1298.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1299.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1300.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1301.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1302.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1303.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1304.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1305.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1306.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1307.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1308.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1309.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1310.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1311.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1312.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1313.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1314.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1315.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1316.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1317.JPG",
    "public/assets/Images/Omega/1976_Omega_1910167_DeVille/IMG_1318.JPG",
  ],
  sellReport: {
    price: 240,
    date: "13/02/2020",
    url: "https://www.catawiki.pt/l/34320459-omega-de-ville-191-0167-cal-1365-9-jewels-homem-1970-1979",
  },
  technicalData: {
    features: ["Date", "Water Resistant", "14K Gold Plated 20 \u339B"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Classic De Ville Series",
      catalogueReference: "196.0077",
      productionYear: "1979-1984 (1976)",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "33 mm",
      thickness: "5 mm",
      material: "14K Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "-",
      bezel: "SS Polished bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Brown",
    },

    movement: {
      title: "Omega 1365",
      description:
        "De Ville quartz line movement. \n \n" +
        "Minutes are set by pressing the crown entry repeatably, one push per minute. \
                Hours are set by holding the crow pressed for around 3 seconds. The hour hand then moves in 1-hour step. Minutes stay the same.",
      usefullLinks: {
        "Technical Information from Omega": "../Files/omega_1365.pdf",
        "Omega Vintage Catalogue":
          "https://www.omegawatches.com/pt/watch-omega-de-ville-classic-dv-md-191-0077",
      },
      sliderImages: [
        "public/assets/Images/Omega/1976_Omega_1910167_DeVille/omega_1365_1.PNG",
        "public/assets/Images/Omega/1976_Omega_1910167_DeVille/omega_1365_2.PNG",
      ],
      details: {
        manufacturer: "Omega",
        modelReference: "1365",
        type: "Quartz",
        battery: "SR621SW",
        jewels: "9 (Nine) Jewels ",
        functions: "Hours, Minutes",
      },
    },
  },
};

export default details;
