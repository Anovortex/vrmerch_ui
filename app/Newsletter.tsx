import React from "react";
import Shipping from "../public/Icon/delivery.svg";
import Support from "../public/Icon/customer-support 1.svg";
import Return from "../public/Icon/exchange.svg";
import Payment from "../public/Icon/verified.svg";

const items = [
  {
    index: 1,
    image: <Shipping />,
    headers: "Shipping",
    para: `The attention to detail is evident in every aspect of this backpack.`,
  },
  {
    index: 1,
    image: <Return />,
    headers: "Return",
    para: `The attention to detail is evident in every aspect of this backpack.`,
  },
  {
    index: 1,
    image: <Support />,
    headers: "Support",
    para: `The attention to detail is evident in every aspect of this backpack.`,
  },
  {
    index: 1,
    image: <Payment />,
    headers: "Payment",
    para: `The attention to detail is evident in every aspect of this backpack.`,
  },
];

function Newsletter() {
  return (
    <div className=" py-[100px] px-[160px] w-full h-[352px] bg-gradient-to-r from-[#EC3339] to-[#BB1117]">
      <div className="grid grid-cols-4 gap-[93px]">
        {" "}
        {/* Add gap for spacing between items */}
        {items.map((item) => (
          <div key={item.index} className="flex flex-col">
            {item.image}
            <div className="pt-6 text-2xl font-medium font-montserrat leading-6 tracking-[0.5%]">
              {item.headers}
            </div>
            <div className="pt-3 text-base font-medium leading-6 tracking-[0.5%]">
              {item.para}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newsletter;
