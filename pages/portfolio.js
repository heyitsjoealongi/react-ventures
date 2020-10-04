/* Framework */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

/* Bootstrap Components */
import {Container, Row, Col} from 'reactstrap';

/* Components */
import Navigation from '../components/Navigation';
import PortfolioItem from '../components/PortfolioItem';

/* Styles */
import '../styles/theme.css';
import '../styles/utilities.css';

export default function ProjectOne() {
  return (
    <>
    
      <Navigation />
      
      <main>
        <Container className="py-5 my-5">
        <Row noGutters>
      
            <Col lg={{size: 12}}>
                <h2 className="display-4 py-2">💻 Portfolio</h2>
            </Col>

        </Row>

          <Row noGutters className="py-5 my-5 portfolio">

            <PortfolioItem />

          </Row>

        </Container>
      </main>

    </>
  )
}