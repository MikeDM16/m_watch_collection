import { getExternalResource } from "@/app/services/commonFunctions";

export interface BrandTitleDivisionProps {
  title: string;
  description?: string;
  founded?: string;
  website?: string;
  srcImage?: string;
  textAlignement?: string;
}

export default function BrandTitleDivisionComponent(props: BrandTitleDivisionProps) {
  const imagesPaths = [
    "public/assets/Backgrouds/Tissot_BG1.jpg",
    "public/assets/Backgrouds/Tissot_BG3.jpg",
    "public/assets/Backgrouds/TagHeuer_BG3.JPG",
    "public/assets/Backgrouds/macro_mov_bg.JPG",
  ];
  const textClassName = props.textAlignement == "left" ? "left-padded-text" : "centered-text";

  return (
    <section
      className="page-title-division title-white-color"
      style={{ backgroundImage: `url(${getExternalResource(props.srcImage || imagesPaths[0])})` }}
    >
      <div className={`page-title-overlay-aligned`}>
        <div className={`${textClassName}`}>
          <div className="header-title upper-text">{props.title}</div>
          <em>{props.description}</em>
          <div>{props.founded}</div>
          <a className="info-text title-white-color" href={props.website}>
            <b>Website</b>
          </a>
        </div>
      </div>
    </section>
  );
}
