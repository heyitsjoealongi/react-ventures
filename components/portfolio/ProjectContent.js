/* Framework */
import * as React from "react";

/* Bootstrap Components */
import { Row, Col } from "reactstrap";

export const ProjectContent = (data) => (
  <Row>
    <Col lg={{ size: 12 }}>
      <h3 className="display-5 py-2">{data.heading}</h3>
      <p className="lead">{data.paragraph_one}</p>
      <p className="py-2">{data.paragraph_two}</p>
      <p className="py-2">{data.paragraph_three}</p>
    </Col>
  </Row>
);
