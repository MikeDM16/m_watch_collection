"use client";

import Image from "next/image";
import { useState } from "react";

export interface ImageProps {
  src: string;
  hoverSrc?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy" | undefined;
  className?: string;
  style?: Record<string, string>;
}
export default function ImageComponent(props: ImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const merged_styles = {
    ...{ width: props.width || "100%", height: props.height || "auto" },
  };

  const imageSrc = isHovered && props.hoverSrc ? props.hoverSrc : props.src;

  return (
    <Image
      className={props.className}
      src={imageSrc}
      alt={props.alt || ""}
      width={0}
      height={0}
      sizes="100vw"
      loading={props.loading || "lazy"}
      style={merged_styles} // optional
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
