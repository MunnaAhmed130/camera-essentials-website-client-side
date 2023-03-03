import React from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
// import { Row } from "react-bootstrap";
// import Product from "../../Shared/Product/Product";
import SkeletonProduct from "../../Shared/Skeletons/SkeletonProduct";

const Dummy = ({ products }) => {
  //   const products = [""];
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let limit;
  viewportWidth >= 1200 ? (limit = 8) : (limit = 6);
  let limitArray = [];
  for (let i = 1; i <= limit; ++i) {
    limitArray.push(i);
  }
  return (
    <div>
      {products.length ? (
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={3}
          xl={4}
          xxl={4}
          className="demo__products"
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
          className="demo__products"
        >
          {/* {Array(limit).fill(<SkeletonProduct key={limit.}></SkeletonProduct>)} */}
          {limitArray.map((n) => (
            <SkeletonProduct key={n}></SkeletonProduct>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Dummy;
