/** Generate the .tsx file content string for a new watch model. */
export function generateWatchModelFile(data: {
  title: string;
  brandEnumKey: string;
  seriesType: "string" | "brand_series";
  seriesValue: string;
  seriesFileName?: string; // e.g. "TissotBrandSeries"
  catalogueReference: string;
  productionYear: string;
  movementType: string;
  style: string;
  diameter: string;
  thickness: string;
  caseMaterial: string;
  waterResistance: string;
  caseFinishing: string;
  bezel: string;
  crownType: string;
  crystal: string;
  caseback: string;
  dialColor: string;
  dialMarkers: string;
  dialFinishing: string;
  luminescent: string[];
  calendar: string[];
  braceletMaterial: string;
  buckleType: string;
  braceletWidth: string;
  braceletColor: string;
  movementRef: string;
  movementImportPath: string;
  features: string[];
  customFeatures: string[];
  imgFolder: string;
}): string {
  const imports = [
    'import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";',
    'import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";',
    'import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";',
    'import { BrandsEnum } from "@/app/enums/brandsEnum";',
    'import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";',
    'import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";',
    'import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";',
    'import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";',
    'import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";',
    'import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";',
    'import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";',
    'import { ColorEnum } from "@/app/enums/colorEnum";',
    'import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";',
    'import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";',
    'import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";',
    'import { featuresEnum } from "@/app/enums/featuresEnum";',
    'import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";',
    'import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";',
    'import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";',
    'import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";',
    'import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";',
    "",
    `import movement_${data.movementRef} from "../../${data.movementImportPath}";`,
    'import { WatchDetails } from "../../watchDetails";',
  ];

  if (data.seriesType === "brand_series" && data.seriesFileName) {
    imports.push(`import { ${data.seriesFileName} } from "./${data.seriesFileName}";`);
  }

  const seriesExpr =
    data.seriesType === "brand_series" && data.seriesFileName
      ? `${data.seriesFileName}.${data.seriesValue}`
      : `"${data.seriesValue}"`;

  const featuresItems = data.features
    .map((f) => `    featuresEnum.${f},`)
    .concat(data.customFeatures.map((f) => `    "${f}",`))
    .join("\n");

  const lumExpr =
    data.luminescent.length > 0
      ? data.luminescent.map((k) => `LuminescentIndexesEnum.${k}`).join(" + ")
      : "LuminescentIndexesEnum.NONE";

  const calExpr =
    data.calendar.length > 0
      ? data.calendar.map((k) => `CalendarWatchTypeEnum.${k}`).join(" + ")
      : "CalendarWatchTypeEnum.WITHOUT";

  return `${imports.join("\n")}

const details: WatchDetails = {
  title: "${data.title}",
  sliderImages: [
    "${data.imgFolder}/IMG_XXXX.JPG",
  ],
  technicalData: {
    features: [
${featuresItems}
    ],

    information: {
      brand: BrandsEnum.${data.brandEnumKey},
      series: ${seriesExpr},
      catalogueReference: "${data.catalogueReference}",
      productionYear: "${data.productionYear}",
      movementType: MovementWatchTypeEnum.${data.movementType},
      style: WatchStyleEnum.${data.style},
    },

    case: {
      diameter: CaseDiameterEnum.${data.diameter},
      thickness: CaseThicknessEnum.${data.thickness},
      material: CaseMaterialEnum.${data.caseMaterial},
      waterResistance: WaterResistanceEnum.${data.waterResistance},
      finishingDetails: CaseFinishingEnum.${data.caseFinishing},
      bezel: BezelTypeEnum.${data.bezel},
      crownType: CrownWatchTypeEnum.${data.crownType},
      crystal: CrystalMaterialEnum.${data.crystal},
      caseback: CaseBackDetailsEnum.${data.caseback},
    },

    dial: {
      color: ColorEnum.${data.dialColor},
      dialMarkers: DialMarketsEnum.${data.dialMarkers},
      finishingDetails: FinishingDetailsEnum.${data.dialFinishing},
      luminiscentIndexes: ${lumExpr},
      calendar: ${calExpr},
    },

    bracelet: {
      material: BraceletMaterialEnum.${data.braceletMaterial},
      buckleType: BuckleTypeEnum.${data.buckleType},
      width: BraceletWidthEnum.${data.braceletWidth},
      color: ColorEnum.${data.braceletColor},
    },

    movement: movement_${data.movementRef},
  },
};

export default details;
`;
}

/** Generate the .tsx file content string for a new movement. */
export function generateMovementFile(data: {
  variableName: string;
  title: string;
  description: string;
  manufacturer: string;
  modelReference: string;
  type: string;
  frequency: string;
  jewels: string;
  reserve: string;
  functions: string;
  battery: string;
  imgFolder: string;
}): string {
  const isQuartz = ["QUARTZ", "SOLAR", "MECA_QUARTZ"].includes(data.type);

  const freqLine =
    !isQuartz && data.frequency
      ? `    frequency: FrequencyEnum.${data.frequency},`
      : "    frequency: undefined,";
  const reserveLine =
    !isQuartz && data.reserve
      ? `    reserve: ReserveHoursEnum.${data.reserve},`
      : "    reserve: undefined,";
  const batteryLine =
    isQuartz && data.battery ? `    battery: "${data.battery}",` : "    battery: undefined,";
  const functionsLine = data.functions ? `    functions: "${data.functions}",` : "";

  return `import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import type { Caliber } from "../../caliberTypes";

const ${data.variableName}: Caliber = {
  title: "${data.title}",
  description: "${data.description}",
  usefullLinks: {},
  sliderImages: [
    "${data.imgFolder}/IMG_XXXX.JPG",
    "${data.imgFolder}/IMG_XXXX.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.${data.manufacturer},
    modelReference: "${data.modelReference}",
    type: MovementWatchTypeEnum.${data.type},
${freqLine}
    jewels: JewelsNumberEnum.${data.jewels},
${reserveLine}
${functionsLine}
${batteryLine}
  },
};

export default ${data.variableName};
`;
}
