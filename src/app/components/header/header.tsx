import { getIconWithTextCentered } from "@/app/services/commonFunctions";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IconType } from "react-icons";
import { FaArchive } from "react-icons/fa";
import { MdEmail, MdPerson } from "react-icons/md";
import { PiMagnifyingGlassPlus } from "react-icons/pi";

interface NavBarItem {
  reference: string;
  icon: IconType;
  text: string;
}

export default function HeaderNavBar() {
  const references: NavBarItem[] = [
    {
      reference: "#CollectionItems",
      icon: FaArchive,
      text: "Collection",
    },
    {
      reference: "#AllBrandsItems",
      icon: PiMagnifyingGlassPlus,
      text: "All Brands",
    },
    {
      reference: "#AboutMe",
      icon: MdPerson,
      text: "About Me",
    },
    {
      reference: "#Contants",
      icon: MdEmail,
      text: "Contants",
    },
  ];
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark" fixed="top" sticky="top">
      <Container fluid>
        <Navbar.Brand href="../#">
          <div className="header-navbar-title">M Watch Collection</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="header-navbar-entry header-navbar-link">
          <Nav className="my-lg-0 my-2 me-auto" style={{ maxHeight: "100px" }} navbarScroll>
            {references.map((entry) => {
              return (
                <Nav.Link key={`nav_link_${entry.reference}`} href={`../${entry.reference}`}>
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
  );
}
