"use client";

import Image from "next/image";
import { useState } from "react";

export interface ImageProps {
  src: string;
  hoverSrc?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  sizes?: string;
  loading?: "eager" | "lazy" | undefined;
  priority?: boolean;
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
      width={800}
      height={800}
      sizes={props.sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      loading={props.priority ? undefined : props.loading || "lazy"}
      priority={props.priority}
      style={merged_styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
