/* Framework */
import React from "react";
import Link from "next/link";

/* Bootstrap Components */
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap";

const PortfolioItem = (data) => (
  <Link href={data.href}>
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
  </Link>
);

export default PortfolioItem;
