import { getExternalResource } from "@/app/services/commonFunctions";

export interface TitleDivisionProps {
  title: string;
  srcImage?: string;
  textAlignement?: string;
}

export default function PageTitleDivisionComponent(props: TitleDivisionProps) {
  const imagesPaths = [
    "public/assets/Backgrouds/Tissot_BG1.jpg",
    "public/assets/Backgrouds/Tissot_BG3.jpg",
    "public/assets/Backgrouds/TagHeuer_BG3.JPG",
    "public/assets/Backgrouds/macro_mov_bg.JPG",
  ];
  props.textAlignement = "left";
  const textClassName = props.textAlignement == "left" ? "left-text" : "centered-text";

  return (
    <div
      className="header-title page-title-division"
      style={{ backgroundImage: `url(${getExternalResource(imagesPaths[0])})` }}
    >
      <div className={`page-title-overlay-aligned ${textClassName}`}>
        <div>{props.title}</div>
      </div>
    </div>
  );
}
