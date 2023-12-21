import React, { useState } from "react";
import logo from "./assets/images/logo_runner.png";
import "./App.css";
import { Input, Text, CheckBox, Line, Button, Space } from "./components";
import { GoogleIcon, UserIcon } from "./assets/icons";

function App() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState({
    invalidEmail: false,
    emptyEmail: false,
    emptyPassword: false,
  });
  const [checked, setChecked] = useState(false);

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
    setSubmitted(true);

    let error = false;

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

    if (error) {
      alert("Error");
    } else {
      alert("Success");
    }
  };

  return (
    <div className="App">
      <div className="Gradient-border">
        <div className="Box-Container">
          <div className="Header-container">
            <img src={logo} className="App-logo" alt="logo" />
            <Space height={14} />
            <Text size={24.5}>Chào mừng bạn đến với Login Page</Text>
            <Space height={14} />
            <Text color={"#495057"}>Đăng nhập để tiếp tục</Text>
            <Space height={28} />
          </div>

          <div className="Form-container">
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

            <div className="Forget-password">
              <CheckBox
                label={"Ghi nhớ mật khẩu"}
                onClick={() => setChecked(!checked)}
                checked={checked}
              />
              <Text
                color={"#6366F1"}
                cursor={"pointer"}
                onClick={() => console.log("forgot")}
              >
                Quên mật khẩu
              </Text>
            </div>
            <Space height={20} />

            <Button haveIcon={false} onClick={handleSubmit}>
              Đăng nhập
            </Button>
          </div>
          <Space height={20} />

          <div className="Divider">
            <Line />
            <Text color={"#495057"} fontWeight={400} width={"100%"}>
              hoặc sử dụng
            </Text>
            <Line />
          </div>
          <Space height={20} />

          <Button haveIcon={true} Icon={<GoogleIcon />}>
            Đăng nhập bằng tài khoản google
          </Button>
          <Space height={16} />
          <Button haveIcon={true} Icon={<UserIcon />}>
            Đăng nhập bằng tài khoản MobiFone
          </Button>
          <Space height={30} />

          <div>
            <Text color={"#495057"} fontWeight={400}>
              {/* &nbsp; is the space*/}
              Bạn chưa có tài khoản? &nbsp;
            </Text>
            <Text
              color={"#6366F1"}
              fontWeight={400}
              cursor={"pointer"}
              onClick={() => console.log("Sign")}
            >
              Đăng ký tại đây
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
