/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { changeRequired } from "../../actions";
import "./style.css";

const Switch = ({ label, questionID }) => {
  const dispatch = useDispatch();

  const handleClick = (questionID) => {
    dispatch(changeRequired(questionID));
  };

  return (
    <label className="toggle">
      <span className="toggle-label">{label}</span>
      <input className="toggle-checkbox" type="checkbox" onClick={() => handleClick(questionID)} />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Switch;
