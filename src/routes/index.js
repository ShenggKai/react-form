import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, HomePage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
