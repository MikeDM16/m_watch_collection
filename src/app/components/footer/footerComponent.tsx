import RandomBackgroundDiv from "@/app/components/common/RandomBackgroundDiv";
import { background_images_paths, getIconWithTextCentered } from "@/app/services/commonFunctions";
import Link from "next/link";
import { IoMdArrowRoundUp } from "react-icons/io";

export interface FooterComponentProps {
  images?: string[];
}

export default function FooterComponent(props?: FooterComponentProps) {
  return (
    <RandomBackgroundDiv
      images={props?.images}
      fallback={background_images_paths[1]}
      className={`page-division title-division title-white-color`}
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
          <em>{"Copyright © 2018-2026, MWatchCollection. All Rights Reserved."}</em>
        </div>
      </div>
    </RandomBackgroundDiv>
  );
}
