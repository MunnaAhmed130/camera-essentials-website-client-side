import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Product from "../../Shared/Product/Product";
// import ExploreProducts from "../ExploreProducts/ExploreProducts";
import "./Explore.css";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const { darkMode } = useTheme();
  useEffect(() => {
    fetch("https://limitless-reaches-30016.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <div className="explore">
        <h2 className="products-header">
          Explore the World of Fashionable Cameras
        </h2>
        {/* {products.length ? (
          <Row xs={1} sm={1} md={2} lg={2} xl={3} className="explore-products">
            {products.map((product) => (
              <ExploreProducts
                key={product._id}
                product={product}
              ></ExploreProducts>
            ))}
          </Row>
        ) : (
          <CircularProgress />
        )} */}
        {products.length ? (
          <Row xs={1} sm={1} md={2} lg={2} xl={3} xxl={4} className="product">
            {products.map((product) => (
              <Product key={product.name} product={product}></Product>
            ))}
          </Row>
        ) : (
          <CircularProgress />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
