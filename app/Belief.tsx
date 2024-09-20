import React from "react";
import LogoVE from "../public/Logo/Valuetainment.svg";
import Image from "next/image";

function Belief() {
  return (
    <div className="pl-40 relative flex md:flex-row items-center justify-center bg-gradient-to-r from-[#3B3B3B] to-black text-white p-8 h-[1056px] ">
      <div className="absolute inset-0 flex justify-end items-center z-0">
        <LogoVE className="lg:w-[571.39px] lg:h-[706.96px] text-red-700 opacity-10" />
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h1 className="text-[140px] mt-[168px] text-nowrap heroText font-bold text-white">
          WHAT WE BELIEVE
        </h1>
      </div>

      <div className="relative z-10 pt-20 w-[641px] h-[641px]">
        <Image
          src="/img/img (10).png"
          width={1000}
          height={1000}
          alt="macho guy "
          className="w-[641px] h-[641px] object-cover rounded-[12px] "
        />
      </div>

      <div className="relative pt-80 md:w-1/2 md:pl-8 z-10 ">
        <div className="space-y-8 w-[743px] right-[335px]">
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
      <div className="relative z-10 pt-[19.4rem] w-[158px] h-[435px]">
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
