import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import SkeletonProduct from "../../Shared/Skeletons/SkeletonProduct";

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

  viewportWidth >= 1200 ? (limit = 8) : (limit = 6);
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
      <div>
        <h2>Fashionable New Cameras</h2>
        <h6 className="text-uppercase">Discount Up to 30%</h6>
      </div>

      {products.length ? (
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={3}
          xl={4}
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
          xl={4}
          lg={3}
          md={3}
          sm={2}
          xs={1}
          className="demo-products"
        >
          {/* {Array(limit).fill(<SkeletonProduct key={limit.}></SkeletonProduct>)} */}
          {limitArray.map((n) => (
            <SkeletonProduct key={n}></SkeletonProduct>
          ))}
        </Row>
      )}
      {/* <Row xxl={4} xl={4} lg={3} md={3} sm={2} xs={1} className="demo-products">
        {limitArray.map((n) => (
          <SkeletonProduct key={n}></SkeletonProduct>
        ))}
      </Row> */}
    </div>
  );
};

export default Products;
