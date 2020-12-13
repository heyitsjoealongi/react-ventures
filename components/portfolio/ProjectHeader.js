/* Framework */
import * as React from "react";

/* Bootstrap Components */
import { Row, Col } from "reactstrap";

export const ProjectHeader = (data) => (
  <Row className="hero" style={{ backgroundImage: `url(${data.image})` }}>
    <Col lg={{ size: 12 }}>
      <h1 className="display-3 title">{data.title}</h1>
    </Col>
  </Row>
);
