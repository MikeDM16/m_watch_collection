import { Caliber } from "./movementsData";

export interface SellReport {
  price: number;
  date: string;
  url: string;
}

export const ModelInformationKeyToDisplayTextMapping: Record<string, string> = {
  brand: "Brand",
  series: "Series",
  catalogueReference: "Catalogue Reference",
  movementType: "Movement Type",
  productionYear: "Production Year",
  style: "Style",
};

export interface ModelInformation {
  brand: string;
  series: string;
  catalogueReference: string;
  productionYear: string;
  movementType: string;
  style: string;
}

export const CaseInformationKeyToDisplayTextMapping: Record<string, string> = {
  diameter: "Diameter",
  thickness: "Thickness",
  material: "Material",
  waterResistance: "Water Resistance",
  finishingDetails: "Finishing Details",
  bezel: "Bezel",
  crownType: "Crown Type",
  crystal: "Crystal",
  caseback: "Caseback",
};

export interface CaseInformation {
  diameter: string;
  thickness: string;
  material: string;
  waterResistance: string;
  finishingDetails: string;
  bezel: string;
  crownType: string;
  crystal: string;
  caseback: string;
}

export const DialInformationToDisplayTextMapping: Record<string, string> = {
  color: "Color",
  dialMarkers: "Dial Markers",
  finishingDetails: "Finishing Details",
  luminiscentIndexes: "Luminiscent Indexes",
  calendar: "Calendar",
};

export interface DialInformation {
  color: string;
  dialMarkers: string;
  finishingDetails: string;
  luminiscentIndexes: string;
  calendar: string;
}

export const BraceletInformationToDisplayTextMapping: Record<string, string> = {
  material: "Material",
  buckleType: "Buckle Type",
  width: "Width",
  color: "Color",
};

export interface BraceletInformation {
  material: string;
  buckleType: string;
  width: string;
  color: string;
}

export interface TechnicalData {
  features: string[];
  information: ModelInformation;
  case: CaseInformation;
  dial: DialInformation;
  bracelet: BraceletInformation;
  movement: Caliber;
}

export interface WathchDescription {
  text: string;
  sliderImages: string[];
}

export interface WatchDetails {
  title: string;
  sliderImages: string[];
  technicalData: TechnicalData;
  description?: WathchDescription;
  sellReport?: SellReport;
}
