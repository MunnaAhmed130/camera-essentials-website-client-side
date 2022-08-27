import React from "react";
import useTheme from "../../../Hooks/useTheme";
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
      </div>
    </div>
  );
};

export default SkeletonProduct;
