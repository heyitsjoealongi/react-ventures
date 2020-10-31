/* Framework */
import React from "react";
import Image from 'next/image';

/* Bootstrap Components */
import { Row, Col, Jumbotron } from "reactstrap";

const Headers = (data) => (
  <Jumbotron className="hero" style={{ backgroundImage: `url(${data.image})` }}>
    <Row>
      <Col lg={{ size: 12 }}>
        <h1 className="display-3 title">{data.title}</h1>
      </Col>
    </Row>
  </Jumbotron>
);

export default Headers;
