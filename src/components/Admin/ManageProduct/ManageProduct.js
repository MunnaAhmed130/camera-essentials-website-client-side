import React from "react";
import { Button } from "@mui/material";
import { Card, Col } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";

const ManageProduct = ({ product, success, handleDeleteOrder }) => {
  const { name, img, description, _id, price } = product;

  return (
    // <div className="p-0">
    <Col className="single-order">
      <Card className="m-1 ">
        <Card.Img variant="top" src={img} className="card-img" />
        <Card.Body>
          <Card.Title className="title">{name}</Card.Title>
          {/* <Card.Text className="card-description ">{description}</Card.Text> */}
          <ShowMoreText
            /* Default options */
            lines={2}
            more="Show more"
            less="Show less"
            className="card-description"
            anchorClass="see_more"
            // onClick={this.executeOnClick}
            expanded={false}
            // width less value looks bad in responsiveness
            width={500}
            truncatedEndingComponent={"... "}
          >
            {description}
          </ShowMoreText>
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
