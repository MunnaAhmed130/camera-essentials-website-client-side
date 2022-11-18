import React, { useState } from "react";
// import useAuth from "../../../Hooks/useAuth";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import useTheme from "../../../Hooks/useTheme";

const ExploreProductItem = ({ product }) => {
  // const { user } = useAuth();
  const { darkMode } = useTheme();
  const { price, discount, img, name, _id, description, rating } = product;
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(rating);
  console.log(value);

  let itemPrice = price;
  let discountedPrice;
  if (discount) {
    discountedPrice = price - (price * discount) / 100;
    itemPrice = discountedPrice;
    // console.log(discountedPrice);
  }
  return (
    <div className={`explore-item ${darkMode && "dark"} `}>
      <Container className="item__container" fluid>
        <Row xs={1} sm={1} md={2} lg={2} xl={2} xxl={2} className=" item__row">
          <Col md={12} lg={4} xl={4} xxl={4} className="item_img_wrapper">
            <img className="item__img" src={img} alt="" />
          </Col>
          <Col md={12} lg={8} xl={8} xxl={8} className="item__info__wrapper">
            <div className="item__info">
              <h3 className="item__title">{name}</h3>
              <p className="item__description">{description}</p>
              {/* {discount ? <p>{discountedPrice}</p> : <p>{itemPrice}</p>} */}
              {!discount ? (
                <p className="item__price">
                  Price:&nbsp;<span className="dollar-sign">&#x24;</span>
                  <span className="price--main">{itemPrice}</span>
                </p>
              ) : (
                <p className="item_price">
                  Price:&nbsp;<span className="dollar_sign">&#x24;</span>
                  <span className="price--main">{itemPrice}</span>
                  &nbsp;
                  <del className="price--deleted">{price}</del>
                  {/* {viewportWidth < 300 && <br />} */}
                </p>
              )}
              {/* <div
                id="user_card"
                className={`nav-item dropdown rating_dropdown  ${
                  open && "show"
                }`}
              >
                <div className="dropdown-btn" onClick={() => setOpen(!open)}>
                  <div
                    // href="#"
                    id="basic-nav-dropdown"
                    className="dropdown-toggle "
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                  > */}
              <Rating
                className="rating--filled"
                // style={{ borderColor: "white" }}
                name="read-only"
                value={value}
                precision={0.1}
                emptyIcon={<StarIcon className="rating--empty" />}
                readOnly
              />
              {/* </div> */}
              {/* </div>

                {open && (
                  <div className={`dropdown-menu ${open && "show"}`}>
                    <div className="dropdown_img pt-5 pb-4"></div>
                    <div className="dropdown_item ">
                    </div>
                  </div>
                )}
              </div> */}
              <span className="rating_count">{rating} out of 960 Ratings</span>
              <br />
              <div className="item_btn_container">
                <Link className="dynamic-route " to={`/purchase/${_id}`}>
                  <Button variant="contained">BUY NOW</Button>
                </Link>
                <Link className="dynamic-route" to={`/purchase/${_id}`}>
                  <Button variant="contained">ADD TO CART</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExploreProductItem;
