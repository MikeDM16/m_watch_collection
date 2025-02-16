import { Caliber } from "./movementsData";

export interface SellReport {
  price: number;
  date: string;
  url: string;
}

export interface ModelInformation {
  brand: string;
  series: string;
  catalogueReference: string;
  productionYear: string;
  movementType: string;
  style: string;
}

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

export interface DialInformation {
  color: string;
  dialMarkers: string;
  finishingDetails: string;
  luminiscentIndexes: string;
  calendar: string;
}

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
