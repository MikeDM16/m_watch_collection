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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1970 Tissot Seastar Eletronic",
  sliderImages: [
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2228.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2229.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2230.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2231.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2232.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2233.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2234.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2235.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2236.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2237.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2238.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2239.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2240.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2241.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2242.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2243.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2244.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2245.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2246.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2247.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2248.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2124.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2125.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/IMG_2118.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/MLDU1202.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/VOWJ3278.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/XJCT6047.JPG",
    "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/tissot_manufacturing_dates.JPG",
  ],
  saleReport: {
    price: 130,
    date: "11/04/2019",
    url: "https://www.catawiki.pt/l/25718049-tissot-seastar-eletronic-dynotron-gold-20microns-homem-1970",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.ELETRONIC,
      featuresEnum.GOLD_PLATED_20M,
      "Movement with production number 12367960, dating the watch back to 1970",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: "Eletronic 652-40604-01",
      productionYear: "1970",
      movementType: MovementWatchTypeEnum.ELETRONIC_WITH_BALANCE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "14K Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "-",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.PAN_DIAL,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Black",
    },

    movement: {
      title: "ETA-ISA 9154 Dynotron",
      description:
        "Launched in 1967, the ESA 9150 Dynotron was the first movement with a balance and a transistor assemble in the same caliber, \
                            running at 21,600 A/h. \n \n " +
        "The ESA 9154 is an updated version launched in 1970, having the date function and an increased frequency of 28,800 A/h. \n" +
        "Both the ESA 9150 and ESA 9154 look very similar. \n \n",
      usefullLinks: {
        "Eletric watchs: Transistorised Movements with Balance Wheel":
          "http://electric-watches.co.uk/movement-types/transistorised/",
        "Vintage technical information from ETA": "../Files/3540_ETA 9154.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/ETA_9154-3.PNG",
        "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/ETA_9154-1.PNG",
        "public/assets/Images/Tissot/1970_Tissot_Seastar_Eletronic/ETA_9154-2.PNG",
      ],
      details: {
        manufacturer: "ETA-ISA (Swiss Made)",
        modelReference: "9154 Dynotron ",
        type: "Eletronic",
        frequency: "28800 A/h",
        jewels: "13 (Thriteen) Jewels ",
        battery: "343 (original, mercury), 344 (current replacement) ",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
