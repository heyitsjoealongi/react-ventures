import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from '../components/Navigation'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/utilities.css';

export default function Portfolio() {
  return (
    <>
    
      <Navigation />
      
      <main>
        <Container className="py-5 my-5">

          <Row noGutters className="v-align">

            <Col xs={{ order: 1 }} md={{size: 12}}>
              
            </Col>

          </Row>

        </Container>
      </main>

    </>
  )
}
