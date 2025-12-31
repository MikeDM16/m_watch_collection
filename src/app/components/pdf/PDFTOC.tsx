import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

interface TOCEntry {
  title: string;
  pageNumber: number;
  level?: number;
  id?: string;
}

interface PDFTOCProps {
  entries: TOCEntry[];
}

const styles = StyleSheet.create({
  tocPage: {
    padding: 40,
    fontSize: 12,
  },
  tocTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#c40d2e",
  },
  tocEntry: {
    flexDirection: "row",
    marginBottom: 8,
    paddingLeft: 0,
  },
  tocEntryLevel1: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 4,
    color: "#c40d2e",
  },
  tocEntryLevel2: {
    fontSize: 12,
    paddingLeft: 20,
    marginBottom: 4,
  },
  tocDots: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
  },
  tocPageNumber: {
    fontSize: 12,
    fontWeight: "normal",
  },
});

export const PDFTOC = ({ entries }: PDFTOCProps) => {
  return (
    <View style={styles.tocPage}>
      <Text style={styles.tocTitle}>Table of Contents</Text>
      {entries.map((entry, index) => {
        const entryStyle = entry.level === 1 ? styles.tocEntryLevel1 : styles.tocEntryLevel2;
        const entryText = <Text style={entryStyle}>{entry.title}</Text>;

        return (
          <View key={index} style={styles.tocEntry}>
            {entry.id ? (
              <Link src={`#${entry.id}`} style={{ textDecoration: "none" }}>
                {entryText}
              </Link>
            ) : (
              entryText
            )}
            <View style={styles.tocDots} />
            <Text style={styles.tocPageNumber}>{entry.pageNumber}</Text>
          </View>
        );
      })}
    </View>
  );
};
