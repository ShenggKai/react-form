/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Select from "react-select";
import { ParagraphIcon, RadioIcon, CheckboxIcon, DropdownIcon, TriangleIcon } from "../../assets";
import "./style.css";

const Dropdown = ({ selected, onChange }) => {
  const options = [
    { value: "paragraph", label: "Paragraph", icon: <ParagraphIcon /> },
    { value: "multiple-choice", label: "Multiple choice", icon: <RadioIcon /> },
    { value: "checkbox", label: "Checkboxes", icon: <CheckboxIcon /> },
    { value: "dropdown", label: "Dropdown", icon: <DropdownIcon /> },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    onChange(event.value);

    switch (selected) {
      case "paragraph":
        setSelectedOption(options[0]);
        break;
      case "multiple-choice":
        setSelectedOption(options[1]);
        break;

      case "checkbox":
        setSelectedOption(options[2]);
        break;

      case "dropdown":
        setSelectedOption(options[3]);
        break;

      default:
        setSelectedOption(options[0]);
        break;
    }
  };

  const CustomOption = (props) => {
    const { data, innerProps, label } = props;
    return (
      <div {...innerProps} className="Dropdown-item">
        {data.icon}
        {label}
      </div>
    );
  };

  return (
    <Select
      options={options}
      components={{ Option: CustomOption, IndicatorsContainer: TriangleIcon }}
      defaultValue={selectedOption}
      onChange={handleChange}
      isSearchable={false}
      menuPlacement="auto"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          paddingRight: 10,
          width: 180,
          height: 45,
          cursor: "pointer",
          userSelect: "none",
        }),
      }}
    />
  );
};

export default Dropdown;
