import path from "path";
import { renderToFile } from "@react-pdf/renderer";
import React from "react";

import { PDFBookDocument } from "../src/app/components/pdf/PDFBookDocument";
import { CollectionEntry } from "../src/app/data/collectionData";
import brandsService from "../src/app/services/brandsService";
import collectionService from "../src/app/services/collectionService";

interface BrandWithModels {
  name: string;
  models: CollectionEntry[];
}

interface TOCEntry {
  title: string;
  pageNumber: number;
  level?: number;
}

async function generatePDFBook() {
  console.log("Starting PDF book generation...");

  // Get all collection items
  const allItems = collectionService.getAllCollectionItems();

  // Get all brands that have models
  const allBrands = brandsService.getAllBrands();
  const brandNames = Object.values(allBrands)
    .flat()
    .map((brand) => brand.name)
    .filter((brandName) => {
      // Check if this brand has any models
      return Object.values(allItems).some((item) => item.brand === brandName);
    })
    .sort(); // Sort alphabetically

  console.log(`Found ${brandNames.length} brands with models`);

  // Organize models by brand and sort by year (ascending)
  const brandsWithModels: BrandWithModels[] = brandNames.map((brandName) => {
    const brandModels = Object.values(allItems)
      .filter((item) => {
        // Filter out invalid items
        if (item.brand !== brandName) return false;
        if (!item.href || !item.href.default) {
          console.warn(`Skipping item with invalid href: ${item.legend}`);
          return false;
        }
        if (!item.href.default.title) {
          console.warn(`Skipping item with missing title: ${item.legend}`);
          return false;
        }
        return true;
      })
      .sort((a, b) => a.year - b.year); // Sort by year ascending (oldest to newest)

    return {
      name: brandName,
      models: brandModels,
    };
  });

  // Calculate total models
  const totalModels = brandsWithModels.reduce((sum, brand) => sum + brand.models.length, 0);
  console.log(`Total models: ${totalModels}`);

  // Build table of contents
  // Cover = page 1, TOC = page 2, then brands and models
  const tocEntries: TOCEntry[] = [];
  let currentPage = 3; // Start after cover (1) and TOC (2)

  brandsWithModels.forEach((brand) => {
    // Brand section header
    tocEntries.push({
      title: brand.name,
      pageNumber: currentPage,
      level: 1,
    });
    currentPage++; // Brand header page

    // Each model has 1 page (combined title and details)
    brand.models.forEach((model) => {
      tocEntries.push({
        title: model.href.default.title,
        pageNumber: currentPage,
        level: 2,
      });
      currentPage += 1; // Single combined page
    });
  });

  console.log(`Table of Contents will have ${tocEntries.length} entries`);

  // Render to file
  const outputPath = path.join(process.cwd(), "public", "watch-collection-book.pdf");
  console.log(`Generating PDF to: ${outputPath}`);

  try {
    console.log("Rendering PDF (this may take a while due to image loading)...");
    console.log("Note: Images are being loaded from local file system:");
    console.log(
      "  C:\\Users\\migue\\Documentos\\GitHub\\MWatchCollectionResources\\public\\assets\\Images",
    );
    console.log("");

    // Create the PDF document element using JSX
    const pdfDocument = <PDFBookDocument brands={brandsWithModels} tocEntries={tocEntries} />;

    const startTime = Date.now();
    await renderToFile(pdfDocument, outputPath);
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log("");
    console.log("PDF book generated successfully!");
    console.log(`Output: ${outputPath}`);
    console.log(`Generation time: ${duration} seconds`);
    console.log("");
    console.log("Note: If many images are missing, verify that:");
    console.log("  1. The MWatchCollectionResources repository exists at:");
    console.log("     C:\\Users\\migue\\Documentos\\GitHub\\MWatchCollectionResources");
    console.log("  2. Image files exist in the expected locations");
    console.log("  3. File paths in JSON match the actual file structure");
  } catch (error) {
    console.error("Error generating PDF:", error);
    // Don't exit on image fetch errors - they're handled gracefully
    if (
      error instanceof Error &&
      (error.message.includes("fetch") || error.message.includes("network"))
    ) {
      console.warn("");
      console.warn("Some images failed to load, but PDF generation may have succeeded.");
      console.warn("Check the output file to verify.");
      console.warn("This is often due to rate limiting or network issues.");
    } else {
      process.exit(1);
    }
  }
}

// Run the generation
generatePDFBook().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
