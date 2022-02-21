import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ children, btnColor, ...otherProps }) => {
  return (
    <button
      className="custom-button"
      style={{ backgroundColor: btnColor }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
