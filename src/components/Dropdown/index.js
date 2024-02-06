/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Dropdown = ({ parentItem, childItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        style={{ cursor: "pointer", marginBottom: "10px" }}
      >
        {parentItem}
      </div>
      {isOpen && (
        <ul>
          {childItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
