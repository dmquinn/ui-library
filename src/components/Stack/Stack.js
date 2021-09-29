import React from "react";
import PropTypes from "prop-types";

const Stack = ({ children, spacing = 2, direction = "row", wrap = false }) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };
  return <div style={style}>{children}</div>;
};

Stack.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  handleClick: PropTypes.func,
};
export default Stack;
