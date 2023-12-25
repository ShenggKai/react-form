import React from "react";
import { Button, Text, Space } from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="Home-main">
      <section className="Home-section">
        <Text size={24} fontWeight={600}>
          Welcome to my homepage!
        </Text>
        <Space height={10} />

        <Text size={16} fontWeight={400}>
          Đăng nhập thành công
        </Text>
        <Space height={50} />

        <Button onClick={() => navigate("/")}>Đăng xuất</Button>
      </section>
    </main>
  );
};

export default HomePage;
