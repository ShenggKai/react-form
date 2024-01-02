/* eslint-disable react/prop-types */
import React from "react";
import { Text, Space, Layout } from "../../components";
import "./style.css";

const HomePage = () => {
  return (
    <Layout>
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
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
