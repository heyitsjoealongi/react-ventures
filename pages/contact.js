/* Framework */
import * as React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import { Navigation } from "../components/Navigation";
import { Buttons } from "../components/Buttons";

export default class Contact extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
      links: [
        {
          id: "0",
          emoji: "🔗",
          title: "LinkedIn",
          link: "/",
        },
        {
          id: "2",
          emoji: "🔗",
          title: "Twitter",
          link: "/",
        },
        {
          id: "3",
          emoji: "🔗",
          title: "Email",
          link: "/",
        },
      ],
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
                <h2 className="display-4 py-2">🤙 Contact</h2>
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
