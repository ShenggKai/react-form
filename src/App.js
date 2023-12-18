import React from "react";
import logo from "./assets/images/logo_runner.png";
import "./App.css";
import { Input } from "./components";

function App() {
  return (
    <div className="App">
      <div className="Box-Container">
        <div className="Header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ marginBottom: "14px" }}></div>

          <span className="Text-welcome Font-medium">
            Chào mừng bạn đến với Login Page
          </span>
          <div style={{ marginBottom: "14px" }}></div>
          <span className="Text-login Font-14 Font-medium">
            Đăng nhập để tiếp tục
          </span>

          <div style={{ marginBottom: "28px" }}></div>
        </div>

        <div className="Form-container">
          <Input />
          <Input isPassword={true} />

          <div className="Forget-password">
            <div className="Container-check">
              <div className="Check-Box" />
              <label>Ghi nhớ mật khẩu</label>
            </div>
            <a>Quên mật khẩu</a>
          </div>
        </div>

        <div>hoặc sử dụng</div>
        {/* <div>hoặc sử dụng</div> */}

        <button>Đăng nhập bằng tài khoản google</button>
        <button>Đăng nhập</button>

        <div>
          <label>Bạn chưa có tài khoản?</label>
          <a>Đăng ký tại đây</a>
        </div>
      </div>
    </div>
  );
}

export default App;
