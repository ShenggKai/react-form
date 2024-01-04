import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, UserPage, BlogPage, AboutPage, NotFound } from "../pages";
import { ProtectedRoute, AutoLogout } from "../components";

function App() {
  return (
    <BrowserRouter>
      {/* <AutoLogout /> */}
      <Routes>
        {/* Public Routes*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes*/}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
