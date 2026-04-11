import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const DATA_DIR = path.join(process.cwd(), "src", "app", "data");
const WATCH_MODELS_DIR = path.join(DATA_DIR, "watchModels");
const COLLECTION_DATA_FILE = path.join(DATA_DIR, "admin", "collectionData.tsx");

interface CreateModelRequest {
  brandFolder: string;
  filename: string;
  fileContent: string;
  collectionEntry: {
    legend: string;
    brandEnumKey: string;
    year: number;
    watchType: string;
    imgFolder: string;
  };
}

export async function POST(request: Request) {
  try {
    const body: CreateModelRequest = await request.json();
    const { brandFolder, filename, fileContent, collectionEntry } = body;

    // Validate
    if (!brandFolder || !filename || !fileContent || !collectionEntry) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create brand folder if needed
    const outputDir = path.join(WATCH_MODELS_DIR, brandFolder);
    fs.mkdirSync(outputDir, { recursive: true });

    // Write model file
    const outputPath = path.join(outputDir, filename);
    if (fs.existsSync(outputPath)) {
      return NextResponse.json({ error: `File ${filename} already exists` }, { status: 409 });
    }
    fs.writeFileSync(outputPath, fileContent, "utf-8");

    // Create image folder
    const imgFolder = path.join(
      process.cwd(),
      "public",
      "assets",
      "Images",
      brandFolder,
      collectionEntry.imgFolder,
    );
    fs.mkdirSync(imgFolder, { recursive: true });

    // Register in collectionData.tsx
    const collectionContent = fs.readFileSync(COLLECTION_DATA_FILE, "utf-8");
    const modelPath = `../watchModels/${brandFolder}/${filename.replace(".tsx", "")}`;

    // Entry key drops the year prefix (first 5 chars: "YYYY ") since legend always starts with year
    const entryKey = collectionEntry.legend.substring(5);
    const entry = `
  "${entryKey}": {
    brand: BrandsEnum.${collectionEntry.brandEnumKey},
    legend: "${entryKey}",
    year: ${collectionEntry.year},
    type: WatchTypeEnum.${collectionEntry.watchType},
    srcImage: "public/assets/Images/${brandFolder}/${collectionEntry.imgFolder}/IMG_XXXX.JPG",
    hoverSrc: "public/assets/Images/${brandFolder}/${collectionEntry.imgFolder}/IMG_XXXX.JPG",
    href: require("${modelPath}"),
    specialCollectionItem: false,
  },`;

    const updatedContent = collectionContent.replace(
      "\n};\n\nfunction sortCollection",
      `${entry}\n};\n\nfunction sortCollection`,
    );
    fs.writeFileSync(COLLECTION_DATA_FILE, updatedContent, "utf-8");

    return NextResponse.json({
      success: true,
      modelFile: `src/app/data/watchModels/${brandFolder}/${filename}`,
      imgFolder: `public/assets/Images/${brandFolder}/${collectionEntry.imgFolder}`,
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
