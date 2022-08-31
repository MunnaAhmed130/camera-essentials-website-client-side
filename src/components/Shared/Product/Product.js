import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { name, img, _id, rating, discount, price } = product;

  const [value, setValue] = React.useState(rating);
  // const discount = -20;
  const discountPrice = (price * discount) / 100;
  const discountedPrice = price - discountPrice;
  let viewportWidth = window.innerWidth;
  // if (!product.length) {
  //   <CircularProgress />;
  // }
  // const productInfo = description.slice(0, 120);
  return (
    <Col className="card_col">
      <Card className="my-3 card product">
        {/* {img.length && ( */}
        <div className="card_img_container">
          <Link className="img_route" to={`/purchase/${_id}`}>
            <Card.Img variant="top" src={img} className="card-img" />
            {discount && <span className="discount_ribbon">- {discount}%</span>}
          </Link>
        </div>

        {/* )} */}
        <Card.Body>
          <Card.Title className="card-name">{name}</Card.Title>
          {/* <Card.Text className="card-description">{productInfo}</Card.Text> */}
          <Rating
            className="rating"
            // style={{ borderColor: "white" }}
            name="read-only"
            value={value}
            precision={0.1}
            emptyIcon={<StarIcon className="empty_rating" />}
            readOnly
          />
          {!discount ? (
            <p className="card_price">Price: &#x24;{price}</p>
          ) : (
            <p className="card_price">
              Price: &#x24;
              {discountedPrice}&nbsp;
              <del className="delete-text">&#x24;{price}</del>
              {viewportWidth < 300 && <br />}
            </p>
          )}
          <Link className="dynamic-route" to={`/purchase/${_id}`}>
            <Button size="large" variant="contained" className="buy-btn">
              Add To Cart
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
