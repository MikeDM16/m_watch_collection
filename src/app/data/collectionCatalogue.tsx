import { CollectionEntry } from "./collectionData";

export interface CollectionCatalogue {
  title: string;
  sliderImages: string[];
  modelsList: Record<string, Record<string, CollectionEntry>>;
}
