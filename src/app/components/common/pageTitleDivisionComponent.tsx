import { getExternalResource } from "@/app/services/common_functions";

export interface TitleDivisionProps {
  title: string;
  src_image?: string;
}

export default function PageTitleDivisionComponent(props: TitleDivisionProps) {
  const imagesPaths = [
    "public/assets/Backgrouds/Tissot_BG1.jpg",
    "public/assets/Backgrouds/Tissot_BG3.jpg",
    "public/assets/Backgrouds/TagHeuer_BG3.JPG",
    "public/assets/Backgrouds/macro_mov_bg.JPG",
  ];

  return (
    <div
      className="page-title-division"
      style={{ backgroundImage: `url(${getExternalResource(imagesPaths[0])})` }}
    >
      <div className="page-title-overlay-aligned">
        <div className="page-title centered-text">{props.title}</div>
      </div>
    </div>
  );
}
