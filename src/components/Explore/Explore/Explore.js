import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Product from "../../Shared/Product/Product";
import SkeletonProduct from "../../Shared/Skeletons/SkeletonProduct";
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
      <div className="explore ">
        <h2 className="products-header">
          Explore the World of Fashionable Cameras
        </h2>

        {products.length ? (
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={3}
            xl={4}
            xxl={4}
            className="explore-products"
          >
            {products.map((product) => (
              <Product key={product.name} product={product}></Product>
            ))}
          </Row>
        ) : (
          <Row
            xxl={4}
            xl={4}
            lg={3}
            md={3}
            sm={2}
            xs={1}
            className="demo-products"
          >
            {/* {Array(8).fill(<SkeletonProduct></SkeletonProduct>)} */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
              <SkeletonProduct key={n}></SkeletonProduct>
            ))}
          </Row>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
