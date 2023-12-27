/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = () => {
  const logged = localStorage.getItem("isLoggedIn");
  if (logged === "true") {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = () => {
  const auth = isLoggedIn();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
