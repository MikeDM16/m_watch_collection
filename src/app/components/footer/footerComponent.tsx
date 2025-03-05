import {
  background_images_paths,
  getExternalResource,
  getIconWithTextCentered,
} from "@/app/services/commonFunctions";
import Link from "next/link";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

export interface FooterComponentProps {
  backgroudImage?: string;
}

export default function FooterComponent(props?: FooterComponentProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const titleClassName = isMobile ? "mobile-main-title-division" : "main-title-division";

  return (
    <div
      className={`page-division  ${titleClassName} title-white-color`}
      style={{
        backgroundImage: `url(${getExternalResource(props?.backgroudImage || background_images_paths[1])})`,
      }}
    >
      <div className={`page-division page-title-overlay-aligned centered-text`}>
        {/** Layout need to be inside this div, because of the previous overlay */}
        <div>
          <Link className="info-text title-white-color link" href="#start">
            {getIconWithTextCentered(IoMdArrowRoundUp, "To the top")}
          </Link>
          <div className="header-title upper-text info-text title-white-color">
            {"M Watch Collection"}
          </div>
          <em>{"Copyright © 2018-2025, MWatchCollection. All Rights Reserved."}</em>
        </div>
      </div>
    </div>
  );
}
