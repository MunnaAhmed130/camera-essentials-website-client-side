import { CircularProgress } from "@mui/material";

// import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const limit = 6;
  useEffect(() => {
    fetch(
      `https://limitless-reaches-30016.herokuapp.com/products/query?limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products)
  return (
    <div className="">
      <h2 className="products-header">
        Explore the World of fashionable Cameras!
      </h2>
      {products.length ? (
        <Row xs={1} sm={1} md={2} lg={2} xl={3} className="products">
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
