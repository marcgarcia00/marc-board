import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  let menuProps = {
    label: '',
    extended: false,
    color: '',
    hyperlink: '',
    classes: ''
  };

  menuProps = {...props}; 
  const [theme, setTheme] = useState("bg-blue-400");

  useEffect(()=> {
      setTheme(menuProps.color)
  },[menuProps.color]);
  
  return (
      <div
        className={`
        ${menuProps.theme}
        ${menuProps.classes}
          flex m-2 justify-center items-center rounded text-center p-3 shadow-lg cursor-pointer
        `}
      >
        <Link to={menuProps.hyperlink} key={menuProps.hyperlink}>
          <p className="text-5xl">{menuProps.label}</p>
        </Link>
      </div>
  );
};
export default MenuItem;
