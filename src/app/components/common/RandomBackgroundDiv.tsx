"use client";

import { background_images_paths, getExternalResource } from "@/app/services/commonFunctions";
import { useEffect, useState } from "react";

interface RandomBackgroundDivProps {
  images?: string[];
  fallback?: string;
  className?: string;
  children: React.ReactNode;
}

export default function RandomBackgroundDiv({
  images,
  fallback,
  className,
  children,
}: RandomBackgroundDivProps) {
  const initial = images?.[0] ?? fallback ?? background_images_paths[0];
  const [src, setSrc] = useState(initial);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const idx = Math.floor(Math.random() * images.length);
    setSrc(images[idx]);
  }, [images]);

  return (
    <div className={className} style={{ backgroundImage: `url(${getExternalResource(src)})` }}>
      {children}
    </div>
  );
}
