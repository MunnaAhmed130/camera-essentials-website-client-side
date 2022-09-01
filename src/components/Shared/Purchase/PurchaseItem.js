import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Row, Col } from "react-bootstrap";
import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const PurchaseItem = ({ product }) => {
  const { user } = useAuth();
  const { price, discount, img, name, description, rating } = product;
  const [open, setOpen] = useState(false);
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
            <div
              id="user_card"
              className={`nav-item dropdown user_dropdown  ${open && "show"}`}
            >
              {/* <div className="dropdown-btn" onClick={() => setOpen(!open)}> */}
              <div
                // href="#"
                id="basic-nav-dropdown"
                className="dropdown-toggle nav-link user_link"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <Rating
                  className="rating"
                  // style={{ borderColor: "white" }}
                  name="read-only"
                  value={value}
                  precision={0.1}
                  emptyIcon={<StarIcon className="empty_rating" />}
                  readOnly
                />
              </div>
              {/* </div> */}

              {/* {open && ( */}
              <div className={`dropdown-menu ${open && "show"}`}>
                <div className="dropdown_img pt-5 pb-4">
                  <img
                    className="profile-img "
                    src={user.photoURL}
                    alt="profile-pic"
                  />
                </div>
                <div className="dropdown_item ">
                  {/* <h5 className="user_name">{userName}</h5> */}
                </div>
              </div>
              {/* )} */}
            </div>

            <br />
            <Button variant="contained">button</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PurchaseItem;
