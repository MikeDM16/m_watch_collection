import { getExternalResource, getIconWithTextCentered } from "@/app/services/common_functions";
import Container from "react-bootstrap/Container";
import { IoMdPerson } from "react-icons/io";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageComponent from "../common/ImageComponent";
import PageTitleDivisionComponent from "../common/pageTitleDivisionComponent";

export default function AboutMeContainer() {
  const aboutMe_photo = "public/assets/Backgrouds/me.JPG";

  return (
    <div>
      <div id="AboutMe">{PageTitleDivisionComponent({ title: "About Me" })}</div>

      <Container className="centered-text">
        <Row>
          <Col className="col-2">
            <div>
              <ImageComponent
                src={getExternalResource(aboutMe_photo)}
                alt="Photo of Me"
                style={{ maxHeight: "250px", width: "auto" }}
              />
            </div>
          </Col>
          <Col className="col-10">
            <div className="page-title">
              <p>
                {"They don't only tell the the time."}
                <br></br>
                {"They also tell a history!"}
              </p>
            </div>
            <div>
              <div>
                <b>{getIconWithTextCentered(IoMdPerson, "Miguel dias Miranda")}</b>
                <p>
                  Being collecting, restoring and documenting watches since around 2015. Nowadays, I
                  mostly search for vintage and dress watch models.
                </p>
                <p>
                  Part of the collection includes various Portuguese vintage brands, but also some
                  well known watchmaker brands.
                </p>
                <p>
                  Dreaming with a Mark II Speedmaster. Or any other Speedmaster, if it matters...
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
