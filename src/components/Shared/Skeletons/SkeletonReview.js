import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElements from "./SkeletonElements";

const SkeletonReview = () => {
  return (
    <div className="skeleton review review--skeleton">
      <SkeletonElements type="img review__img" />
      <div className="skeleton review__container">
        <div className="skeleton review__info">
          <SkeletonElements type="title" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonReview;
