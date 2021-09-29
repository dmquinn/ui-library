import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  background = "black",
  size = "md",
  handleClick,
  color = "white",
  borderRadius = "10px",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    borderRadius,
    background,
    color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <button style={style} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  handleClick: PropTypes.func,
};
export default Button;
