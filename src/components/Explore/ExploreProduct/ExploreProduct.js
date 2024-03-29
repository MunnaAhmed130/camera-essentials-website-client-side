import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useTheme from "../../../Hooks/useTheme";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import ExploreProductItem from "./ExploreProductItem";
import "../Explore/Explore.css";
import SkeletonProductItem from "../../Shared/Skeletons/SkeletonProductItem";

const ExploreProduct = () => {
  const { _id } = useParams();
  const { darkMode } = useTheme();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://camera-store-server.vercel.app/products/${_id}`;
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [_id]);

  console.log(product);
  return (
    <div className={`explore-product ${darkMode && "dark"}`}>
      <Header />
      <section className="explore-product-section">
        {/* <h2 className="purchase-heading">Place Your Order</h2> */}
        {product.name ? (
          <ExploreProductItem product={product}></ExploreProductItem>
        ) : (
          <SkeletonProductItem></SkeletonProductItem>
        )}
        {/* <SkeletonProductItem></SkeletonProductItem> */}
      </section>
      <Footer />
    </div>
  );
};

export default ExploreProduct;
