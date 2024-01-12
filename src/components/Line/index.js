/* eslint-disable react/prop-types */
import React from "react";

const Line = (props) => {
  const { height, width, color, margin } = props;

  const lineStyle = {
    height: height || "1px",
    width: width || "100%",
    backgroundColor: color || "#ced4da",
    margin: margin,
    border: "0px solid",
  };

  return <hr style={lineStyle} />;
};

export default Line;
