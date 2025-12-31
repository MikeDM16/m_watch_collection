import { CaliberTechinicalDetailskeyToDisplayTextmappings } from "@/app/data/movementsData";
import {
  BraceletInformationToDisplayTextMapping,
  CaseInformationKeyToDisplayTextMapping,
  DialInformationToDisplayTextMapping,
  ModelInformationKeyToDisplayTextMapping,
  WatchDetails,
} from "@/app/data/watchDetails";
import { getLocalImageAsDataUri } from "@/app/services/commonFunctions";
import { Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import { PDFImageWithFallback } from "./PDFImageWithFallback";

// PDF-specific display text overrides (only for PDF generation)
const PDFModelInformationKeyToDisplayTextMapping: Record<string, string> = {
  ...ModelInformationKeyToDisplayTextMapping,
  catalogueReference: "Reference",
  productionYear: "Year",
  movementType: "Type",
};

const PDFCaseInformationKeyToDisplayTextMapping: Record<string, string> = {
  ...CaseInformationKeyToDisplayTextMapping,
  finishingDetails: "Finishing",
  // waterResistance: "Water Resistance" - keeps the same, no override needed
};

const PDFDialInformationToDisplayTextMapping: Record<string, string> = {
  ...DialInformationToDisplayTextMapping,
  finishingDetails: "Finishing",
  luminiscentIndexes: "Luminescence",
};

interface PDFWatchPageProps {
  watchDetails: WatchDetails;
  srcImage?: string;
  pageId?: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 15,
    fontSize: 7,
  },
  contentPage: {
    flex: 1,
    justifyContent: "flex-start",
  },
  watchTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
    color: "#c40d2e",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
    marginBottom: 5,
    gap: 2,
    justifyContent: "flex-start",
  },
  uniformImage: {
    width: "23.5%",
    height: 80,
    marginBottom: 2,
    marginRight: 2,
    objectFit: "cover",
  },
  sectionTitle: {
    fontSize: 7,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    paddingBottom: 2,
    color: "#c40d2e",
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 1.5,
  },
  detailLabel: {
    fontWeight: "bold",
    width: "40%",
    fontSize: 7,
  },
  detailValue: {
    width: "60%",
    fontSize: 7,
  },
  fourColumn: {
    flexDirection: "row",
    gap: 6,
    marginTop: 4,
  },
  column: {
    width: "23%",
    flex: 1,
  },
  tableHeader: {
    fontSize: 7,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 1,
  },
  movementImage: {
    width: "100%",
    maxHeight: 80,
    marginTop: 2,
    marginBottom: 2,
    objectFit: "contain",
  },
  mainImage: {
    width: "100%",
    maxHeight: 80,
    marginTop: 0,
    objectFit: "contain",
  },
  modelInfoContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  modelInfoLeftColumn: {
    width: "50%",
    flex: 1,
  },
  modelInfoRightColumn: {
    width: "50%",
    flex: 1,
    justifyContent: "flex-start",
  },
  movementContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  movementLeftColumn: {
    width: "60%",
  },
  movementRightColumn: {
    width: "40%",
  },
  movementImageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
    marginTop: 3,
  },
  movementImageItem: {
    width: "49%",
    marginBottom: 2,
  },
  featureList: {
    marginTop: 2,
  },
  featureItem: {
    marginBottom: 1,
    fontSize: 6,
  },
  movementDescription: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 6.5,
    lineHeight: 1.2,
  },
  pageNumber: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 8,
    color: "#666666",
  },
});

