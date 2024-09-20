import React from "react";

const items = [
  { index: 1, value: `About Us` },
  { index: 2, value: `Search` },
  { index: 3, value: `Privacy Policy` },
  { index: 4, value: `Contact Us` },
  { index: 5, value: `Terms and Service` },
  { index: 6, value: `Refund Policy` },
  { index: 7, value: `Track Order` },
];

function CustomerService() {
  return (
    <div className=" pt-12">
      <div className="leading-7 tracking-[0.5%] font-medium text-xl">
        Customer Services
      </div>
      <div className="leading-7 tracking-[0.5%] pt-6 text-white text-base opacity-80 font-normal cursor-pointer">
        {items.map((item) => (
          <div key={item.index}>{item.value}</div>
        ))}
      </div>
    </div>
  );
}

export default CustomerService;
