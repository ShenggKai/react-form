import React, { useState } from "react";
import logo from "./assets/images/logo_runner.png";
import "./App.css";
import { Input, Text, CheckBox, Line } from "./components";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <div className="Box-Container">
        <div className="Header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ marginBottom: "14px" }}></div>

          <Text size={24.5}>Chào mừng bạn đến với Login Page</Text>
          <div style={{ marginBottom: "14px" }}></div>
          <Text color={"#495057"}>Đăng nhập để tiếp tục</Text>

          <div style={{ marginBottom: "28px" }}></div>
        </div>

        <div className="Form-container">
          <Input />
          <Input isPassword={true} />

          <div className="Forget-password">
            <CheckBox
              label={"Ghi nhớ mật khẩu"}
              onClick={() => setChecked(!checked)}
              checked={checked}
            />
            <Text color={"#6366F1"} onClick={() => console.log("forgot")}>
              Quên mật khẩu
            </Text>
          </div>
        </div>

        <div className="Divider">
          <Line />
          <Text color={"#495057"} fontWeight={400} width={"100%"}>
            hoặc sử dụng
          </Text>
          <Line />
        </div>

        <button>Đăng nhập bằng tài khoản google</button>
        <button>Đăng nhập</button>

        <div>
          <Text color={"#495057"} fontWeight={400}>
            Bạn chưa có tài khoản?
          </Text>
          <Text
            color={"#6366F1"}
            fontWeight={400}
            onClick={() => console.log("Sign")}
          >
            Đăng ký tại đây
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
