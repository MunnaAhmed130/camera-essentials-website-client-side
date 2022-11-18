import React from "react";
import useTheme from "../../../Hooks/useTheme";
import Shimmer from "./Shimmer";
// importing SkeletonElements gives access to Skeletons.css
// so there is no need to import Skeleton.css so just
import SkeletonElements from "./SkeletonElements";

const SkeletonProduct = () => {
  return (
    <div className={` col--skeleton col `}>
      <div className="product--skeleton ">
        <SkeletonElements type="img" />
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
