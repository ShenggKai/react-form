import React from "react";
import "./style.css";
import { Dropdown } from "../../components";

const AdminHome = () => {
  const dropdownItems = [
    { parent: "Dropdown 1", children: ["Item 1", "Item 2", "Item 3"] },
    { parent: "Dropdown 2", children: ["Item A", "Item B", "Item C"] },
  ];
  return (
    <div className="Menu-container">
      <div>
        {dropdownItems.map((item, index) => (
          <Dropdown
            key={index}
            parentItem={item.parent}
            childItems={item.children}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
