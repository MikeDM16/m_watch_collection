import {
  background_images_paths,
  getExternalResource,
  routeToCollectionBrandPage,
} from "@/app/services/commonFunctions";
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
  const textClassName = props.textAlignement == "left" ? "left-text" : "centered-text";

  const navigationEntries = Object.entries(props.navigationPath ?? {});
  const navigation = navigationEntries.map(([path, reference], idx) => {
    return (
      <span key={`span_navigation_${path}`}>
        <Link
          key={`ref_navigation_${path}`}
          className="info-text title-white-color link"
          href={reference}
        >
          {`${path}`}
        </Link>
        {idx < navigationEntries.length - 1 && <span>{" / "}</span>}
      </span>
    );
  });

  return (
    <div
      className={`page-division title-division`}
      style={{
        backgroundImage: `url(${getExternalResource(props.srcImage || background_images_paths[0])})`,
      }}
    >
      <div className={`page-title-overlay-aligned title-white-color ${textClassName}`}>
        {/** Layout need to be inside this div, because of the previous overlay */}
        <div className={`${textClassName} responsive-padded-left`}>
          <div className="">{navigation}</div>

          <div className="header-title upper-text">
            <Link
              key={`ref_navigation_brand`}
              className="info-text title-white-color link"
              href={props.navigationPath ? routeToCollectionBrandPage(props.title) : ""}
            >
              {props.title}
            </Link>
          </div>
          <em>{props.description}</em>
          <div>{props.founded}</div>
          <Link
            className="info-text title-white-color link"
            href={props.website ?? ""}
            target="_blank"
          >
            <b>{`${props.website ? "Website" : ""}`}</b>
          </Link>
        </div>
      </div>
    </div>
  );
}
