/* Framework */
import React from 'react';

/* Bootstrap Components */
import {Container, Row, Col, Jumbotron} from 'reactstrap';

class ProjectOneHeader extends React.Component {
    constructor(props) {
      super(props);
        this.state ={
          content :[
            {
              image:"/brand-placeholder.png",
              title:"Project One"
            },
          ]
        }
    }

    render() {
        const {content} = this.state;

        return (
          <>
            <Container fluid>
              {content.map((data) => (
              <Jumbotron className="hero" style={{backgroundImage: `url(${data.image})`}}>
                <Row>
      
                  <Col lg={{size: 12}}>
                    <h1 className="display-3 title">{data.title}</h1>
                  </Col>

                </Row>
              </Jumbotron>
              ))}

            </Container>
          </>
        );
    }
}

export default ProjectOneHeader;