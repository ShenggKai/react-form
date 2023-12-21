/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.css";
import { Text } from "../../components";
import { HideIcon, ShowIcon } from "../../assets/icons";

const Input = ({ isPassword = false }) => {
  const [showPass, setShowPass] = useState(true);

  const handleShow = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="Container">
      <Text size={17.5}>
        {isPassword ? "Mật khẩu" : "Tài khoản"}
        <span className="Form-required">*</span>
      </Text>
      <div style={{ marginBottom: "7px" }}></div>

      {isPassword ? (
        <div className="Input-container">
          <input
            className="Input"
            placeholder="Password"
            type={showPass ? "password" : "text"}
          />
          <div className="Icon" onClick={handleShow}>
            {showPass ? <ShowIcon /> : <HideIcon />}
          </div>
        </div>
      ) : (
        <div className="Input-container">
          <input type="email" className="Input" placeholder="Email" />
        </div>
      )}
    </div>
  );
};

export default Input;
