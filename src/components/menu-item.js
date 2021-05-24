import React, { useEffect, useState } from "react";

const MenuItem = ({ label, extended = false, color=""}) => {
  const [theme, setTheme] = useState("bg-blue-400");

  useEffect(()=> {
      setTheme(color)
  },[color]);
  

  return (
    <div
      className={`flex justify-center items-center rounded text-center p-3 shadow-lg cursor-pointer
        ${theme}
        ${extended ? 'col-span-2': ''} 
      `}
    >
      <p className="text-5xl">{label}</p>
    </div>
  );
};
export default MenuItem;
