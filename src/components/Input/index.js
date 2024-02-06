/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.css";
import { Text } from "../../components";
import { HideIcon, ShowIcon } from "../../assets";

const Input = ({
  isPassword = false,
  value,
  onChangeEmail,
  OnchangePassword,
  isError,
}) => {
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
        <>
          <div className="Input-container">
            <input
              className="Input"
              placeholder="Password"
              type={showPass ? "password" : "text"}
              name="password"
              value={value.password}
              onChange={OnchangePassword}
            />
            <div className="Icon" onClick={handleShow}>
              {showPass ? <ShowIcon /> : <HideIcon />}
            </div>
          </div>
          {isError.emptyPassword && (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Mật khẩu không được để trống
            </Text>
          )}
        </>
      ) : (
        <>
          <div className="Input-container">
            <input
              type="email"
              className="Input"
              placeholder="User name"
              name="email"
              value={value.email}
              onChange={onChangeEmail}
            />
          </div>
          {isError.emptyEmail ? (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Tài khoản không được để trống
            </Text>
          ) : (
            isError.invalidEmail && (
              <Text size={12} color={"#b32b23"} fontWeight={400}>
                Email không đúng định dạng
              </Text>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Input;
