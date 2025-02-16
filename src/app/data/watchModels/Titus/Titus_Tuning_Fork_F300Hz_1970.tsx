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
  title: "1970 Titus Tuning Fork F300Hz",
  description: {
    text:
      " The Tuning Fork revolution\n \n" +
      "Tuning fork or Diapason movements are all based on the widely known as Accutron caliber, that uses an acoustic resonator in the design of a \
        vibrating fork as the source of stable resonance/frequency.\n \n" +
      "The concept was invented around the 1950's by Max Hetzel, back then a Bulova Watch Company employee. The idea was intended for commercial \
        use in watches but this breakthrough technology was also used in NASA satellites and spaceflight instruments due to his accuracy.\n " +
      "Having achieved proper miniaturization and reliability, the first Bulova tuning fork caliber was sold in wristwatch format in the 1960s, \
        as the Bulova Accutron 214. Because it was the first movement to use a transistor, it was advertised as the first truly electronic wristwatch.\n" +
      'The electric signal transformed by the transistor activates an electromagnetic coil that puts a metal tuning fork into vibration. \
        This motion is then transferred by means of a tiny wire called "index finger" onto an ordinary mechanical gear train in which the smallest wheel \
        contains 300 teeth invisible to the naked eye.\n' +
      'These movements have a specific "humming" feature due to the audible 360Hz vibration of the tuning fork thus the entire family of Accutron based\
         watches are widely called "Hummers".\n' +
      "They were the most precise watches in the World for more than a decade and were produced until 1977 when reliable and cheap quartz movements reached the market. \
        Early quartz movements (Beta21, Accuquartz, Ultra-Quartz) lacked stepping motors and used Accutron technology as the source of mechanical motion.\n \n" +
      "The Accutron principle is still alive today, as all quartz crystals used in modern quartz watches are shaped in the form of a tuning fork. \
        Solvil et Titus History. \n" +
      'Based on the information shared in the actual brand website, "Solvil and Titus" was officially registered around 1887 by the cutting edge inventor,\
         watchmaker and horological author, Paul Bernard Ditisheim. Solvil refers to the Swiss village of Sonvillier where the brand factory was established and \
         assemble all the first models and Titus is a reference to the name of a Roman emperor in the first century AD.\n \n' +
      "His founder was exceptionally good at the watchmaking art, being graduated with a diploma from �cole d'arts appliqu�s La Chaux-de-Fonds only whit the age \
        of 13. Ditisheim worked at his father's company, Vulcain, before founding the watchmaking firms of Titus and Solvil in Geneva, Switzerland. During his \
        brilliant career, he won numerous chronometer performance competitions with innovations of his own design. His breakthroughs aimed to counter the effects \
        of atmospheric pressure and magnetic fields on timekeeping and due to his work, Titus timepieces have become synonymous with the highest standards in \
        timekeeping precision.\n \n" +
      "In the present, the brand has been acquired by an Asian company using Chinese quartz movements or, in the most expensive models, variations Seagull calibers. \
        Many Titus watches have been appearing at auction in websites such as eBay, claiming to be NOS. Some say it can be due to the found stocks after the company was \
         bought by the Asian company or someone is assembling old spare parts and movements and then selling the watch as NOS mint condition models.\n \n" +
      "One of the most interesting and valuable models that appear in this sellings are the tuning fork series, as they share a strong connection with some Omega models. \
        Some of these NOS Titus watches contain the ESA 9162 / 9164 tuning fork movement and it appears these have an interesting connection with Omega. Although there is no \
        definitive proof, Omega was passing bad times around the 1970s and it seems that Titus bought all of the old tuning fork stock pieces from Omega when they \
        stopped manufacturing their F300 Hz range of watches. This included movements, cases, straps and even the mineral crystals.\n \n" +
      "Many of the Titus Tuning Fork watch cases are identical to Omega F300 cases and some of the crystals in these Titus Tuning Fork cases still have the \
        tiny Omega logo in the centre of them. Also, there is evidence that the crown tops have been filed down to remove the Omega logo and similarly, the case\
         backs have been turned down to remove the Omega engraving marks.\n \n" +
      "So even if there is no official reference about this, it seems pretty obvious that these Titus tuning fork are a rebranding of the Omega F300Hz, \
        using the same pieces and movements.\n \n" +
      "This particular model was found at the selling website Olx.\n " +
      "Although it only costs 5€ (including normal shipping) the watch came in tough condition, without the back case and without working. \
        The movement has been exposed and without proper protection for a couple of years, has the buyer properly informed.\n" +
      "After checking whit three local watchmakers, none was able to restore the movement into working condition.\n \n" +
      "The watch was later sold at eBay as spare parts, since the case, glass and strap could be used for others Titus or omega models.",

    sliderImages: [
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(5).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(6).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(3).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(7).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(4).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(8).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(9).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(2).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/12ja35-(1).JPG",
      "public/assets/Images/Titus/1970_Titus_Tuning_Fork/titustuningfork/AG08183-(9).JPG",
    ],
  },
  sliderImages: [
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1254.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1255.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1261.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1262.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1263.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1264.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1265.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1252.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1253.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1249.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1250.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/IMG_1251.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/7.JPG",
    "public/assets/Images/Titus/1970_Titus_Tuning_Fork/8.JPG",
  ],
  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.SOLVIL_ET_TITUS,
      series: "Tuning fork",
      catalogueReference: "9306",
      productionYear: "1970",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "43 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Brushed",
      bezel: "Polished bezel edge",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Integrated Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "22 mm",
      color: "SS Grey",
    },

    movement: {
      title: "ETA-ESA 9162",
      description:
        "Omega and ESA Tuning Fork movements\n \n" +
        "Like many other watch manufacturers in the 1970s, Omega employed tuning fork movements in many of their watches.\n \n" +
        "The ESA 9162 / ESA 9184 movements used by Omega were also designed by Max Hetzel, who had previously worked for \
             Bulova and created the Accutron 214. There is also a chronograph version of these tuning fork movements, known as the \
             ESA 9210 and was used in the Omega Speedsonic range of watches.\n \n" +
        "The Omega watches employing these tuning fork movements were usually referred to as the �Omega F300Hz' models reflecting \
            the frequency of the tuning fork. The non-chronograph f300s must have been produced in the tens of thousands and are often \
            seen on a popular auction site today.\n" +
        "Omega, like many other watch makers, allocated their own calibre numbers to these ESA movements: \n " +
        "    - Omega Calibre 1250 = ESA 9162 (date only)\n" +
        "    - Omega Calibre 1255 = ESA 9210 (chronograph day and date)\n" +
        "    - Omega Calibre 1260 = ESA 9164 (day and date)\n",

      usefullLinks: {
        "Ranftt ETA-9162":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&69&2uswk&ETA-ESA_9162",
        "ETA 9162 Catalogue Parts": "../Files/1451_eta 9162.pdf",
        "ETA 9162 Original Repair Manual from Omega": "../Files/6288_ETA 9162 Repair Manual.pdf",
      },
      sliderImages: [
        "public/assets/Images/Titus/1970_Titus_Tuning_Fork/mov1.PNG",
        "public/assets/Images/Titus/1970_Titus_Tuning_Fork/mov2.JPG",
        "public/assets/Images/Titus/1970_Titus_Tuning_Fork/mov4.PNG",
      ],

      details: {
        manufacturer: "ETA-ESA",
        modelReference: "9162 (day Version) (Omega F300Hz)",
        type: "Tunin Fork",
        battery: "343 (original mercury) / 344 (actual replacement)",
        jewels: "12 (Twelve) Jewels",
        frequency: "300 Hz",
        functions: "Date, Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;
