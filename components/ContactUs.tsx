import React from "react";
import Phone from "../public/Icon/telephone (2) 1.svg";
import Email from "../public/Icon/email 1.svg";

const items = [
  {
    index: 1,
    value: `Available between 8AM to 8PM. Ready to answer your questions.`,
  },
  { index: 2, value: `013456789`, img: <Phone className="mr-2" /> },
  { index: 3, value: `Email`, img: <Email className="mr-2" /> },
];

function ContactUs() {
  return (
    <div className="pt-12">
      <div className="leading-7 tracking-[0.5%] font-medium text-xl">
        Contact Us
      </div>
      <div className="leading-7 tracking-[0.5%] pt-6 text-white text-base opacity-80 font-normal cursor-pointer">
        {items.map((item) => (
          <div key={item.index} className="flex items-center">
            {item.img}
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
