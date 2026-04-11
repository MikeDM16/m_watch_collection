import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const DATA_DIR = path.join(process.cwd(), "src", "app", "data");
const MOVEMENTS_DIR = path.join(DATA_DIR, "movements");
const MOVEMENTS_DATA_FILE = path.join(DATA_DIR, "admin", "movementsData.tsx");

interface CreateMovementRequest {
  manufacturerFolder: string;
  variableName: string;
  fileContent: string;
}

export async function POST(request: Request) {
  try {
    const body: CreateMovementRequest = await request.json();
    const { manufacturerFolder, variableName, fileContent } = body;

    if (!manufacturerFolder || !variableName || !fileContent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create manufacturer folder if needed
    const outputDir = path.join(MOVEMENTS_DIR, manufacturerFolder);
    fs.mkdirSync(outputDir, { recursive: true });

    // Write movement file
    const filename = `${variableName}.tsx`;
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
      "Movements",
      manufacturerFolder,
      variableName,
    );
    fs.mkdirSync(imgFolder, { recursive: true });

    // Register in movementsData.tsx
    let mvContent = fs.readFileSync(MOVEMENTS_DATA_FILE, "utf-8");

    // Add import after the last import line
    const lines = mvContent.split("\n");
    let lastImportIdx = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith("import ")) lastImportIdx = i;
    }
    const importLine = `import ${variableName} from "../movements/${manufacturerFolder}/${variableName}";`;
    lines.splice(lastImportIdx + 1, 0, importLine);
    mvContent = lines.join("\n");

    // Add to MovementsDataDB before closing };
    const dbEntry = `  ${variableName}: ${variableName},`;
    mvContent = mvContent.replace(/\n};(\s*)$/, `\n${dbEntry}\n};$1`);

    fs.writeFileSync(MOVEMENTS_DATA_FILE, mvContent, "utf-8");

    return NextResponse.json({
      success: true,
      movementFile: `src/app/data/movements/${manufacturerFolder}/${filename}`,
      variableName,
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
