/* Framework */
import React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          emoji: "🔗",
          title: "LinkedIn",
          link: "/",
        },
        {
          emoji: "🔗",
          title: "Twitter",
          link: "/",
        },
        {
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
        <Navigation />

        <main>
          <Container className="py-5 my-5">
            <Row noGutters>
              <Col lg={{ size: 9 }}>
                <h2 className="display-4 py-2">🖖🏻 Contact</h2>
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
