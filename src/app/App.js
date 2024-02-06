import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, UserHome, NotFound, AdminHome } from "../pages";
import { ProtectedRoute } from "../components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes*/}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/admin-home" element={<AdminHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
