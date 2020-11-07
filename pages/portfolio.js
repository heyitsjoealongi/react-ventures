/* Framework */
import React from "react";

/* Bootstrap Components */
import { Container, Row, Col } from "reactstrap";

/* Components */
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import PortfolioItem from "../components/PortfolioItem";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: "/brand-placeholder.png",
          title: "Project One",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          image: "/brand-placeholder.png",
          title: "Project Two",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          image: "/brand-placeholder.png",
          title: "Project Three",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          image: "/brand-placeholder.png",
          title: "Project Four",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          image: "/brand-placeholder.png",
          title: "Project Five",
          subtitle: "Venture",
          href: "/portfolio/project-one",
        },
        {
          image: "/brand-placeholder.png",
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
        <Loader />

        <main>
          <Navigation />

          <Container className="py-5 my-5">
            <Row noGutters>
              <Col lg={{ size: 12 }}>
                <h2 className="display-4 py-2">💻 Portfolio</h2>
              </Col>
            </Row>
            <Row noGutters className="py-5 my-5 portfolio">
              {projects.map((data) => (
                <Col lg={{ size: 4 }}>
                  <PortfolioItem
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

export default Portfolio;
