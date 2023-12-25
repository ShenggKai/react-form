/* eslint-disable react/prop-types */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, HomePage, NotFound } from "../pages";

const AppRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
