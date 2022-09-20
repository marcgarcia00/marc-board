import React from "react";
import Menu from "../components/menu";
import HappyGraph from "../components/happy-graph/HappyGraph";

const Main = () => {
  return (
    <div className="flex h-screen w-1/8">
      <div className="bg-gray-100">
        <div>
        Side Bar
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center pt-7">
        <div className="flex justify-center">
          <HappyGraph/>
        </div>
        <div className="flex">
          <Menu/>
        </div>
      </div>
    </div>
  );
};
export default Main;
