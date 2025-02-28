import { background_images_paths, getExternalResource } from "@/app/services/commonFunctions";

export interface TitleDivisionProps {
  title: string;
  srcImage?: string;
  textAlignement?: string;
}

export default function PageTitleDivisionComponent(props: TitleDivisionProps) {
  const textClassName = props.textAlignement == "left" ? "left-padded-text" : "centered-text";

  return (
    <div
      className="header-title page-division title-white-color"
      style={{
        backgroundImage: `url(${getExternalResource(props.srcImage || background_images_paths[0])})`,
      }}
    >
      <div className={`page-title-overlay-aligned ${textClassName}`}>
        <div>{props.title}</div>
      </div>
    </div>
  );
}
