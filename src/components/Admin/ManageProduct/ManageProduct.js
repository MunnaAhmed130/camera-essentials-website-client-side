import React from "react";
import { Button, Rating } from "@mui/material";
import { Card, Col } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
import ShowMoreShowLess from "../../Shared/ShowMoreShowLess/ShowMoreShowLess";

const ManageProduct = ({ product, success, handleDeleteOrder }) => {
  const { name, img, description, _id, price, rating } = product;
  console.log(product);
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
        <Card.Body className="card__info">
          <Card.Title className="title">{name}</Card.Title>
          {/* <Card.Text className="card-description ">{description}</Card.Text> */}
          <ShowMoreShowLess
            className="description"
            limit={120}
            more="show more"
            less="show less"
            anchorClass="see_more"
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            {description}
          </ShowMoreShowLess>
          <Rating
            className="rating--filled"
            name="read-only"
            value={rating}
            precision={0.1}
            emptyIcon={<StarIcon className="rating--empty" />}
            readOnly
          />
          <p className="price">
            Price: <span className="dollar-sign"></span>&#x24;
            <span className="price--main">{price}</span>
          </p>
          <Button
            onClick={() => handleDeleteOrder(_id)}
            className="delete-btn"
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
