import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from '../components/Navigation'
import Sidegation from '../components/Sidegation'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/home.css';

export default function Home() {
  return (
    <>
    
      <Navigation />
      
      <main>
        <Container className="py-5 my-5">

          <Row noGutters className="v-align">

            <Col xs={{ order: 1 }} md={{size: 7}}>
              <img className="py-1" src="http://via.placeholder.com/150x150" alt=""></img>
              <h1 className="display-3 py-2">React Ventures</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            
            <Col xs={{ order: 2 }} md={{size: 3}} className="hover-ist">
              <Sidegation />
            </Col>

          </Row>

        </Container>
      </main>

    </>
  )
}
