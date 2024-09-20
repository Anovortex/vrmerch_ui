import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

function Product() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevents quantity from going below 1
  };

  return (
    <div className=" bg-[#F6F5F5] h-full lg:h-[519px] px-10 lg:px-0 text-center lg:text-left">
      <div className="font-medium text-[#060606] product-tag text-[32px] leading-9 tracking-[0.5%] lg:text-nowrap text-wrap ">
        Premium Valuetainment Leather Backpack
      </div>
      <div className="text-black font-normal text-[16px] leading-6 tracking-[0.5%]">
        The attention to detail is evident in every aspect of this backpack.
        From the sturdy <br /> hardware and reinforced stitching to the smooth
        zippers and luxurious lining, no detail has <br /> been overlooked.
      </div>
      <div className="text-2xl text-black product-tag pt-6">
        Price: <span className="text-[#EA2127] font-medium">$199.95</span>
      </div>
      <div className=" md:flex md:flex-row lg:flex-col md:items-center lg:items-start md:mx-auto lg:mx-0 md:px-10 lg:px-0">
        <div className="pt-8 text-[#060606] text-xl leading-6 tracking-[0.5%] flex flex-row items-center font-medium">
          Size:
          <div className="pl-3 flex flex-row">
            <span className="w-[43px] h-[40px] border border-[#27231280] border-opacity-50 flex items-center justify-center">
              S
            </span>{" "}
            <span className="w-[47px] h-[40px] border border-[#27231280] border-opacity-50 flex items-center justify-center">
              M
            </span>{" "}
            <span className="w-[41px] h-[40px] border border-[#27231280] border-opacity-50 flex items-center justify-center">
              L
            </span>{" "}
            <span className="w-[52px] h-[40px] border border-[#27231280] border-opacity-50 flex items-center justify-center">
              XL
            </span>{" "}
            <span className="w-[62px] h-[40px] border border-[#27231280] border-opacity-50 flex items-center justify-center">
              XXL
            </span>
          </div>
        </div>
        <div className="pt-8 md:pt-0 lg:pt-8 text-[#060606] text-xl leading-6 tracking-[0.5%] font-medium items-center mx-auto lg:items-start lg:mx-0">
          <div className="text-center lg:text-left">Quantity:</div>
          <div className="pt-3 flex flex-row items-center justify-center lg:justify-start">
            <button
              onClick={decrement}
              className="w-[43px] h-[40px] border border-[#27231280] flex items-center justify-center"
            >
              -
            </button>
            <span className="w-[40px] h-[40px] border border-[#27231280] flex items-center justify-center">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="w-[43px] h-[40px] border border-[#27231280] flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className=" pt-8 flex flex-row gap-6 justify-evenly lg:justify-start items-center mx-auto">
        <button className="w-[270px] h-[54px] border border-[#000000] text-black font-medium rounded-[12px] flex items-center  justify-center uppercase">
          Add to Cart
        </button>{" "}
        <button className="w-[270px] h-[54px] border border-[#000000] bg-black text-white font-medium rounded-[12px] flex items-center justify-center hover:bg-gray-800 uppercase ">
          BUY IT NOW
        </button>
      </div>{" "}
      <div className="  items-center pt-8 flex flex-row gap-3 text-black text-xl leading-6 tracking-[0.5%] font-medium cursor-pointer md:mx-10 lg:mx-0">
        Share:
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
      <div className=" underline text-black pt-6 cursor-pointer  text-left md:px-10 lg:px-0 pb-10 ">
        View Details
      </div>
    </div>
  );
}

export default Product;
