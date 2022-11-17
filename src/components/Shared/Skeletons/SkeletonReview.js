import React from "react";
import SkeletonElements from "./SkeletonElements";

const SkeletonReview = () => {
  return (
    <div className="skeleton review review--skeleton">
      <SkeletonElements type="review__img" />
      <div className="skeleton review__info">
        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
      </div>
    </div>
  );
};

export default SkeletonReview;
