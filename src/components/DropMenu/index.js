/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { ParagraphIcon, RadioIcon, CheckboxIcon, DropdownIcon } from "../../assets";
import "./style.css";

const DropMenu = ({ indexSelected, setIndexSelected, changeQuestionType, ItemID }) => {
  const options = [
    { value: "paragraph", label: "Paragraph", icon: <ParagraphIcon /> },
    { value: "multiple-choice", label: "Multiple choice", icon: <RadioIcon /> },
    { value: "checkbox", label: "Checkboxes", icon: <CheckboxIcon /> },
    { value: "dropdown", label: "Dropdown", icon: <DropdownIcon /> },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (index) => {
    setIndexSelected(index);
    changeQuestionType(ItemID, options[index].value);

    // close the menu when an item clicked
    setMenuOpen(!isMenuOpen);
  };

  // handle click outside the dropdown to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Dropdown-menu" ref={dropdownRef}>
      <div className="Select-container" onClick={handleClickMenu}>
        <div className="Icon-label">
          {options[indexSelected].icon}
          <span>{options[indexSelected].label}</span>
        </div>
        <div className={isMenuOpen ? "Caret Caret-rotate" : "Caret"}></div>
      </div>
      <ul className={isMenuOpen ? "Dropdown-item-container Opened" : "Dropdown-item-container"}>
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={indexSelected === index ? "Item-active" : "none"}
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropMenu;
