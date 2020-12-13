/* Framework */
import * as React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import { Navigation } from "../components/Navigation";
import { Buttons } from "../components/Buttons";

export default class Team extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
      links: [{ id: "0", emoji: "🤙", title: "Contact", link: "/contact" }],
    };
  }

  render() {
    const { links } = this.state;

    return (
      <>
        <main>
          <Navigation />

          <Container className="py-5 my-5">
            <Row>
              <Col lg={{ size: 9 }}>
                <h2 className="display-4 py-2">👻 Team</h2>
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

            <Row>
              <Col lg={{ size: 9 }}>
                <ul>
                  {links.map((data) => (
                    <li key={data.id}>
                      <Buttons
                        key={data.id}
                        emoji={data.emoji}
                        title={data.title}
                        link={data.link}
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </main>
      </>
    );
  }
}
