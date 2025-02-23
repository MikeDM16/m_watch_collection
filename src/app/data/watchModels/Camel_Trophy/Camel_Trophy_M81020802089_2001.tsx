import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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

const details: WatchDetails = {
  title: "2001 Camel Trophy M810.2080-2089 L2 Chrono",

  sliderImages: [
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_148.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1441.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1448.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1447.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1439.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1440.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1442.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1443.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1446.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG_1444.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/IMG14486.JPG",
    "public/assets/Images/Camel/2001_Camel_Trophy_L2_Chronograph/clean.JPG",
  ],
  description: {
    text:
      "Camel Trophy Watches presents itself as a currently pursued and relatively collectable brand. \n" +
      "Their first watches dates back to around 1986, when the design of the Camel Trophy Adventure Watches began. \
                    Firstly, they were only used as gifts to the participants of the Camel Trophy Rally. \
                    This annual event was held by the cigarettes brand Camel and arrange between 1980 and 2000. \n \n" +
      "Only around 1990, the brand started selling the watches onto the open market, being sold as mid-range watches. \
                    The Camel Trophy watch range seemed to vary slightly from country to country and the design/manufacture of these firsts watches is very unclear. \n \n" +
      "The price of the watches was in (+/- 1991) the middle to low range with the Multichrono costing between 180- 240EUR. \
                    The Superchrono was priced at around 320EUR (and up) and the cheaper Green belt range was around DM 110. \
                    The team Professional LE cost DM 460-510EUR. \n" +
      "Although the sales strategy of the Camel Trophy watches were inconsistent throughout Europe, the watches managed to set a solid impression, \
                    especially in Italy and Spain, when in 1994 the Camel Trophy watches were the 6th best selling watch in Spain. \
                    These watches were associated to quality and extreme resistance and durability. \n \n" +
      "The Swiss watch giant Mondaine took over all licensing rights for Camel Trophy Adventure Watches in 1993. \
                    Most of the new series used Swiss licensed movements from ETA, RONDA or ISA. Older models also use citizen and Seiko movements, \
                    like the Citizen OS10 and the famous Seiko 7T32. \n \n" +
      "In February 1999 Worldwide Brands Inc. decided the image of the Camel Trophy was no longer compatible with their targeted consumer \
                    group and cancelled their sponsoring. So after 18 years, the Camel Trophy was Finished, and the Camel Trophy watch stopped production.  \n" +
      "The Camel Trophy licence went to Japan and was changed to Camel Active. \n \n" +
      "After being bought by Mondaine, the latest models of the brand present the requirement of construction and quality of many Swiss watches. \n" +
      "Although mostly quartz, there is still a model range with automatic movements. \n" +
      "For these reasons and being a brand currently lacking, the demand for these watches has increased over the last few years. \n \n" +
      'Usefull link to learn more about the brand and the existent models Usefull Links: \
                    <a href="http://www.ct-watches.co.uk/index.html"> Camel Trophy Watchs UK </a> and <a href="https://www.camel-trophy.net/"> Camel Trophy Net </a>, \
                    with a great registry of all models.',

    sliderImages: [],
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.CAMEL_TROPHY,
      series: "L2 Chronograph",
      catalogueReference: "M 810.2080.2089",
      productionYear: "2001",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Vertical Brushed",
      bezel: "Uni-directional, bronze, 10-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.MIYOTA_OS10,
  },
};

export default details;
