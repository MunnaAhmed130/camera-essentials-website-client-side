import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Row, Col } from "react-bootstrap";
import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ExploreProductItem = ({ product }) => {
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
    <div className="explore-item">
      <Row xs={1} sm={2} md={2} lg={2} xl={2} xxl={2} className="demo-products">
        <Col>
          <img className="item-img" src={img} alt="" />
        </Col>
        <Col>
          <div className="item-info">
            <h3 className="item_title">{name}</h3>
            <p className="item_description">{description}</p>
            {/* {discount ? <p>{discountedPrice}</p> : <p>{itemPrice}</p>} */}
            {!discount ? (
              <p className="item_price">
                {" "}
                <span className="main_price"></span> &#x24;{price}
              </p>
            ) : (
              <p className="item_price">
                Price:{" "}
                <span className="discounted_price">
                  &#x24;
                  {discountedPrice}
                </span>{" "}
                <del className="delete-text">&#x24;{price}</del>
                {/* {viewportWidth < 300 && <br />} */}
              </p>
            )}
            <div
              id="user_card"
              className={`nav-item dropdown rating_dropdown  ${open && "show"}`}
            >
              {/* <div className="dropdown-btn" onClick={() => setOpen(!open)}> */}
              <div
                // href="#"
                id="basic-nav-dropdown"
                className="dropdown-toggle "
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
                <div className="dropdown_img pt-5 pb-4"></div>
                <div className="dropdown_item ">
                  {/* <h5 className="user_name">{userName}</h5> */}
                </div>
              </div>
              {/* )} */}
            </div>

            <br />
            <div className="item_btn_container">
              <Button variant="contained">BUY NOW</Button>
              <Button variant="contained">ADD TO CART</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ExploreProductItem;
