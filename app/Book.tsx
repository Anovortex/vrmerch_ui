import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Book() {
  return (
    <div className=" px-40 h-[852px] flex flex-row items-center justify-between gap-20 bg-[#111111]">
      {" "}
      <div className=" flex flex-col ">
        <div className=" pl-5 font-montserrat all-caps  text-[49px]">
          Patrick Bet-David's <br />
          <span className="  bg-gradient-to-t font-weight-700  from-[#DE2A2F] to-[#EF5256] bg-clip-text text-transparent">
            Signed <br />
            collection
          </span>
        </div>
        <div className="pl-5 pt-5 pb-20">
          <button className=" flex flex-row items-center gap-2 pl-10 border-white bg-white w-[186px] h-[52px] rounded-[12px] border-[1px] text-black">
            Shop Now <FaArrowRightLong />
          </button>
        </div>
        <Image
          src="/img/pat-signature White 1.png "
          height={1000}
          width={1000}
          alt="signature"
        />
      </div>
      <div className="flex flex-row ">
        <div className="mb-20 z-10">
          <Image
            src="/img/img (1).png"
            height={1000}
            width={1000}
            alt="signature"
            className=" h-[550px] w-[780px]"
          />
        </div>
        <div className="mt-8">
          <Image
            src="/img/img (8).png"
            height={1000}
            width={1000}
            alt="signature"
            className=" h-[500px] w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Book;
