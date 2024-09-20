import React from "react";

function Hamburger() {
  return (
    <div className=" w-10 h-10 flex flex-col justify-around items-center cursor-pointer ">
      <div className=" w-[30px] h-1 rounded-s bg-white"></div>
      <div className=" w-[30px] h-1 rounded-s bg-white"></div>
      <div className=" w-[30px] h-1 rounded-s bg-white"></div>
    </div>
  );
}

export default Hamburger;
