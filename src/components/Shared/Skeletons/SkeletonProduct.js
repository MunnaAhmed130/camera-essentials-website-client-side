import React from "react";
import useTheme from "../../../Hooks/useTheme";
import Shimmer from "./Shimmer";
import SkeletonElements from "./SkeletonElements";

const SkeletonProduct = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`product-container-col ${darkMode ? "dark" : "light"}`}>
      <div className="product-container my-3">
        <SkeletonElements type="product_img" />
        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
        <SkeletonElements type="btn" />
        <Shimmer></Shimmer>
      </div>
    </div>
  );
};

export default SkeletonProduct;
