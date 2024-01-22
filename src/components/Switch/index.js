/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

const Switch = ({ label, itemID, changeRequired }) => {
  const handleClick = (itemID) => {
    changeRequired(itemID);
  };

  return (
    <label className="toggle">
      <span className="toggle-label">{label}</span>
      <input className="toggle-checkbox" type="checkbox" onClick={() => handleClick(itemID)} />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Switch;
