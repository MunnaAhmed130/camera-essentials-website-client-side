import React from "react";
import { Button } from "@mui/material";
import { Card, Col } from "react-bootstrap";

const ManageProduct = ({ product, success, handleDeleteOrder }) => {
  const { name, img, description, _id, price } = product;

  return (
    <div className="p-0">
      <Col className="p-2">
        <Card className="m-1 ">
          <Card.Img variant="top" src={img} className="card-img" />
          <Card.Body>
            <Card.Title className="card-name">{name}</Card.Title>
            {/* <Card.Text className="card-description">{description}</Card.Text> */}
            <h6>Price: &#x24;{price}</h6>
            <Button
              onClick={() => handleDeleteOrder(_id)}
              variant="outlined"
              color="error"
            >
              DELETE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ManageProduct;
