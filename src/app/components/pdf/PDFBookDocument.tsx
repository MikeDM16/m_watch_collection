import { CollectionEntry } from "@/app/data/collectionData";
import { WatchDetails } from "@/app/data/watchDetails";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import { PDFBrandSection } from "./PDFBrandSection";
import { PDFTOC } from "./PDFTOC";
import { PDFWatchPage } from "./PDFWatchPage";

interface PDFBookDocumentProps {
  brands: Array<{
    name: string;
    models: CollectionEntry[];
  }>;
  tocEntries: Array<{
    title: string;
    pageNumber: number;
    level?: number;
    id?: string;
  }>;
}

const styles = StyleSheet.create({
  coverPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  coverSubtitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#666666",
  },
  brandPage: {
    padding: 40,
  },
});

export const PDFBookDocument = ({ brands, tocEntries }: PDFBookDocumentProps) => {
  // Build all pages in order
  const pages: React.ReactElement[] = [];

  // Cover page
  pages.push(
    <Page key="cover" id="cover" size="A4" style={styles.coverPage}>
      <View>
        <Text style={styles.coverTitle}>Watch Collection</Text>
        <Text style={styles.coverSubtitle}>A Comprehensive Catalogue</Text>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber }) => pageNumber} />
    </Page>,
  );

  // Create a copy of tocEntries and update with IDs
  const tocEntriesWithIds = [...tocEntries];
  let tocIndex = 0;

  // Brand sections and watch pages (built first to collect page IDs)
  const contentPages: React.ReactElement[] = [];

  brands.forEach((brand) => {
    // Brand section header page
    const brandPageId = `brand-${brand.name.replace(/\s+/g, "-").toLowerCase()}`;
    contentPages.push(
      <Page key={brandPageId} id={brandPageId} size="A4" style={styles.brandPage}>
        <PDFBrandSection brandName={brand.name} />
        <Text style={styles.pageNumber} render={({ pageNumber }) => pageNumber} />
      </Page>,
    );

    // Update TOC entry for brand with ID
    if (tocIndex < tocEntriesWithIds.length) {
      tocEntriesWithIds[tocIndex].id = brandPageId;
      tocIndex++;
    }

    // Watch model pages
    brand.models.forEach((model) => {
      const watchDetails: WatchDetails = model.href.default;
      if (!watchDetails || !watchDetails.title) {
        console.warn(`Skipping model with invalid watchDetails: ${model.legend}`);
        return;
      }

      // Single combined page per model
      const watchPageId = `watch-${model.legend.replace(/\s+/g, "-").toLowerCase()}`;
      contentPages.push(
        <PDFWatchPage
          key={model.legend}
          watchDetails={watchDetails}
          srcImage={model.srcImage}
          pageId={watchPageId}
        />,
      );

      // Update TOC entry for watch with ID
      if (tocIndex < tocEntriesWithIds.length) {
        tocEntriesWithIds[tocIndex].id = watchPageId;
        tocIndex++;
      }
    });
  });

  // TOC page (insert after cover, before content pages)
  pages.push(
    <Page key="toc" id="toc" size="A4">
      <PDFTOC entries={tocEntriesWithIds} />
      <Text style={styles.pageNumber} render={({ pageNumber }) => pageNumber} />
    </Page>,
  );

  // Add all content pages
  pages.push(...contentPages);

  return <Document>{pages}</Document>;
};
