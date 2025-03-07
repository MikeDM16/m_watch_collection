import Image from "next/image";

export interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy" | undefined;
  className?: string;
  style?: Record<string, string>;
}
export default function ImageComponent(props: ImageProps) {
  const merged_styles = {
    ...{ width: props.width || "100%", height: props.height || "auto" },
  };

  return (
    <Image
      className={props.className}
      src={props.src}
      alt={props.alt || ""}
      width={0}
      height={0}
      sizes="100vw"
      loading={props.loading || "lazy"}
      style={merged_styles} // optional
    />
  );
}
