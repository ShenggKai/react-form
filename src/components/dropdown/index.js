/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

const Dropdown = ({ onChange }) => {
  return (
    <div className="Dropdown-container">
      <select title="question_type" onChange={(e) => onChange(e.target.value)}>
        <option key="1" value="paragraph">
          Paragraph
        </option>
        <option key="2" value="mt-choice">
          Multiple choice
        </option>
        <option key="3" value="checkbox">
          Checkboxes
        </option>
        <option key="4" value="dropdown">
          Dropdown
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
