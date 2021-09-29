import React from "react";
import "./Header.css";

const Button = ({ children, ...rest }) => {
  return <h2 className="header">{children}</h2>;
};

export default Button;
