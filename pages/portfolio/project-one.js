/* Framework */
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

/* Bootstrap Components */
import {Container, Row, Col} from 'reactstrap';

/* Components */
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

/* Styles */
import '../../styles/theme.css';
import '../../styles/utilities.css';

/* SVG */
import Brand from '../../public/brand.svg';

export default function ProjectOne() {
  return (
    <>
    
      <Navigation />
      <Header />
      
      <main>

        <Container>

          <Row noGutters>

            <Col lg={{size: 12}}>
              <Brand className="py-1 my-1 company"/>
              <h3 className="display-5 py-2">Team</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>

          </Row>

        </Container>
      </main>

    </>
  )
}