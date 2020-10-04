/* Framework */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

/* Bootstrap Components */
import {Container, Row, Col} from 'reactstrap';

/* Components */
import Navigation from '../components/Navigation';
import ContactButtons from '../components/ContactButtons';

/* Styles */
import '../styles/theme.css';
import '../styles/utilities.css';

export default function Team() {
  return (
    <>

      <Navigation />
      
      <main>
          <Container className="py-5 my-5">

            <Row noGutters>

              <Col lg={{size: 9}}>
                <h2 className="display-4 py-2">🖖🏻 Contact</h2>
              </Col>

            </Row>

            <Row noGutters>

              <Col lg={{size: 9}}>
                <ContactButtons />
              </Col>

            </Row>

          </Container>
        </main>

    </>
  )
}
