/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-select";
import {
  ParagraphIcon,
  RadioIcon,
  CheckboxIcon,
  DropdownIcon,
  TriangleIcon,
} from "../../assets/icons";
import "./style.css";

const Dropdown = ({ onChange }) => {
  const options = [
    { value: "paragraph", label: "Paragraph", icon: <ParagraphIcon /> },
    { value: "mt-choice", label: "Multiple choice", icon: <RadioIcon /> },
    { value: "checkbox", label: "Checkboxes", icon: <CheckboxIcon /> },
    { value: "dropdown", label: "Dropdown", icon: <DropdownIcon /> },
  ];

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
      defaultValue={options[0]}
      onChange={(event) => onChange(event.value)}
      isSearchable={false}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          paddingRight: 10,
          width: 180,
          height: 45,
          cursor: "pointer",
        }),
      }}
    />
  );
};

export default Dropdown;
