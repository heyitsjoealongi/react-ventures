/* Framework */
import * as React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import { Navigation } from "../components/Navigation";
import { PortfolioItem } from "../components/PortfolioItem";

export default class Portfolio extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
      projects: [
        {
          id: "0",
          image: "/react-ventures.png",
          title: "Project One",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          id: "1",
          image: "/react-ventures.png",
          title: "Project Two",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          id: "2",
          image: "/react-ventures.png",
          title: "Project Three",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          id: "3",
          image: "/react-ventures.png",
          title: "Project Four",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          id: "4",
          image: "/react-ventures.png",
          title: "Project Five",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          id: "5",
          image: "/react-ventures.png",
          title: "Project Six",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
      ],
    };
  }

  render() {
    const { projects } = this.state;

    return (
      <>
        <main>
          <Navigation />

          <Container className="py-5 my-5">
            <Row>
              <Col lg={{ size: 12 }}>
                <h2 className="display-4 py-2">💻 Portfolio</h2>
              </Col>
            </Row>
            <Row className="py-5 my-5 portfolio">
              {projects.map((data) => (
                <Col lg={{ size: 4 }} key={data.id}>
                  <PortfolioItem
                    key={data.id}
                    image={data.image}
                    title={data.title}
                    subtitle={data.subtitle}
                    href={data.href}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </main>
      </>
    );
  }
}
