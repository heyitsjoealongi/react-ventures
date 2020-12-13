import React from 'react';
import { Jumbotron, Row, Col, Container} from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Container fluid>

        <Jumbotron>
          <Row>
            
            <Col lg={{size: 12}}>
              <h1 className="display-3">Fluid jumbotron</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Col>

          </Row>
        </Jumbotron>

      </Container>
    </div>
  );
};

export default Header;
