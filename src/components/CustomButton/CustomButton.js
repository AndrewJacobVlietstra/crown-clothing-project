import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ children, google, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${google ? 'google' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
