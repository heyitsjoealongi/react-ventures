/* Framework */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

/* Bootstrap Components */
import { Container, Row, Col } from 'reactstrap';

/* Components */
import Navigation from '../components/Navigation';

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
              
            </Col>

          </Row>

        </Container>
      </main>

    </>
  )
}