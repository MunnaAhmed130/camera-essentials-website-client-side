import { Button } from "@mui/material";
import React from "react";
import { Col, Card } from "react-bootstrap";

const AllOrder = ({ allOrder, handleDeleteOrder }) => {
  // function size() {
  // }
  // let elemWidth = document.getElementById("col").clientWidth;
  // console.log(elemWidth);

  // size();
  return (
    // <div className="single-order">
    <Col className="single-order">
      <Card className="card">
        <Card.Img variant="top" className="card-img" src={allOrder?.img} />
        <Card.Body>
          <Card.Title className="title">{allOrder?.productName}</Card.Title>
          {/* <Card.Text>{allOrder?.description}</Card.Text> */}
          <Button className="order-btn" variant="outlined">
            Ship
          </Button>
          <Button
            className="order-btn"
            variant="outlined"
            onClick={() => {
              handleDeleteOrder(allOrder?._id);
            }}
            color="error"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
    // </div>
  );
};

export default AllOrder;
