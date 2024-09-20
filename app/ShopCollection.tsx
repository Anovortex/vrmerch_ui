import React from "react";
import LogoVE from "../public/Logo/Valuetainment.svg";
import "../components/text.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

function ShopCollection() {
  return (
    <div className="relative px-5 lg:px-0 lg:h-[1169px] h-auto bg-gradient-to-b from-[#2C2A2A] to-[#000] pb-20">
      <div className="absolute top-5 left-0 right-0 flex z-10">
        <LogoVE className="lg:w-[793px] lg:h-[793px] md:w-80 md:h-80  fill-white opacity-[0.1]" />
      </div>
      <div className="relative text-center items-center md:pl-28 md:text-left lg:pl-[112px] pt-20 md:pt-40 lg:pt-[148px] z-20">
        <div className="text-white font-montserrat-normal text-5xl lg:text-[70px] lg:font-[600] uppercase leading-[120%] tracking-[0.24px]">
          SHOP <br />
          <span className="shop-collection text-[#2C2A2A] text-transparent">
            Collection
          </span>
        </div>
        <div className="mt-[20px] flex justify-center md:justify-start">
          <button className="flex flex-row items-center gap-2 pl-10 border-white bg-white h-[54px] w-[171px] rounded-[12px] border-[1px] text-black uppercase z-20">
            View All
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="relative grid grid-cols-1 items-center mx-auto lg:grid-cols-4 gap-5 mt-[74px] md:pl-28 z-30">
        {/* First Image */}
        <div className="md:w-[371px] md:h-[531px] ">
          <Image
            src="/img/img (3).jpeg"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* Second Column with Two Images */}
        <div className="flex flex-col gap-5 md:w-[424px] md:h-[282.667px] lg:-mt-[360px] lg:-ml-14">
          <Image
            src="/img/img (7).png"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
          <Image
            src="/img/img (2).png"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* Third Image */}
        <div className="md:w-[300px] md:h-[699px] md:mt-[300px] h-[500px] lg:-mt-[168px] lg:-ml-14">
          <Image
            src="/img/img (8).jpeg"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* Fourth Column with Two Images */}
        <div className="flex flex-col gap-5 md:h-[872px] md:w-[424px] lg:-mt-[340px] lg:-ml-44">
          <Image
            src="/img/img (2).jpeg"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
          <Image
            src="/img/img (9).jpeg"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopCollection;
