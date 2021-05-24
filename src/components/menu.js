import React from "react";
import { Link } from 'react-router-dom';

import MenuItem from "./menu-item";

const Menu = () => {
  const DEFAULT_COLOR = "bg-gray-100";
  const menuConfig = [
    { label: "Money", extended: false, color: DEFAULT_COLOR },
    { label: "Fitness", extended: false, color: DEFAULT_COLOR },
    { label: "WIP", extended: true, color: DEFAULT_COLOR },
    { label: "Calendar", extended: false, color: DEFAULT_COLOR },
    { label: "To Do List", extended: false, color: DEFAULT_COLOR },
  ];
  const menuItems = menuConfig.map((item) => {
    return (
      <Link to={`${item.label.toLowerCase()}`} key={item.label}>
        <MenuItem
          label={item.label}
          extended={item.extended}
          color={item.color}
        />
      </Link>
    );
  });
  return (
    //Menu container
    <div className="grid grid-cols-2 grid-rows-3 gap-5 h-1/2 w-9/12">
      {menuItems}
    </div>
  );
};
export default Menu;
