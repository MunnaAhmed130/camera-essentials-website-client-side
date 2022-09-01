import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { Row, Col } from "react-bootstrap";
import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const PurchaseItem = ({ product }) => {
  const { user } = useAuth();
  const { price, discount, img, name, description, rating } = product;
  const [value, setValue] = React.useState(product.rating);
  console.log(value);

  let itemPrice = price;
  let discountedPrice;
  if (discount) {
    discountedPrice = price - (price * discount) / 100;
    itemPrice = discountedPrice;
    console.log(discountedPrice);
  }
  return (
    <div className="purchase-item">
      <Row xs={1} sm={2} md={2} lg={2} xl={2} xxl={2} className="demo-products">
        <Col>
          <img className="item-img" src={img} alt="" />
        </Col>
        <Col>
          <div className="item-info">
            <h3>{name}</h3>
            <p>{description}</p>
            {/* {discount ? <p>{discountedPrice}</p> : <p>{itemPrice}</p>} */}
            <p>${itemPrice}</p>
            <Rating
              className="rating"
              // style={{ borderColor: "white" }}
              name="read-only"
              value={value}
              precision={0.1}
              emptyIcon={<StarIcon className="empty_rating" />}
              readOnly
            />
            <br />
            <Button variant="contained">button</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PurchaseItem;
