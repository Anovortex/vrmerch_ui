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
    <div className="bg-[#F6F5F5] relative  w-full h-[877px] text-black flex flex-col gap-12 justify-center pl-[150px]  ">
      <div>
        <div className="promo-text text-center pb-[48px]">new arrival</div>
        <Caps caps={capsData} />;
      </div>
    </div>
  );
}

export default NewArrivals;
