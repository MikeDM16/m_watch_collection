import {
  background_images_paths,
  getExternalResource,
  routeToCollectionBrandPage,
} from "@/app/services/commonFunctions";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 768 });

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

  const titleClassName = isMobile ? "mobile-main-title-division" : "main-title-division";
  return (
    <div
      className={`page-division ${titleClassName}`}
      style={{
        backgroundImage: `url(${getExternalResource(props.srcImage || background_images_paths[0])})`,
      }}
    >
      <div className={`page-title-overlay-aligned title-white-color ${textClassName}`}>
        {/** Layout need to be inside this div, because of the previous overlay */}
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
  );
}
