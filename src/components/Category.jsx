import React from "react";

function Category({ text, buttonClassName, paragraphClassName, Icon }) {
  return (
    <div>
      {" "}
      <button type="button" className={`rounded-md ${buttonClassName}`}>
        {Icon && <Icon />}
        <p className={paragraphClassName}>{text}</p>
      </button>
    </div>
  );
}

export default Category;
