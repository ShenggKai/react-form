/* eslint-disable react/prop-types */
import React from "react";

const Space = (props) => {
  const { height, width } = props;

  const spaceStyle = {
    marginBottom: height || "0px",
    marginRight: width || "0px",
  };

  return <div style={spaceStyle}></div>;
};

export default Space;
