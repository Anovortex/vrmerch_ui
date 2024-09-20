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
    <div className="pb-10 h-auto lg:mt-0 mt-[560px] px-20 relative pt-12 lg:py-[100px] lg:px-[160px] w-full lg:h-[352px] bg-gradient-to-r from-[#EC3339] to-[#BB1117]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-[93px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-center lg:text-left items-center lg:items-start mx-auto flex flex-col"
          >
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
