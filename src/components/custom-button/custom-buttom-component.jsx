import React from "react";
import "./custom-buttom.styles.scss";

const CusttomButton = ({ children, isGoogleSignin, ...otherProps }) => (
  <button
    className={`${isGoogleSignin ? "google-signin" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CusttomButton;
