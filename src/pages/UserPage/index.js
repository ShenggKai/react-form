import React from "react";
import { Layout } from "../../components";
import "./style.css";

const UserPage = () => {
  return (
    <Layout>
      <div className="user-page">
        <h1>User Profile</h1>
        <div className="user-details">
          <p>
            <strong>Name:</strong> Dat Nguyen
          </p>
          <p>
            <strong>Email:</strong> user1@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default UserPage;
