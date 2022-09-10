import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <div className="card_img_container">
          <Card.Img
            variant="top"
            src={img}
            width="200"
            height="200"
            className="card_img"
          />
          {discount && <span className="discount_ribbon">- {discount}%</span>}
        </div>

        <Card.Body className="product_card_body">
          <Link className="dynamic-route" to={`/explore_product/${_id}`}>
            <Card.Title className="card_name">{name}</Card.Title>
          </Link>

          <Rating
            className="rating"
            name="read-only"
            value={value}
            precision={0.1}
            emptyIcon={<StarIcon className="empty_rating" />}
            readOnly
          />
          {!discount ? (
            <p className="card_price">
              Price: <span className="dollar_sign">&#x24;</span>
              <span className="main_price">{price}</span>
            </p>
          ) : (
            <p className="card_price">
              Price: <span className="dollar_sign">&#x24;</span>
              <span className="main_price">{discountedPrice}</span>
              &nbsp;
              <del className="delete-text">{price}</del>
              {viewportWidth < 300 && <br />}
            </p>
          )}
          <Link className="dynamic-route" to={`/explore_product/${_id}`}>
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
