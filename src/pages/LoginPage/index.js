/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.css";
import { Input, Text, Button, Space } from "../../components";
import { FormLogo } from "../../assets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const user = {
    user_name: "user1@gmail.com",
    password: "a",
    role: "admin",
  };
  const [isError, setIsError] = useState({
    invalidEmail: false,
    emptyEmail: false,
    emptyPassword: false,
  });

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));

    setIsError((values) => ({
      ...values,
      invalidEmail: false,
      emptyEmail: false,
    }));
  };

  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));

    setIsError((values) => ({
      ...values,
      emptyPassword: false,
    }));
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    let wrongPass = false;

    if (values.email.trim() === "") {
      setIsError((values) => ({
        ...values,
        emptyEmail: true,
      }));

      error = true;
    }

    if (values.password.trim() === "") {
      setIsError((values) => ({
        ...values,
        emptyPassword: true,
      }));

      error = true;
    }

    if (!isEmailValid(values.email)) {
      setIsError((values) => ({
        ...values,
        invalidEmail: true,
      }));

      error = true;
    }

    if (values.email !== user.user_name || values.password !== user.password) {
      wrongPass = true;
    }

    if (!error && wrongPass) {
      toast.error("Tên đăng nhập hoặc mật khẩu không đúng", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (error) {
      return;
    } else {
      if (user.role == "admin") {
        dispatch(userLogin());
        navigate("/admin-home");
      } else if (user.role == "user") {
        dispatch(userLogin());
        navigate("/user-home");
      }
    }
  };

  return (
    <div className="App">
      <div className="Gradient-border">
        <div className="Box-Container">
          <div className="Header-container">
            <img src={FormLogo} className="App-logo" alt="Form logo" />
            <Space height={14} />
            <Text size={24.5}>
              Chào mừng bạn đến với Trổ tài dự đoán &nbsp;
            </Text>
            <Space height={14} />
            <Text color={"#495057"}>Đăng nhập để tiếp tục</Text>
            <Space height={28} />
          </div>

          <div className="Login-container">
            <Input
              value={values}
              isError={isError}
              onChangeEmail={handleEmailInputChange}
            />
            <Input
              isPassword={true}
              value={values}
              isError={isError}
              OnchangePassword={handlePasswordInputChange}
            />

            <Space height={20} />

            <div
              style={{
                padding: "0px 7px 0px 7px",
              }}
            >
              <Button haveIcon={false} onClick={handleSubmit}>
                Đăng nhập
              </Button>
            </div>
          </div>
          <Space height={20} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
