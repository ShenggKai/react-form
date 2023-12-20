/* eslint-disable react/prop-types */
import React from "react";

const Text = (props) => {
  const { size = 14, color, fontWeight, onClick, width, cursor } = props;

  const textStyle = {
    fontSize: size,
    color: color || "#212121",
    fontWeight: fontWeight || "500",
    width: width || "auto",
    cursor: cursor || "default",
  };

  return (
    <label style={textStyle} onClick={onClick}>
      {props.children}
    </label>
  );
};

export default Text;
