import {
  Caliber,
  CaliberTechinicalDetailskeyToDisplayTextmappings,
} from "@/app/data/movementsData";
import { Col, Container, Row } from "react-bootstrap";

import ImageGalleryComponent from "../common/ImageGalleryComponent";

export const CaliberDetailComponent = (caliberDetails: Caliber) => {
  return (
    <Container>
      <Row>
        <Col className="col-md-4 col-sm-4 col-4 container">
          <div className="container">{ImageGalleryComponent(caliberDetails.sliderImages)}</div>
        </Col>
        <Col>
          <div>
            <div className="info-text container-title">{caliberDetails.title}</div>
            <div  className="bottom-margin-m" style={{ whiteSpace: "pre-line" }}>
              {caliberDetails.description}
            </div>
          </div>
          <Row>
            {Object.entries(caliberDetails.details)
              .filter(([, value]) => value != undefined)
              .map(([key, value]) => {
                // Single Row with all the features spred by columns, that auto rearange
                const displayText = CaliberTechinicalDetailskeyToDisplayTextmappings?.[key] || key;
                return (
                  <Col
                    className="capitalize-text"
                    key={`caliber_information_${key}`}
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <b>{displayText}</b>
                    <p>{value}</p>
                  </Col>
                );
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
