import React from "react";

function StoreCard({
  title,
  headline,
  titleClassName,
  headlineClassName,
  imageused,
  boxClassName,
}) {
  return (
    <div>
      <div className={boxClassName}>
        <img src={imageused} alt=" " class="" />
        <h3 className={titleClassName}>{title}</h3>
        <p className={headlineClassName}>{headline}</p>
      </div>
    </div>
  );
}

export default StoreCard;
