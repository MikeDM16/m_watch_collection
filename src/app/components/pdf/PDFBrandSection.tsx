import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

interface PDFBrandSectionProps {
  brandName: string;
}

const styles = StyleSheet.create({
  brandSection: {
    marginTop: 30,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#c40d2e",
    marginBottom: 5,
  },
});

export const PDFBrandSection = ({ brandName }: PDFBrandSectionProps) => {
  return (
    <View style={styles.brandSection}>
      <Text style={styles.brandTitle}>{brandName}</Text>
    </View>
  );
};
