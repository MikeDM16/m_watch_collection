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
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1982 Omega De Ville 191.0077 Cal. 1365",
  sliderImages: [
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2177.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2178.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2179.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2180.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2181.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2182.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2183.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2184.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2186.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2187.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2188.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2189.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2190.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2191.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/IMG_2192.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/omega_vintage_1.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/omega_vintage_2.JPG",
    "public/assets/Images/Omega/1982_Omega_1910077_DeVille/omega_vintage_3.JPG",
  ],
  saleReport: {
    price: 360,
    date: "01/06/2019",
    url: "https://www.catawiki.com/l/27013881-omega-de-ville-191-0077-cal-1365-men-1980-1989",
  },
  technicalData: {
    features: ["Date", "Water Resistant", "14K Gold Plated 20 \u339B"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.DE_VILLE_VINTAGE,
      catalogueReference: "Classic 191.0077",
      productionYear: "1979 -1984 (1982)",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "33 mm",
      thickness: "5 mm",
      material: "14K Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "-",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
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
        "public/assets/Images/Omega/1982_Omega_1910077_DeVille/omega_1365_1.PNG",
        "public/assets/Images/Omega/1982_Omega_1910077_DeVille/omega_1365_2.PNG",
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
