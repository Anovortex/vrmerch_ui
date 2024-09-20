import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Book() {
  return (
    <div className=" lg:h-[852px] pt-20 px-10 lg:px-20 xl:px-40 h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 bg-[#111111] items-center">
      <div className="flex flex-col justify-center">
        <div className="font-montserrat text-white uppercase text-left text-[32px] lg:text-[49px] leading-tight">
          Patrick Bet-David's <br />
          <span className="bg-gradient-to-t from-[#DE2A2F] to-[#EF5256] bg-clip-text text-transparent font-semibold">
            Signed <br />
            Collection
          </span>
        </div>
        <div className="pt-5 pb-10">
          <button className="flex flex-row items-center gap-2 px-4 py-2 bg-white w-auto h-[52px] rounded-[12px] text-black">
            Shop Now <FaArrowRightLong />
          </button>
        </div>
        <Image
          src="/img/pat-signature White 1.png"
          height={1000}
          width={1000}
          alt="signature"
          className="mt-8 w-[250px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex lg:justify-between relative">
        <div className="relative z-10">
          <Image
            src="/img/img (1).png"
            height={1000}
            width={1000}
            alt="Choose Your Enemies Wisely"
            className="h-96 w-96 lg:h-[550px] lg:w-[400px] object-contain mx-auto"
          />
        </div>

        <div className="relative lg:absolute lg:right-[-10px] lg:top-[60px] mt-8 md:mt-2 lg:mt-0">
          <Image
            src="/img/img (8).png"
            height={1000}
            width={1000}
            alt="Your Next Five Moves"
            className="h-96 w-[265px] lg:h-[450px] lg:w-[300px] object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Book;
