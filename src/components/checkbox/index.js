/* eslint-disable react/prop-types */
import React from "react";
import { CheckIcon } from "../../assets";
import { Text } from "../../components";
import "./style.css";

const CheckBox = (props) => {
  const { checked, label, onClick } = props;

  return (
    <div className="Container-check">
      <div className={checked ? "Check-Box fill" : "Check-Box"} onClick={onClick}>
        {checked && <CheckIcon />}
      </div>
      <Text color={"#495057"} fontWeight={400}>
        {label}
      </Text>
    </div>
  );
};

export default CheckBox;
