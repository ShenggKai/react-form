import React from "react";
import { Button, Layout } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../actions";
import "./style.css";

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/login");
  };

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

      <div className="logout-button">
        <Button onClick={handleLogout}>Đăng xuất</Button>
      </div>
    </Layout>
  );
};

export default UserPage;
