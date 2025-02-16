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
  title: "2005 Tissot PRS 516 J565/665 Retrograde Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0651.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0652.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0653.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0654.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0655.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0656.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0657.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0658.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0659.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0660.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0661.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0662.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0663.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0664.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0665.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0666.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/IMG_0667.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/tissot_catalogue.JPG",
    "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/tissot_site.JPG",
  ],
  sellReport: {
    price: 190,
    date: "16/11/2018",
    url: "https://www.catawiki.com/l/22109423-tissot-prs-516-retrograde-chronograph-sapphire-glass-men-2011-present",
  },
  technicalData: {
    features: ["Date", "Retrograde Chronograph", "Tachymeter", "50 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: "PRS 516",
      catalogueReference: "J565/665 (T91.1.428.51)",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Vertical Brushing",
      bezel: "Reversed tachymeter",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: {
      title: "ETA G15.261",
      description:
        "ETA chronograph movement used in the Tissot and Swatch Retrograde quartz series. \
                            Other brands also incorporate this caliber in their special models. \n \n" +
        "The movement features a retrograde counter 30 seconds (seconds hand), retrograde counter 5 minutes (3 o'clock subdial) \
                            and retrograde counter 60 minutes (10 o'clock subdial). \n" +
        "ETA also developed a retrograde Perpetual Calendar version: the ETA G15.561. \
                            This one features a perpetual calendar with retrograde date, the day of week and month.",
      usefullLinks: {
        "Users Manual from Tissot": "../Files/Tissot Chronographs G15 Retrograde Users Manual.pdf",
        "Instruction Manual from ETA": "../Files/ETA_G15261_instruction.pdf",
        "Technical Information from ETA": "../Files/ETA_G15261_technical_info.pdf",
      },
      sliderImages: [
        "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/G15_261_verso.PNG",
        "public/assets/Images/Tissot/2009_Tissot_PRS_516_Retrograde/G15_261_verso1.PNG",
      ],

      details: {
        manufacturer: "ETA",
        modelReference: "G15.261",
        type: "Quartz",
        battery: "394",
        jewels: "6 (Six) Jewels ",
        functions: "Retrograde Chronograph, Date, Hours, Minutes, Seconds at 6 o'clock",
      },
    },
  },
};

export default details;
