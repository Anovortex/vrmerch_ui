import React from "react";
import LogoVE from "../public/Logo/Valuetainment.svg";
import Image from "next/image";

function Belief() {
  return (
    <div className="h-auto relative pb-20 lg:pb-0 flex md:flex-row items-center justify-center bg-gradient-to-r from-[#3B3B3B] to-black text-white  lg:h-[1056px] ">
      <div className="absolute inset-0 flex justify-end items-center z-0">
        <LogoVE className="w-[350px] md:w-[400px] lg:w-[571.39px] lg:h-[706.96px] text-red-700 opacity-10" />
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h1 className="text-[100px] lg:text-[140px] md:text-8xl mt-[168px] md:text-nowrap heroText font-bold text-white text-wrap">
          WHAT WE BELIEVE
        </h1>
      </div>

      <div className="relative z-10 md:pt-20 w-[641px] h-[641px] hidden lg:block">
        <Image
          src="/img/img (10).png"
          width={1000}
          height={1000}
          alt="macho guy "
          className="w-[641px] h-[641px] object-cover rounded-[12px] "
        />
      </div>

      <div className="relative pt-[500px] md:pt-80 lg:pt-60 lg:pl-8 z-10 ">
        <div className="px-10 lg:space-y-8 lg:w-[743px] lg:right-[335px]">
          <div>
            <span className="text-[32px] font-semibold mb-2">Leadership</span>{" "}
            is vital from the top of corporations to the military to small{" "}
            <br />
            businesses to parents to students. We all can be leaders.
          </div>
          <div className="border-t border-gray-300 w-full my-4"></div>

          <div>
            <span className="text-[32px] font-semibold mb-2">
              Entrepreneurs
            </span>{" "}
            are heroes who should be respected and celebrated for <br />
            taking risks, launching products, creating jobs, and building
            companies.
          </div>
          <div className="border-t border-gray-300 w-full my-4"></div>
          <div>
            <span className="text-[32px] font-semibold mb-2">Capitalism </span>{" "}
            is a critically important economic system that has <br /> advanced
            society and the quality of life we enjoy today.
          </div>
          <div className="border-t border-gray-300 w-full my-4"></div>
          <div>
            <span className="text-[32px] font-semibold mb-2">Debate</span> is
            welcome and necessary as it can lead to consensus, epiphanies, and
            expose <br /> the truth. When a clash of ideas, often
            emotionally-charged, evolves into civil debate and <br /> objective
            processing of issues, everyone wins. Free speech is critical to
            productive debate.
          </div>
          <div className="border-t border-gray-300 w-full my-4"></div>
        </div>
      </div>
      <div className="relative z-10 pt-[19.4rem] w-[158px] h-[435px] hidden lg:block pb-20">
        <Image
          src="/img/img (3).png"
          width={1000}
          height={1000}
          alt="macho guy "
          className="w-[158px] h-[435px] object-cover  "
        />
      </div>
    </div>
  );
}

export default Belief;
