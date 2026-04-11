import indexData from "./collection-index.json";

export interface CollectionIndexEntry {
  brand: string;
  legend: string;
  year: number;
  type: string;
  srcImage: string;
  hoverSrc: string | null;
  specialCollectionItem: boolean;
  collectionSet: boolean;
  series: string;
  movementTitle: string;
  saleReport: { price: number; date: string; url?: string } | null;
  modelFile: string;
}

const CollectionIndex: Record<string, CollectionIndexEntry> = indexData;

export default CollectionIndex;
