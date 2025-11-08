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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { CertinaBrandSeries } from "./CertinaBrandSeries";

const details: WatchDetails = {
  title: "1965 Certina DS Turtle Automatic 27 Jewels",
  sliderImages: [
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7146.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7148.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7149.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7150.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7119.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7123.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7154.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7155.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7156.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7157.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7158.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7160.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7161.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7178.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7179.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7162.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7137.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7138.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7139.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7140.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7141.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7142.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7143.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7144.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7151.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7153.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7164.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7165.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7166.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7167.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7168.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7169.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7170.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7171.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7124.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7125.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7126.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7127.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7128.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7129.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7130.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7131.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7132.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7133.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7134.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7135.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7136.JPG",

    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7172.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7173.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7174.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7175.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7176.JPG",
    "public/assets/Images/Certina/1965_Certina_DS_Automatic_25_651_27_jewels/IMG_7177.JPG",
  ],
  technicalData: {
    features: [featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.CERTINA,
      series: CertinaBrandSeries.VINTAGE_SERIES,
      catalogueReference: "DS Turtle",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White (Patina)",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.CERTINA_25_261_27J,
  },
};

export default details;
