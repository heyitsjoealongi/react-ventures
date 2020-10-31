/* Framework */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";

/* Styles */
import "../styles/theme.css";
import "../styles/utilities.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          emoji: "🖖🏻",
          title: "Contact",
          link: "/contact",
        },
      ],
    };
  }

  render() {
    const { links } = this.state;

    return (
      <>
        <Navigation />

        <main>
          <Container className="py-5 my-5">
            <Row noGutters>
              <Col lg={{ size: 9 }}>
                <h2 className="display-4 py-2">🦄 Team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>

            <Row noGutters>
              <Col lg={{ size: 9 }}>
                {links.map((data) => (
                  <Buttons
                    emoji={data.emoji}
                    title={data.title}
                    link={data.link}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </main>
      </>
    );
  }
}

export default Contact;
