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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1974 Tissot Seastar Navigator Chrono",
  sliderImages: [
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_2.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_1.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_3.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6409.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6410.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6411.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6412.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6413.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6414.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6415.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6416.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6417.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6418.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6419.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6426.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6427.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6428.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6429.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6430.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6431.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6432.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6433.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6434.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6435.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6436.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6437.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6438.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6439.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6440.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6441.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6442.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6443.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6444.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6445.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6420.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6421.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6422.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6423.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6424.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6425.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/manufacture_date.JPG",
  ],

  technicalData: {
    features: ["Date", "Mechanical"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: "40522-1 (15) (18890993)",
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Slight Vertical brush",
      bezel: "Tachymeter bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TISSOT_2060_7734_17J,
  },
};

export default details;
