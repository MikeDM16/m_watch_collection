import { getIconWithTextCentered } from "@/app/services/common_functions";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IconType } from "react-icons";
import { FaArchive } from "react-icons/fa";
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
  ];
  return (
    <Navbar expand="lg" className="bg-dark" fixed="top" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="header-navbar-title">M Watch Collection</div>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
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
