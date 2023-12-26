import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, NotFound } from "./pages";
import { ProtectedRoute, AutoLogout } from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* <AutoLogout /> */}
      <Routes>
        {/* Public Routes*/}
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes*/}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
