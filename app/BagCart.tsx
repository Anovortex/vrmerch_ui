"use client";
import Product from "@/components/Product";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const bagImage = [
  {
    index: 1,
    img: "/img/img (3).jpeg",
  },
  { index: 2, img: "/img/img (6).png" },
  { index: 3, img: "/img/img (3).jpeg" },
  { index: 4, img: "/img/img (4).png" },
];

function BagCart() {
  const [selectedImage, setSelectedImage] = useState(bagImage[0].img);

  return (
    <div className=" h-[859px] w-full bg-[#F6F5F5] flex flex-col py-[100px] pb-[480px] md:pb-[400px] lg:pb-5">
      <div className="text-black  uppercase text-5xl md:text-[70px] font-[600] text-center mb-8 lg:text-nowrap text-wrap">
        Product of{" "}
        <span className="text-outline text-[#F6F5F5]">the month</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-5 h-[527px] lg:mt-0 mt-40 md:mt-[250px]">
        <div className="lg:flex hidden lg:flex-col h-[522px] w-[100px] gap-[12px] text-black items-center">
          <FaArrowUp />
          {bagImage.map((bag, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer ${
                selectedImage === bag.img
                  ? "border-2 border-black rounded-[8px]"
                  : ""
              }`}
              onClick={() => setSelectedImage(bag.img)}
            >
              <Image
                src={bag.img}
                width={1000}
                height={1000}
                alt={`Thumbnail ${index + 1}`}
                className="object-contain rounded-[8px]"
              />
            </div>
          ))}
          <FaArrowDown />
        </div>
        <div className="w-[300px] items-center mx-auto mt-[150px] lg:mt-0 lg:mx-0 lg:pt-[0px] md:w-[500px] md:h-[] lg:w-[527px] lg:h-[527px] lg:ml-12">
          <Image
            src={selectedImage}
            width={1000}
            height={1000}
            alt="Selected product"
            className="object-contain rounded-[24px] w-full h-full"
          />
        </div>

        <div className="flex  lg:hidden flex-row h-[522px] md:w-[600px] gap-[12px] text-black  items-center mx-auto">
          <FaArrowUp />
          {bagImage.map((bag, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer ${
                selectedImage === bag.img
                  ? "border-2 border-black rounded-[8px]"
                  : ""
              }`}
              onClick={() => setSelectedImage(bag.img)}
            >
              <Image
                src={bag.img}
                width={1000}
                height={1000}
                alt={`Thumbnail ${index + 1}`}
                className="object-contain rounded-[8px]"
              />
            </div>
          ))}
          <FaArrowDown />
        </div>
        <Product />
      </div>
    </div>
  );
}

export default BagCart;
