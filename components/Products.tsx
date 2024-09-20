import React from "react";

const items = [
  { index: 1, value: `Featured products` },
  { index: 2, value: `Bestseller` },
  { index: 3, value: `Latest product` },
  { index: 4, value: `All collections` },
  { index: 5, value: `All products` },
];
function Products() {
  return (
    <div className=" pt-12">
      <div className="leading-7 tracking-[0.5%] font-medium text-xl">
        Products
      </div>
      <div className="leading-7 pt-6 tracking-[0.5%] text-white text-base opacity-80 font-normal cursor-pointer">
        {items.map((item) => (
          <div key={item.index}>{item.value}</div>
        ))}
      </div>
    </div>
  );
}

export default Products;
