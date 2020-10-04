/* Framework */
import Link from 'next/link';
import React from 'react';

/* Bootstrap Components */
import {Card, CardImg, CardBody,CardTitle, CardSubtitle, Button, Col} from 'reactstrap';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
       this.state ={
           projects :[
               {
                image:"/brand-placeholder.png",
                title:"Project One",
                subtitle:"Venture",
                button:"/portfolio/project-one"
               },
               {
                image:"/brand-placeholder.png",
                title:"Project Two",
                subtitle:"Venture",
                button:"/portfolio/project-one"
               },
               {
                image:"/brand-placeholder.png",
                title:"Project Three",
                subtitle:"Venture",
                button:"/portfolio/project-one"
               },
               {
                image:"/brand-placeholder.png",
                title:"Project Four",
                subtitle:"Venture",
                button:"/portfolio/project-one"
               },
               {
                image:"/brand-placeholder.png",
                title:"Project Five",
                subtitle:"Venture",
                button:"/portfolio/project-one"
               },
               {
                image:"/brand-placeholder.png",
                title:"Project Six",
                subtitle:"Venture",
                button:"/portfolio/project-one"
               }
           ]
       }
    }

    render() {
        const {projects} = this.state;

        return (
          <>
            {projects.map((data) => (
              <Link href={data.button}>
                <Col lg={{size: 4}}>
                  <Card className="cards">
                    <CardImg top width="100%" src={data.image} alt={data.title} />
                    <CardBody>
                      <CardTitle>
                        <h4>{data.title}</h4>
                      </CardTitle>
                      <CardSubtitle className="my-3 sub-one">
                        <span>{data.subtitle}</span>
                      </CardSubtitle>
                      <Button className="clicking">
                        <span>See More</span>
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Link>
            ))}
          </>
        );
    }
}

export default PortfolioItem;