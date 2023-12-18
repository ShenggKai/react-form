import React from "react";
import logo from "./assets/images/logo_runner.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Box-Container">
        <div className="Logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Text-welcome">Chào mừng bạn đến với Login Page</div>
        <div>Đăng nhập để tiếp tục</div>

        <div className="Form-container">
          <label>Tài khoản</label>
          <input></input>
          <label>Mật khẩu</label>
          <input></input>

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
