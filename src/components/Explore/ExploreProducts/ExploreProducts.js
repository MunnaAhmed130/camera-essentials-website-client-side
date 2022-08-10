import { Link } from "react-router-dom";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import "./ExploreProducts.css";

const ExploreProducts = ({ product }) => {
  const { name, img, description, _id, price } = product;
  return (
    <Col className="px-0 ">
      <Card className="m-3 card product">
        <Card.Img variant="top" src={img} className="card-img" />
        <Card.Body>
          <Card.Title className="card-name">{name}</Card.Title>
          <Card.Text className="card-description">{description}</Card.Text>
          <h6>Price: &#x24;{price}</h6>
          <Link className="dynamic-route" to={`/purchase/${_id}`}>
            <Button size="large" variant="contained" className="buy-btn">
              Buy Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExploreProducts;
