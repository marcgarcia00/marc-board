import React from "react";
import MenuItem from "./menu-item";


const Menu = () => {
  const DEFAULT_COLOR = "bg-gray-100";
  const menuConfig = [
    { label: "Money", extended: false, color: DEFAULT_COLOR, hyperlink:"/money" },
    { label: "Fitness", extended: false, color: DEFAULT_COLOR, hyperlink:"/fitness" },
    { label: "WIP", extended: true, color: DEFAULT_COLOR, hyperlink:"/wip" },
    { label: "Calendar", extended: false, color: DEFAULT_COLOR, hyperlink:"/calendar" },
    { label: "To Do List", extended: false, color: DEFAULT_COLOR, hyperlink:"/todo" },
    { label: "Food Prep", extended: false, color: DEFAULT_COLOR, hyperlink:"/todo" },
    { label: "Therapy Notes", extended: false, color: DEFAULT_COLOR, hyperlink:"/therapy-notes" },
  ];
  
  const menuItems = menuConfig.map((item) => {
    return (
      <MenuItem
        key={item.label}
        label={item.label}
        extended={item.extended}
        color={item.color}
        hyperlink={item.hyperlink}
      />
    );
  });
  return (
    //Menu container
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 grid-rows-3 gap-10">
          {menuItems}
        </div>
      </div>
    </div>
  );
};
export default Menu;
