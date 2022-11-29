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
      {limit && showMoreShowLess ? children : children.substr(0, limit)}&nbsp;
      <span onClick={toggleBtn}>
        {showMoreShowLess ? (
          <span className={anchorClass}>{`${less}`}</span>
        ) : (
          <span>
            {`${truncatedEndingComponent}`}
            <span className={anchorClass}>{`${more}`}</span>
          </span>
        )}
      </span>
    </div>
  );
};

export default ShowMoreShowLess;
