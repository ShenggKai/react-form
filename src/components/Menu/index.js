import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components";
import { HomeIcon } from "../../assets";
import "./style.css";

const Menu = () => {
  const menuItems = [
    { label: "Bắt Kèo", path: "/home", icon: <HomeIcon /> },
    { label: "Mini Game", path: "/home", icon: <HomeIcon /> },
    { label: "Hướng dẫn", path: "/home", icon: <HomeIcon /> },
  ];

  return (
    <div className="menu-container">
      <ul className="horizontal-menu">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item">
            <Link to={menuItem.path} className="menu-link">
              {menuItem.icon}
              <Text
                size={18}
                color={"white"}
                fontWeight={400}
                cursor={"pointer"}
              >
                {menuItem.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
