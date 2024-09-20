import React from "react";
import LogoVE from "../public/Logo/Valuetainment.svg";
import "../components/text.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

function ShopCollection() {
  return (
    <div className="relative h-[1169px] bg-gradient-to-b from-[#2C2A2A] to-[#000]">
      <div className="absolute top-5 left-0 right-0 flex z-10">
        <LogoVE className="lg:w-[793px] lg:h-[793px] md:w-32 md:h-32 fill-white opacity-[0.1]" />
      </div>
      <div className="relative pl-[200px] pt-[148px] z-20">
        <div className="text-white font-montserrat-normal text-[70px] font-[600] uppercase leading-[120%] tracking-[0.24px]">
          SHOP <br />
          <span className="shop-collection text-[#2C2A2A] text-transparent">
            Collection
          </span>
        </div>
        <button className="mt-[20px] flex flex-row items-center gap-2 pl-10 border-white bg-white h-[54px] w-[171px] rounded-[12px] border-[1px] text-black uppercase z-20">
          View All
          <FaArrowRightLong />
        </button>
      </div>
      <div className="relative flex flex-row gap-5 mt-[74px] pl-52 z-30">
        <div className="w-[371px] h-[531px]">
          <Image
            src="/img/img (3).jpeg"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>{" "}
        <div className="-mt-14 flex flex-col gap-5 w-[424px] h-[282.667px]">
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
        <div className="w-[300px] h-[699px] -mt-[168px]">
          <Image
            src="/img/img (8).jpeg"
            height={1000}
            width={1000}
            alt="bag"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>{" "}
        <div className="-mt-[340px] flex flex-col gap-5 h-[872px] w-[424px]">
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
