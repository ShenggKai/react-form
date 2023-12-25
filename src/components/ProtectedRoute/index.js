/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import { HomePage } from "../../pages";

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

  return auth ? <HomePage /> : <Navigate to="/" />;
};

export default ProtectedRoute;
