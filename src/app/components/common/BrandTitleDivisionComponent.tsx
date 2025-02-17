import { getExternalResource } from "@/app/services/commonFunctions";
import Link from "next/link";

export interface BrandTitleDivisionProps {
  title: string;
  description?: string;
  founded?: string;
  website?: string;
  srcImage?: string;
  textAlignement?: string;
  navigationPath?: Record<string, string>;
}

export default function BrandTitleDivisionComponent(props: BrandTitleDivisionProps) {
  const imagesPaths = [
    "public/assets/Backgrouds/Tissot_BG1.jpg",
    "public/assets/Backgrouds/Tissot_BG3.jpg",
    "public/assets/Backgrouds/TagHeuer_BG3.JPG",
    "public/assets/Backgrouds/macro_mov_bg.JPG",
  ];
  const textClassName = props.textAlignement == "left" ? "left-padded-text" : "centered-text";

  const navigation = Object.entries(props.navigationPath ?? {}).map(([path, reference]) => {
    return (
      <span key={`span_navigation_${path}`}>
        <Link
          key={`ref_navigation_${path}`}
          className="info-text title-white-color link"
          href={reference}
        >
          {`${path}`}
        </Link>
        <span>{" / "}</span>
      </span>
    );
  });

  return (
    <section
      className="page-title-division title-white-color"
      style={{ backgroundImage: `url(${getExternalResource(props.srcImage || imagesPaths[0])})` }}
    >
      <div className={`page-title-overlay-aligned`}>
        <div className={`${textClassName}`}>
          <div className="">{navigation}</div>

          <div className="header-title upper-text">{props.title}</div>
          <em>{props.description}</em>
          <div>{props.founded}</div>
          <Link className="info-text title-white-color link" href={props.website ?? ""} target="_blank">
            <b>{`${props.website ? "Website" : ""}`}</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
