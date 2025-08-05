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
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1977 Omega Seamaster 196.0079 Cal. 1342",
  sliderImages: [
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0045.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0046.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0047.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0048.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0051.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0052.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0055.JPG",

    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0053.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0054.JPG",

    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0026.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0028.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0029.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0018.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0021.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0024.JPG",

    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0015.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0016.JPG",

    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0561.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0567.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0568.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1920.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/omega_site_1.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/omega_site_2.JPG",

    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0072.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0073.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0074.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0075.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0076.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0077.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0078.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0079.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0080.JPG",

    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0056.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0057.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0058.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0059.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0060.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0061.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0064.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0065.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0066.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0067.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0068.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0069.JPG",
  ],

  saleReport: {
    price: 600,
    date: "11/07/2025",
    url: "https://www.catawiki.com/en/l/96497523",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SEAMASTER_VINTAGE,
      catalogueReference: "SM 196.0079",
      productionYear: "1977",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "34 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "-",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Bordeaux",
    },

    movement: {
      title: "Omega 1342",
      description:
        "Vintage Omega quartz eletronic movement. \n \n" +
        "Hours are set without altering the minutes hand. Hour is set by pulling the crown out and turn it in the desire direction. The hour hand jumps in 1h intervals. \n" +
        "Minutes are set by pressing the crown inside by at least 5 seconds. Release it and press it again immediately. \
                    The second hands begins to turn rapidly, moving the minute hand along the movement. \
                    Stop pressing when the minute hand is under the desider minute. \n \n" +
        "Seconds are set by pressing the crown inside. This will stop the seconds hand movement. \
                    Release the crown when the time matches the current seconds hand position.",
      usefullLinks: {
        "Technical Information from Omega": "../Files/omega_1342_manual.pdf",
        "Vintage Information from Omega": "../Files/Omega_1342_parts_catalogue.pdf",
        "Omega Vintage Catalogue":
          "https://www.omegawatches.com/watch-omega-seamaster-omega-st-196-0079",
      },
      sliderImages: [
        "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/omega_1342_1.PNG",
        "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/omega_1342_2.PNG",
      ],
      details: {
        manufacturer: "Omega",
        modelReference: "1342",
        type: "Quartz",
        battery: "392",
        jewels: "7 (Seven) Jewels ",
        functions: "Date, Hours, Minutes and seconds",
      },
    },
  },
};

export default details;
