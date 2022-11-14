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
  // https://images2.imgbox.com/1f/20/K6kMXzul_o.png
  return (
    <Col>
      <Card className="product">
        <div className="img-wrapper">
          <Card.Img
            variant="top"
            src={img}
            width="200"
            height="200"
            className="product__img"
          />
          {discount && <span className="discount-ribbon">- {discount}%</span>}
        </div>

        <Card.Body>
          <Link className="dynamic-route" to={`/explore_product/${_id}`}>
            <Card.Title className="product__name">{name}</Card.Title>
          </Link>

          <Rating
            className="rating--filled"
            name="read-only"
            value={value}
            precision={0.1}
            emptyIcon={<StarIcon className="rating--empty" />}
            readOnly
          />
          {!discount ? (
            <p className="product__price">
              Price: <span className="dollar-sign">&#x24;</span>
              <span className="price--main">{price}</span>
            </p>
          ) : (
            <p className="product__price">
              Price: <span className="dollar-sign">&#x24;</span>
              <span className="price--main">{discountedPrice}</span>
              &nbsp;
              <del className="price--deleted">{price}</del>
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
