import Caps from "@/components/Caps";
import React from "react";

const capsData = [
  {
    index: 1,
    itemImage: "/img/img (4).jpeg",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
  {
    index: 2,
    itemImage: "/img/img (6).jpeg",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
  {
    index: 3,
    itemImage: "/img/img (7).jpeg",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
  {
    index: 4,
    itemImage: "/img/img (10).jpeg",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
];

function SectionProduct() {
  return (
    <div className="bg-[#F6F5F5] relative mt-[400px] w-full h-auto text-black grid  md:grid-cols-2 lg:grid-cols-4 justify-center text-center lg:text-left items-center mx-auto lg:pl-[150px]">
      <div className=" py-[48px] md:py-[48px] lg:py-[48px] col-span-1 md:col-span-2 lg:col-span-4">
        <div className="font-montserrat uppercase pb-[48px] lg:leading-[84px] lg:tracking-[0.5px] text-wrap text-5xl md:text-6xl lg:text-7xl font-semibold">
          Buy 1 get 1 Free <br />
          on
          <span className="font-montserrat text-[#F6F5F5] text-outline">
            {" "}
            best selling products
          </span>
        </div>
        <Caps caps={capsData} />
      </div>
    </div>
  );
}

export default SectionProduct;
