import React, { useEffect, useState } from "react";
// import axios from "axios";
import Header from "../Header/Header";
import { useParams } from "react-router";
import { Button } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import useTheme from "../../../Hooks/useTheme";
// import PurchaseItem from "./PurchaseItem";
import "./Purchase.css";
// import ExploreProductItem from "../../Explore/ExploreProduct/ExploreProductItem";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const Purchase = () => {
  const { _id } = useParams();
  const { user } = useAuth();
  const { darkMode } = useTheme();
  const [product, setProduct] = useState([]);
  const [success, setSuccess] = useState(false);
  // const [value, setValue] = React.useState(rating);
  // useEffect(() => {
  //   fetch(`https://camera-essentials-website-server-side-cir7qf38f-munnaahmed130.vercel.app/products/${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, [_id]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://camera-essentials-website-server-side-cir7qf38f-munnaahmed130.vercel.app/products/${_id}`;
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [_id]);

  console.log(product);
  const { name, price, discount, description, rating } = product;

  // initial Info
  const initialInfo = {
    userName: user.displayName,
    email: user.email,
    productName: product.name,
    // productPrice: itemPrice,
    // description: product.description,
    // rating: rating,
    key: product._id,
    img: product.img,
  };
  // const [value, setValue] = React.useState(rating);

  const [purchase, setPurchase] = useState(initialInfo);
  const { userName, email, productName, productPrice, key, img } = initialInfo;
  // console.log(initialInfo);
  const [userInfo, setUserInfo] = useState({});
  const { address, phone } = userInfo;
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...purchase };
    newInfo[field] = value;
    setPurchase(newInfo);
    setUserInfo(newInfo);
    // console.log(newInfo);
  };
  const handleSubmit = (e) => {
    //collect data
    const purchaseInfo = {
      userName,
      email,
      productName,
      // description,
      productPrice,
      address: address,
      phone: phone,
      key,
      img,
    };
    console.log(purchaseInfo);
    const proceed = window.confirm("Are you sure, you want to Purchase?");
    if (proceed) {
      axios
        .post(
          "https://camera-essentials-website-server-side-cir7qf38f-munnaahmed130.vercel.app/purchases",
          purchaseInfo
        )
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            setSuccess(true);
          }
        });
      e.preventDefault();
    }
  };

  console.log(product.price);
  return (
    <div className={`purchase ${darkMode ? "dark" : "light"}`}>
      <Header />
      <div className="purchase_section">
        <h2 className="purchase-heading">Place Your Order</h2>
        {/* {product.name && (
          <ExploreProductItem product={product}></ExploreProductItem>
        )} */}
        <div className="purchase-info-container">
          <Container fluid className="purchase-row-container">
            <Row className="purchase-col-container">
              <Col md={6} sm={12} lg={6} className="purchase-img-container">
                <img className="purchase-img" src={img} alt="" />
              </Col>
              <Col md={6} sm={12} lg={6} className="purchase-form-container">
                {success && (
                  <Alert severity="success">Order Placed Successfully</Alert>
                )}
                <form className="purchase-form" onSubmit={handleSubmit}>
                  <input name="userName" defaultValue={user.displayName} />{" "}
                  <br />
                  <input
                    name="email"
                    defaultValue={user.email}
                    variant="outlined"
                  />{" "}
                  <br />
                  <input
                    name="productName"
                    value={productName}
                    variant="outlined"
                  />{" "}
                  <br />
                  <input
                    name="address"
                    onBlur={handleOnBlur}
                    placeholder="Address"
                    defaultValue=""
                    variant="outlined"
                  />{" "}
                  <br />
                  <input
                    name="phone"
                    onBlur={handleOnBlur}
                    placeholder="Phone"
                    defaultValue=""
                    variant="outlined"
                  />{" "}
                  <br />
                  <input
                    type="number"
                    name="price2"
                    value={price}
                    placeholder="price"
                    variant="outlined"
                  />{" "}
                  <br />
                  <Button
                    type="submit"
                    className="purchase-btn"
                    size="large"
                    variant="contained"
                  >
                    Purchase
                  </Button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
