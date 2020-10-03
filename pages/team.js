import Link from 'next/link'

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Navigation from '../components/Navigation';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/utilities.css';

export default function Team() {
  return (
    <>

      <Navigation />
      
      <main>
          <Container className="py-5 my-5">

            <Row noGutters className="v-align">

              <Col md={{size: 7}} className="negative-offsets-n2">
                <img className="py-1" src="http://via.placeholder.com/150x150" alt=""></img>
                <h2 className="display-4 py-2">team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="py-2 hover-ing">
                  <Link href="/">
                    <a target="_blank">
                      🦄 <span>website.com</span>
                    </a>
                  </Link>
                </div>
              </Col>

            </Row>

          </Container>
        </main>

    </>
  )
}
