import {
  getIconWithTextCentered,
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaArchive } from "react-icons/fa";
import { MdAddCircleOutline, MdEmail, MdInsertChart, MdPerson } from "react-icons/md";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { RiAuctionLine } from "react-icons/ri";

import MobileMenuToggle from "./MobileMenuToggle";

interface NavBarItem {
  reference: string;
  icon: IconType;
  text: string;
}

export default function HeaderNavBar() {
  const vercel_analytics =
    process.env.NODE_ENV === "production" ? (
      <div>
        <Analytics />
        <SpeedInsights />
      </div>
    ) : undefined;

  const references: NavBarItem[] = [
    {
      reference: routeToMainPageHeader(),
      icon: FaArchive,
      text: "Collection",
    },
    {
      reference: routeToMainPageAllBrandListing(),
      icon: PiMagnifyingGlassPlus,
      text: "All Brands",
    },
    {
      reference: "/#PreviousSales",
      icon: RiAuctionLine,
      text: "Auctions",
    },
    {
      reference: "/#AboutMe",
      icon: MdPerson,
      text: "About Me",
    },
    {
      reference: "/#Contacts",
      icon: MdEmail,
      text: "Contacts",
    },
  ];

  if (process.env.NODE_ENV !== "production") {
    references.push({
      reference: "/admin/create-model",
      icon: MdAddCircleOutline,
      text: "Add Model",
    });
    references.push({
      reference: "/admin/sales-report",
      icon: MdInsertChart,
      text: "Sales Report",
    });
  }
  return (
    <>
      <nav id="start" className="fixed top-0 w-full bg-gray-900 z-50">
        <div className="flex flex-wrap items-center gap-4 px-4 py-1">
          <Link href={routeToMainPageHeader()} className="no-underline">
            <div className="header-navbar-title">M Watch Collection</div>
          </Link>
          <MobileMenuToggle>
            <ul className="flex flex-col lg:flex-row my-2 lg:my-0 gap-3 max-h-[70dvh] overflow-auto list-none p-0 pb-2">
              {references.map((entry) => {
                return (
                  <li key={`nav_link_${entry.reference}`}>
                    <Link
                      href={entry.reference}
                      className="header-navbar-entry header-navbar-link no-underline"
                    >
                      {getIconWithTextCentered(entry.icon, entry.text)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </MobileMenuToggle>
        </div>
      </nav>
      {vercel_analytics}
    </>
  );
}
