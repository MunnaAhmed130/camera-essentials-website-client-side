import React from "react";
import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const PurchaseItem = ({ product }) => {
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
    <div>
      <img className="item-img" src={img} alt="" />
      <h3>{name}</h3>
      {/* {discount ? <p>{discountedPrice}</p> : <p>{itemPrice}</p>} */}
      <p>{itemPrice}</p>
      <Rating
        className="rating"
        // style={{ borderColor: "white" }}
        name="read-only"
        value={value}
        precision={0.1}
        emptyIcon={<StarIcon className="empty_rating" />}
        readOnly
      />
      <p>{description}</p>
      <Button variant="contained">button</Button>
    </div>
  );
};

export default PurchaseItem;
