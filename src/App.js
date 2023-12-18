import React from "react";
import logo from "./assets/images/logo_runner.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Chào mừng bạn đến với Login Page</p>
      <p>Đăng nhập để tiếp tục</p>
    </div>
  );
}

export default App;
