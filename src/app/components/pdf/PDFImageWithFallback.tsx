import { Image } from "@react-pdf/renderer";
import React from "react";

interface PDFImageWithFallbackProps {
  src: string;
  style?: Record<string, string | number>;
  alt?: string;
}

/**
 * Wrapper for Image component that handles data URIs (base64 encoded images).
 * @react-pdf/renderer accepts data URIs directly.
 */
export const PDFImageWithFallback = ({ src, style }: PDFImageWithFallbackProps) => {
  // @react-pdf/renderer accepts data URIs (base64) directly
  return <Image src={src} style={style} cache={false} />;
};
