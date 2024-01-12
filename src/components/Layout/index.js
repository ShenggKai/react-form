/* eslint-disable react/prop-types */
import React from "react";
import { Menu } from "../../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
