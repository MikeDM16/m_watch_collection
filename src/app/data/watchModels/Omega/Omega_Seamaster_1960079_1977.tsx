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
  title: "1977 Omega Seamaster 196.0079 Cal. 1342",
  sliderImages: [
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1907.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1908.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1909.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1910.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1911.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1912.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1914.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1915.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1916.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1917.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1918.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1919.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1920.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0561.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0567.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_0568.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1921.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1922.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1923.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1924.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1925.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1926.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1928.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1929.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1930.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1931.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1933.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1934.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1935.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1936.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1979.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1980.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1981.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1982.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1983.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/IMG_1984.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/omega_site_1.JPG",
    "public/assets/Images/Omega/1977_Omega_1960079_Seamaster/omega_site_2.JPG",
  ],
  technicalData: {
    features: ["Date", "30 meters"],

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
      crownType: CrowWatchTypeEnum.PUSH_PULL,
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
