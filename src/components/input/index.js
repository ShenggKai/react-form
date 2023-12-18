/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.css";
import { HideIcon, ShowIcon } from "../../assets/icons";

const Input = ({ isPassword = false }) => {
  const [showPass, setShowPass] = useState(true);

  const handleShow = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="Container">
      <label className="Font-17 Font-medium">
        {isPassword ? "Mật khẩu" : "Tài khoản"}
        <span className="Form-required">*</span>
      </label>
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
          <input className="Input" placeholder="Username" />
        </div>
      )}
    </div>
  );
};

export default Input;
