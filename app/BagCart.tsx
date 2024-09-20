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
    <div className=" w-full bg-[#F6F5F5] flex flex-col py-[100px]">
      <div className="text-black uppercase text-[70px] font-[600] text-center mb-8">
        Product of{" "}
        <span className="text-outline text-[#F6F5F5]">the month</span>
      </div>

      <div className="flex flex-row justify-center gap-5 h-[527px]">
        <div className="flex flex-col h-[522px] w-[100px] gap-[12px] text-black  items-center">
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
        <div className="w-[527px] h-[527px] ml-12">
          <Image
            src={selectedImage}
            width={1000}
            height={1000}
            alt="Selected product"
            className="object-contain rounded-[24px]"
          />
        </div>{" "}
        <Product />
      </div>
    </div>
  );
}

export default BagCart;
