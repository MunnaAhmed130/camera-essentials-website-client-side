import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import SkeletonProduct from "../../Shared/Skeletons/SkeletonProduct";
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
  let limitArray = [];
  for (let i = 1; i <= limit; ++i) {
    limitArray.push(i);
  }
  // console.log(limitArray);
  // const arr = Array(limit).fill(14);
  // for (let a in arr) {
  //   console.log(arr.indexOf(a));
  // }
  // console.log(arr);
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
          lg={3}
          xl={3}
          xxl={4}
          className="demo-products"
        >
          {products.map((product) => (
            <Product key={product.name} product={product}></Product>
          ))}
        </Row>
      ) : (
        <Row
          xxl={4}
          xl={3}
          lg={3}
          md={2}
          sm={2}
          xs={1}
          className="demo-products"
        >
          {/* {Array(limit).fill(<SkeletonProduct key={limit.}></SkeletonProduct>)} */}
          {/* {limitArray.map((n) => (
            <SkeletonProduct key={n}></SkeletonProduct>
          ))} */}
        </Row>
      )}
    </div>
  );
};

export default Products;
