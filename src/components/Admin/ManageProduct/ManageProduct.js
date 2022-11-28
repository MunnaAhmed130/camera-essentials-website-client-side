import React from "react";
import { Button } from "@mui/material";
import { Card, Col } from "react-bootstrap";
import ShowMoreShowLess from "../../Shared/ShowMoreShowLess/ShowMoreShowLess";
import ShowMoreText from "react-show-more-text";

const ManageProduct = ({ product, success, handleDeleteOrder }) => {
  const { name, img, description, _id, price } = product;
  var text = description.split("\n", 1);
  // var breakIndex = description.indexOf("\n");
  // var firstLine = description.substr(0, breakIndex);
  // text = text.substr(0, text.indexOf("\n"));
  console.log(text);
  return (
    // <div className="p-0">
    <Col className="single-order">
      <Card className="">
        <Card.Img variant="top" src={img} className="card-img" />
        <Card.Body>
          <Card.Title className="title">{name}</Card.Title>
          {/* <Card.Text className="card-description ">{description}</Card.Text> */}
          <ShowMoreShowLess
            className="description"
            limit={100}
            more="show more"
            less="show less"
            anchorClass="see_more"
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            {description}
          </ShowMoreShowLess>
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
    // </div>
  );
};

export default ManageProduct;
