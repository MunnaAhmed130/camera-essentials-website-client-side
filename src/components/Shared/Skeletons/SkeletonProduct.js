import React from "react";
import useTheme from "../../../Hooks/useTheme";
import Shimmer from "./Shimmer";
// importing SkeletonElements gives access to Skeletons.css
// so there is no need to import Skeleton.css so just
import SkeletonElements from "./SkeletonElements";

const SkeletonProduct = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`product_container_col ${darkMode && "dark"}`}>
      <div className="product_container mt-3">
        <SkeletonElements type="product_img" />
        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
        <SkeletonElements type="btn" />
        <Shimmer></Shimmer>
      </div>
    </div>
  );
};

export default SkeletonProduct;
