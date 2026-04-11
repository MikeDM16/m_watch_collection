export const CaliberTechinicalDetailskeyToDisplayTextmappings: Record<string, string> = {
  manufacturer: "Manufacturer",
  modelReference: "Model",
  type: "Type",
  jewels: "Jewels",
  frequency: "Frequency",
  reserve: "Reserve",
  functions: "Functions",
  battery: "Battery",
};

export interface CaliberTechinicalDetails {
  manufacturer: string;
  modelReference: string;
  type: string;
  jewels: string;
  frequency?: string;
  reserve?: string;
  functions?: string;
  battery?: string;
}

export interface Caliber {
  title: string;
  details: CaliberTechinicalDetails;
  sliderImages: string[];
  description?: string;
  usefullLinks?: Record<string, string>;
}
