/* Framework */
import React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import Navigation from "../components/Navigation";
import Sidegation from "../components/Sidegation";

/* SVG */
import Brand from "../public/brand.svg";

export default function Home() {
  return (
    <>
      <Loader />
      <Meta />
      <Navigation />

      <main>
        <Container className="py-5 my-5">
          <Row noGutters className="v-align">
            <Col lg={{ size: 9 }}>
              <Brand className="py-1 my-1 company" />
              <h1 className="display-3 py-2">React Ventures</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>

            <Col lg={{ size: 3 }} className="hover-ist">
              <Sidegation />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
