import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_ETA_Valjoux_7753_27 from "../../movements/ETA/ETA_Valjoux_7753_27J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2006 WM of Switzerland Grand Prix Formula A1 Limited Edition 269/999",

  sliderImages: [
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6719.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6720.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6721.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6722.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6723.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6750.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6751.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6724.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6725.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6726.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6727.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6728.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6729.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6730.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6731.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6735.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6736.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6737.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6738.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6739.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6752.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6753.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6740.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6741.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6742.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6743.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6744.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6747.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6703.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6704.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6705.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6706.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6707.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6708.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6709.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6710.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6711.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6712.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6713.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6714.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6715.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6732.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6733.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6745.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6746.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6748.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6749.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6716.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6717.JPG",
    "public/assets/Images/WM_of_Switzerland/2006_WM_of_Switzerland_Grand_Prix_A1/IMG_6718.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.DATE,
      featuresEnum.TITANIUM,
      "Hand built Limited Edition 269/999",
      {
        name: "A1 Grand Prix",
        description:
          "A1 Grand Prix (A1GP) was an international racing series that ran from 2005 to 2009, famously marketed as the “World Cup of Motorsport”. Unlike Formula 1, where private teams or manufacturers compete, drivers in A1GP directly represented their home nations, all using identical spec cars.",
      },
    ],

    information: {
      brand: BrandsEnum.WM_OF_SWITZERLAND,
      series: "Grand Prix A1",
      catalogueReference: "Limited Edition 269/999",
      productionYear: "2006",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_45,
      thickness: CaseThicknessEnum.T_16,
      material: CaseMaterialEnum.TITANIUM,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.SANDBLASTED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.CARBON_FIBER,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER_RACING,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_22,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_Valjoux_7753_27,
  },
};

export default details;
