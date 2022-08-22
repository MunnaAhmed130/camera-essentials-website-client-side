import { CircularProgress } from "@mui/material";

// import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let limit;
  // let count;
  // = window.innerWidth || document.documentElement.clientWidth;
  // window.addEventListener("resize", function (e) {
  //   viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  //   console.log(viewportWidth);
  // });
  // console.log(viewportWidth);
  // console.log(count);

  viewportWidth >= 1400 ? (limit = 8) : (limit = 6);
  useEffect(() => {
    fetch(
      `https://limitless-reaches-30016.herokuapp.com/products/query?limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [limit]);
  // console.log(products)
  return (
    <div className="products">
      <h2 className="products-header">
        Explore The World Of Fashionable Cameras
      </h2>
      {products.length ? (
        <Row
          xs={1}
          sm={2}
          md={2}
          lg={2}
          xl={3}
          xxl={4}
          className="demo-products"
        >
          {products.map((product) => (
            <Product key={product.name} product={product}></Product>
          ))}
        </Row>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Products;
