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

function NewArrivals() {
  return (
    <div
      className="bg-[#F6F5F5] relative w-full h-auto md:h-[877px] py-20 lg:py-[100px] text-black md:grid-cols-2 lg:grid-cols-4 justify-center text-center lg:text-left items-center mx-auto 
    lg:pl-[142px] lg:pr-16 "
    >
      <div>
        <div className="font-montserrat uppercase pb-[48px] md:pt-20  lg:leading-[84px] lg:tracking-[0.5px] text-wrap text-5xl md:text-6xl lg:text-7xl font-semibold">
          new arrival
        </div>
        <Caps caps={capsData} />;
      </div>
    </div>
  );
}

export default NewArrivals;
