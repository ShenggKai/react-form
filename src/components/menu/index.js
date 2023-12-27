import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components";
import { HomeIcon, UserIcon, AboutIcon, BlogIcon } from "../../assets/icons";
import "./style.css";

const Menu = () => {
  const menuItems = [
    { label: "Home", path: "/home", icon: <HomeIcon /> },
    { label: "About", path: "/about", icon: <AboutIcon /> },
    { label: "Blog", path: "/blog", icon: <BlogIcon /> },
    { label: "User", path: "/user", icon: <UserIcon /> },
  ];

  return (
    <div className="menu-container">
      <ul className="horizontal-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <Link to={item.path} className="menu-link">
              {item.icon}
              <Text size={18} color={"white"} fontWeight={400}>
                {item.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
