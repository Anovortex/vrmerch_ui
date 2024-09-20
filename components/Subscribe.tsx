import React from "react";

function Subscribe() {
  return (
    <div className=" pt-12 w-[530px] font-normal font-montserrat text-2xl leading-7 tracking-[0.5%]">
      Subscribe and be the first to receive notifications about our upcoming
      releases and the latest news.
      <div className="mt-4 flex flex-col gap-3 pt-12">
        {" "}
        <button className="w-full h-[43px] border border-black bg-gray-200 text-black font-medium rounded-[8px] ">
          Email
        </button>
        <button className="w-full h-[43px] border border-white text-white bg-black font-medium rounded-[8px]">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
