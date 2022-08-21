import { CircularProgress, Button } from "@mui/material";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { name, img, description, _id, price } = product;
  if (!product.length) {
    <CircularProgress />;
  }
  const productInfo = description.slice(0, 120);
  return (
    <Col className="px-0">
      <Card className="m-3 card product">
        <Card.Img variant="top" src={img} className="card-img" />
        <Card.Body>
          <Card.Title className="card-name">{name}</Card.Title>
          {/* <Card.Text className="card-description">{productInfo}</Card.Text> */}
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

export default Product;
