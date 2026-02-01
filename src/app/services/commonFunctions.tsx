import { IconType } from "react-icons";

/**
 * Helper function to dynamically require Node.js modules
 * This pattern prevents webpack from statically analyzing the require calls
 * Only call this in Node.js environment (checked before calling)
 */
function requireNodeModule(moduleName: string) {
  // Try to get require from various sources
  // Using bracket notation and variable access to prevent webpack static analysis
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mod: any = typeof module !== "undefined" ? module : null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const req: any = typeof require !== "undefined" ? require : null;
  console.log(`${mod} - ${req} - ${moduleName}`);
  /*
  
  if (mod && mod.require) {
    return mod.require(moduleName);
  }
  if (req) {
    return req(moduleName);
  }
  throw new Error(`Cannot load module '${moduleName}': require is not available`);*/
}

export function getExternalResource(image_url: string) {
  //const url_begin = "https://github.com/MikeDM16/MWatchCollectionResources/raw/master";
  const base_url = "https://raw.githubusercontent.com/MikeDM16/MWatchCollectionResources/master";
  const proxy_url = `${encodeURI(base_url)}/${encodeURI(image_url)}`;
  return proxy_url;
}

/**
 * Gets the local file path for an image from the MWatchCollectionResources repository
 * Only works in Node.js development mode.
 * @param imagePath - Path from JSON (e.g., "public/assets/Images/Omega/...")
 * @returns Absolute local file path
 */
export function getLocalImagePath(imagePath: string): string {
  // Only work in Node.js environment (not browser)
  if (typeof window !== "undefined") {
    throw new Error(
      "getLocalImagePath() is only available in Node.js environment. " +
        "This function cannot be used in browser.",
    );
  }

  // Dynamic import for Node.js modules
  // Using helper function to prevent webpack static analysis
  // const path = requireNodeModule("path") as typeof import("path");

  // Base path to the MWatchCollectionResources repository
  const basePath = "C:\\Users\\migue\\Documentos\\GitHub\\MWatchCollectionResources";

  console.log(`${imagePath}`);
  // The imagePath from JSON already includes "public/assets/Images/..."
  // path.join will handle path separators correctly for the current OS
  // const fullPath = path.join(basePath, imagePath);

  // Normalize the path and return as absolute Windows path
  return basePath; // path.normalize(fullPath);
}

/**
 * Reads a local image file and converts it to a data URI for @react-pdf/renderer
 * Only works in Node.js development mode.
 * @param imagePath - Path from JSON (e.g., "public/assets/Images/Omega/...")
 * @returns Data URI string (e.g., "data:image/jpeg;base64,...")
 */
export function getLocalImageAsDataUri(imagePath: string): string {
  // Only work in Node.js environment (not browser)
  if (typeof window !== "undefined") {
    throw new Error(
      "getLocalImageAsDataUri() is only available in Node.js environment. " +
        "This function cannot be used in browser.",
    );
  }

  // Dynamic import for Node.js modules
  // Using helper function to prevent webpack static analysis
  const fs = requireNodeModule("fs") as typeof import("fs");
  const path = requireNodeModule("path") as typeof import("path");

  const filePath = getLocalImagePath(imagePath);

  try {
    // Read the file as a buffer
    const imageBuffer = fs.readFileSync(filePath);

    // Determine MIME type from file extension
    const ext = path.extname(filePath).toLowerCase();
    let mimeType = "image/jpeg"; // default
    if (ext === ".png") mimeType = "image/png";
    else if (ext === ".jpg" || ext === ".jpeg") mimeType = "image/jpeg";
    else if (ext === ".gif") mimeType = "image/gif";
    else if (ext === ".webp") mimeType = "image/webp";

    // Convert buffer to base64
    const base64 = imageBuffer.toString("base64");

    // Return data URI
    return `data:${mimeType};base64,${base64}`;
  } catch (error) {
    console.error(`Failed to read image file: ${filePath}`, error);
    throw error;
  }
}

export function getSaleReportImage(baseImgSrc: string): string {
  const imagePath = baseImgSrc.split("/");
  imagePath.pop();
  return imagePath.join("/") + "/saleReport.JPG";
}

export const SizeType = {
  FULL_HD: "1200x1200",
  GALLERY: "800x800",
  SLIDER: "500x500",
  THUMBNAIL: "200x200",
  DEFAULT: "Default",
};

export function getImgURLForSizeType(imageUrl: string, type: string) {
  if (type == SizeType.DEFAULT) {
    return imageUrl;
  }

  return `${imageUrl.split(".")[0]}_${type}.${imageUrl.split(".")[1]}`;
}

export function getIconWithTextCentered(Icon: IconType, text: string) {
  return (
    <div key={`main_div_icon${text}`} className="centered-container">
      <div key={`centered_div_icon${text}`} className="centered-container align-center gap-1">
        <Icon />
        <div>{text}</div>
      </div>
    </div>
  );
}

export function getPathParameter(value: string): string {
  return decodeURIComponent(value);
}

export function setPathParameter(value: string): string {
  return encodeURIComponent(value);
}

export function routeToMainPageHeader() {
  return "/#";
}

export function routeToMainPageAllBrandListing() {
  return "/#AllBrandsItems";
}

export function routeToCollectionBrandPage(brandName: string): string {
  return `/collection/${setPathParameter(brandName)}`;
}

export function routeToCollectionBrandModelPage(brandName: string, modelName: string): string {
  return `/collection/${setPathParameter(brandName)}/${setPathParameter(modelName)}`;
}

export function selectBackgroundImage(images: string[] | undefined): string | undefined {
  if (!images || images.length == 0) {
    return undefined;
  }

  const currentHour = new Date().getHours();
  const selectedIdx = currentHour % images.length;
  return images[selectedIdx];
}

export const background_images_paths = [
  "public/assets/Backgrouds/Tissot_BG1.jpg",
  "public/assets/Backgrouds/Tissot_BG3.jpg",
  "public/assets/Backgrouds/TagHeuer_BG3.JPG",
  "public/assets/Backgrouds/macro_mov_bg.JPG",
];
