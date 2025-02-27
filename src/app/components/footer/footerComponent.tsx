import { getExternalResource, getIconWithTextCentered } from "@/app/services/commonFunctions";
import Link from "next/link";
import { IoMdArrowRoundUp } from "react-icons/io";

export interface FooterComponentProps {
  backgroudImage?: string;
}

export default function FooterComponent(props?: FooterComponentProps) {
  const imagesPaths = [
    "public/assets/Backgrouds/Tissot_BG1.jpg",
    "public/assets/Backgrouds/Tissot_BG3.jpg",
    "public/assets/Backgrouds/TagHeuer_BG3.JPG",
    "public/assets/Backgrouds/macro_mov_bg.JPG",
  ];

  return (
    <section
      className="page-division title-white-color"
      style={{
        backgroundImage: `url(${getExternalResource(props?.backgroudImage || imagesPaths[1])})`,
      }}
    >
      <div className={`page-title-overlay-aligned centered-text`}>
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
    </section>
  );
}
