import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import useTheme from "../../../Hooks/useTheme";
import Header from "../../Shared/Header/Header";
import PurchaseItem from "../../Shared/Purchase/PurchaseItem";
import Footer from "../../Shared/Footer/Footer";
import ExploreProductItem from "./ExploreProductItem";
import "../Explore/Explore.css";

const ExploreProduct = () => {
  const { _id } = useParams();
  const { darkMode } = useTheme();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://limitless-reaches-30016.herokuapp.com/products/${_id}`;
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [_id]);

  console.log(product);
  return (
    <div className={`purchase ${darkMode ? "dark" : "light"}`}>
      <Header />
      <div className="purchase_section">
        {/* <h2 className="purchase-heading">Place Your Order</h2> */}
        {product.name && (
          <ExploreProductItem product={product}></ExploreProductItem>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ExploreProduct;
