import {
  getIconWithTextCentered,
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IconType } from "react-icons";
import { FaArchive } from "react-icons/fa";
import { MdEmail, MdPerson } from "react-icons/md";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { RiAuctionLine } from "react-icons/ri";

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
  return (
    <>
      <Navbar id="start" expand="lg" className="navbar-dark bg-dark" fixed="top" sticky="top">
        <Container fluid>
          <Navbar.Brand href={routeToMainPageHeader()}>
            <div className="header-navbar-title">M Watch Collection</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="header-navbar-entry header-navbar-link">
            <Nav className="my-lg-0 my-2 me-auto" style={{ maxHeight: "50dvh" }} navbarScroll>
              {references.map((entry) => {
                return (
                  <Nav.Link key={`nav_link_${entry.reference}`} href={`${entry.reference}`}>
                    {" "}
                    <div className="header-navbar-entry header-navbar-link">
                      {getIconWithTextCentered(entry.icon, entry.text)}
                    </div>
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {vercel_analytics}
    </>
  );
}