export const PDFWatchPage = ({ watchDetails, srcImage, pageId }: PDFWatchPageProps) => {
  const { technicalData } = watchDetails;
  const sliderImages = watchDetails.sliderImages || [];

  // Build image list: always start with srcImage, then add filtered sliderImages
  // Filter sliderImages to keep only "pair" images (indices 1,3,5,7,9 in 1-indexed = 0,2,4,6,8 in 0-indexed)
  const getDisplayImages = (
    mainImage: string | undefined,
    sliderImagesArray: string[],
    targetCount: number,
  ): string[] => {
    const result: string[] = [];

    // Always add srcImage first if provided
    if (mainImage) {
      result.push(mainImage);
    }

    // Filter sliderImages to keep only every other image (indices 0, 2, 4, 6, 8...)
    // This corresponds to positions 1, 3, 5, 7, 9 in 1-indexed
    const filteredSliderImages = sliderImagesArray.filter((_, index) => index % 1 === 0);

    // Add filtered slider images, avoiding duplicates with srcImage
    for (const image of filteredSliderImages) {
      if (image !== mainImage && !result.includes(image)) {
        result.push(image);
      }

      // Stop if we've reached the target count
      if (result.length >= targetCount) {
        break;
      }
    }

    // Return up to targetCount images
    return result.slice(0, targetCount);
  };

  // Get up to 20 images (4 columns x 5 rows)
  const displayImages = getDisplayImages(srcImage, sliderImages, 20);

  const renderFourColumnTable = () => {
    const caseData = technicalData.case as unknown as Record<string, string>;
    const dialData = technicalData.dial as unknown as Record<string, string>;
    const braceletData = technicalData.bracelet as unknown as Record<string, string>;

    // Get keys for each section, filtering out empty values
    const caseKeys = Object.keys(caseData).filter((key) => caseData[key] && caseData[key] !== "");
    const dialKeys = Object.keys(dialData).filter((key) => dialData[key] && dialData[key] !== "");
    const braceletKeys = Object.keys(braceletData).filter(
      (key) => braceletData[key] && braceletData[key] !== "",
    );

    return (
      <View>
        <Text style={styles.sectionTitle}>Technical Specifications</Text>
        <View style={styles.fourColumn}>
          {/* Model Information Column */}
          <View style={styles.column}>
            <Text style={styles.tableHeader}>Model</Text>
            {(() => {
              const modelInfoData = technicalData.information as unknown as Record<string, string>;
              const modelInfoKeys = Object.keys(modelInfoData).filter(
                (key) => modelInfoData[key] && modelInfoData[key] !== "",
              );
              return modelInfoKeys.map((key) => {
                const value = modelInfoData[key];
                const displayText = PDFModelInformationKeyToDisplayTextMapping?.[key] || key;
                return (
                  <View key={`model-${key}`} style={styles.detailRow}>
                    <Text style={styles.detailLabel}>{displayText}:</Text>
                    <Text style={styles.detailValue}>{value}</Text>
                  </View>
                );
              });
            })()}
          </View>

          {/* Case Column */}
          <View style={styles.column}>
            <Text style={styles.tableHeader}>Case</Text>
            {caseKeys.map((key) => {
              const value = caseData[key];
              const displayText = PDFCaseInformationKeyToDisplayTextMapping?.[key] || key;
              return (
                <View key={`case-${key}`} style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{displayText}:</Text>
                  <Text style={styles.detailValue}>{value}</Text>
                </View>
              );
            })}
          </View>

          {/* Dial Column */}
          <View style={styles.column}>
            <Text style={styles.tableHeader}>Dial</Text>
            {dialKeys.map((key) => {
              const value = dialData[key];
              const displayText = PDFDialInformationToDisplayTextMapping?.[key] || key;
              return (
                <View key={`dial-${key}`} style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{displayText}:</Text>
                  <Text style={styles.detailValue}>{value}</Text>
                </View>
              );
            })}
          </View>

          {/* Bracelet Column */}
          <View style={styles.column}>
            <Text style={styles.tableHeader}>Bracelet</Text>
            {braceletKeys.map((key) => {
              const value = braceletData[key];
              const displayText = BraceletInformationToDisplayTextMapping?.[key] || key;
              return (
                <View key={`bracelet-${key}`} style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{displayText}:</Text>
                  <Text style={styles.detailValue}>{value}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  const renderMovement = () => {
    const movement = technicalData.movement;
    if (!movement) return null;

    const movementImages = movement.sliderImages?.slice(0, 4) || []; // Show up to 4 images (2x2 grid)

    // Helper function to remove bullet points and enumeration sections from description
    const cleanDescription = (description: string): string => {
      if (!description) return "";

      const lines = description.split("\n");
      const cleanedLines: string[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Stop at lines that indicate enumeration sections (e.g., "Caliber References:", "References:", etc.)
        // Also exclude any line ending with ":" as it's a header for enumeration
        if (line.endsWith(":") || line.match(/^[A-Z][^:]*:\s*$/)) {
          break;
        }

        // Stop at bullet points (lines starting with "-")
        if (line.startsWith("-")) {
          break;
        }

        // Keep the line if it's not empty or part of enumeration
        if (line && !line.match(/^\d+[\.\)]\s/)) {
          cleanedLines.push(line);
        }
      }

      return cleanedLines.join(" ").trim();
    };

    return (
      <View>
        <Text style={styles.sectionTitle}>Movement</Text>
        <View style={styles.movementContainer}>
          <View style={styles.movementLeftColumn}>
            <Text style={{ fontSize: 7, fontWeight: "bold", marginBottom: 4 }}>
              {movement.title}
            </Text>
            {movement.description && (
              <Text style={styles.movementDescription}>
                {cleanDescription(movement.description)}
              </Text>
            )}
            {Object.entries(movement.details)
              .filter(([, value]) => value !== undefined && value !== "")
              .map(([key, value]) => {
                const displayText = CaliberTechinicalDetailskeyToDisplayTextmappings?.[key] || key;
                return (
                  <View key={key} style={styles.detailRow}>
                    <Text style={styles.detailLabel}>{displayText}:</Text>
                    <Text style={styles.detailValue}>{value}</Text>
                  </View>
                );
              })}
          </View>
          <View style={styles.movementRightColumn}>
            {movementImages.length > 0 && (
              <View style={styles.movementImageGrid}>
                {movementImages
                  .map((imagePath, index) => {
                    try {
                      const imageDataUri = getLocalImageAsDataUri(imagePath);
                      return (
                        <View key={index} style={styles.movementImageItem}>
                          <PDFImageWithFallback
                            src={imageDataUri}
                            style={styles.movementImage}
                            alt={`Movement image ${index + 1}: ${imagePath}`}
                          />
                        </View>
                      );
                    } catch (error) {
                      console.error(`[PDF] Failed to load movement image: ${imagePath}`, error);
                      return null;
                    }
                  })
                  .filter((item): item is React.ReactElement => item !== null)}
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <Page id={pageId} size="A4" style={styles.page}>
      <View style={styles.contentPage}>
        <Text style={styles.watchTitle}>{watchDetails.title}</Text>

        {/* Compact image gallery */}
        {displayImages.length > 0 && (
          <View style={styles.photoGrid}>
            {displayImages
              .map((imagePath, index) => {
                try {
                  const imageDataUri = getLocalImageAsDataUri(imagePath);
                  return (
                    <PDFImageWithFallback
                      key={index}
                      src={imageDataUri}
                      style={styles.uniformImage}
                      alt={`Watch image ${index + 1}: ${imagePath}`}
                    />
                  );
                } catch (error) {
                  console.error(`[PDF] Failed to load image: ${imagePath}`, error);
                  return null;
                }
              })
              .filter((item): item is React.ReactElement => item !== null)}
          </View>
        )}

        {renderFourColumnTable()}
        {renderMovement()}
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber }) => pageNumber} />
    </Page>
  );
};

// Keep old exports for backwards compatibility during migration
export const PDFWatchPageTitle = PDFWatchPage;
export const PDFWatchPageDetails = PDFWatchPage;
