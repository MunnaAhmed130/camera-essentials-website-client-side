import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";
import SkeletonProduct from "../../Shared/Skeletons/SkeletonProduct";

const ExploreSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://camera-essentials-website-server-side.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="explore__section">
      <h2>Explore the World of Fashionable Cameras</h2>
      {products.length ? (
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={3}
          xl={4}
          xxl={4}
          className="explore__products"
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
          {/* {Array(8).fill(<SkeletonProduct></SkeletonProduct>)} */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
            <SkeletonProduct key={n}></SkeletonProduct>
          ))}
        </Row>
      )}
    </section>
  );
};

export default ExploreSection;
