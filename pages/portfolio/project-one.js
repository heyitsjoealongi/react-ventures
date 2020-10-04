/* Framework */
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

/* Bootstrap Components */
import {Container, Row, Col} from 'reactstrap';

/* Components */
import Navigation from '../../components/Navigation';
import ProjectHeader from '../../components/headers/project-one';
import ProjectContent from '../../components/contents/project-one';

/* Styles */
import '../../styles/theme.css';
import '../../styles/utilities.css';

export default function ProjectOne() {
  return (
    <>
    
      <Navigation />
      <ProjectHeader />
      
      <main>

        <Container>

          <Row noGutters>

            <ProjectContent />

          </Row>

        </Container>
      </main>

    </>
  )
}