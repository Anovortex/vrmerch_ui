import React from "react";

function Hamburger() {
  return (
    <div className=" lg:w-10 lg:h-10 flex flex-col justify-around items-center md:w-14 md:h-12 w-8 h-8 cursor-pointer pt-2 md:pt-0 lg:pt-0 ">
      <div className=" w-8 md:w-10 lg:w-[30px] h-[3px] md:h-1 rounded-s bg-white"></div>
      <div className=" w-8 md:w-10 lg:w-[30px] h-[3px] md:h-1 rounded-s bg-white"></div>
      <div className=" w-8 md:w-10 lg:w-[30px] h-[3px] md:h-1 rounded-s bg-white"></div>
    </div>
  );
}

export default Hamburger;
