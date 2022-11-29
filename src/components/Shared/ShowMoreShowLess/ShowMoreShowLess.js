import React, { useState } from "react";

const ShowMoreShowLess = ({
  limit,
  anchorClass,
  className,
  more,
  less,
  children,
  expanded,
  truncatedEndingComponent,
}) => {
  const [showMoreShowLess, setShowMoreShowLess] = useState(expanded);
  const toggleBtn = () => {
    setShowMoreShowLess((prevState) => !prevState);
  };

  return (
    <div className={className}>
      {limit && showMoreShowLess ? children : children.substr(0, limit)}
      <span onClick={toggleBtn} className={anchorClass}>
        {showMoreShowLess ? ` ${less}` : `${truncatedEndingComponent}${more}`}
      </span>
    </div>
  );
};

export default ShowMoreShowLess;
