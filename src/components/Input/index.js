/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.css";
import { Text } from "../../components";
import { HideIcon, ShowIcon } from "../../assets";

const Input = ({ isPassword = false, value, onChangeEmail, OnchangePassword, isError, OnchangeConfirmPassword, isConfirmPassword = false }) => {
  const [showPass, setShowPass] = useState(true);
  const [password, setPassword] = useState(value.password || ""); 
  const [confirmPassword, setConfirmPassword] = useState(value.confirm_password || ""); 

  const handleShow = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="Container">
      <Text size={17.5}>
        {isPassword ? "Mật khẩu" : isConfirmPassword ? "Xác nhận mật khẩu" : "Tài khoản" }
        <span className="Form-required">*</span>
      </Text>
      <div style={{ marginBottom: "7px" }}></div>

      {isPassword || isConfirmPassword ? (
        <>
          <div className="Input-container">
            <input
              className="Input"
              placeholder={isPassword ? "Password" : "Confirm Password"}
              type={showPass ? "password" : "text"}
              name={isPassword ? "password" : "confirm_password"}
              value={isPassword ? password : confirmPassword}
              onChange={isPassword ? (e) => 
                { setPassword(e.target.value); 
                OnchangePassword(e); } : (e) => 
                  { setConfirmPassword(e.target.value); 
                  OnchangeConfirmPassword(e); }}
            />
            <div className="Icon" onClick={handleShow}>
              {showPass ? <ShowIcon /> : <HideIcon />}
            </div>
          </div>
          {isError.emptyPassword && isPassword && (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Mật khẩu không được để trống
            </Text>
          )}
          {isError.emptyName && isConfirmPassword && (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Tên không được để trống
            </Text>
          )}
          {isError.emptyConfirmPassword && isConfirmPassword && (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Xác nhận mật khẩu không được để trống
            </Text>
          )}
        </>
      ) : (
        <div className="Input-container">
          <input
            type="email"
            className="Input"
            placeholder="Email"
            name="email"
            value={value.email}
            onChange={onChangeEmail}
          />
          {isError.emptyEmail && (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Tài khoản không được để trống
            </Text>
          )}
          {isError.invalidEmail && (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Email không đúng định dạng
            </Text>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
