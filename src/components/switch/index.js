/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

const Switch = ({ label }) => {
  return (
    <label className="toggle">
      <span className="toggle-label">{label}</span>
      <input className="toggle-checkbox" type="checkbox" />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Switch;
