import React from "react";
import LogoVE from "../public/Logo/Valuetainment.svg";
import Subscribe from "./Subscribe";
import CustomerService from "./CustomerService";
import Products from "./Products";
import ContactUs from "./ContactUs";
import Visa from "../public/Icon/visa 1.svg";
import Visa2 from "../public/Icon/visa 2.svg";
import ApplePay from "../public/Icon/apple-pay 1.svg";
import DinersClub from "../public/Icon/diners-club 1.svg";
import AE from "../public/Icon/american-express (1) 1.svg";
import PayPal from "../public/Icon/paypal 1.svg";
import AE2 from "../public/Icon/amex 1.svg";

function Footer() {
  return (
    <div className=" bg-black px-36 py-12 h-[748px]">
      <div className=" flex flex-row items-center md:gap-5 gap-2  pt-5  ">
        <LogoVE className="lg:w-20 lg:h-20 md:w-32 md:h-32 fill-[#EA2127] " />
        <div className="logoText lg:text-[100px] md:text-[60px] text-[20px]">
          VTMERCH
        </div>
      </div>
      <div className="border-t border-gray-300 opacity-50 w-full "></div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          {" "}
          <Subscribe />
        </div>
        <div className="col-span-1">
          {" "}
          <CustomerService />
        </div>{" "}
        <div className="col-span-1">
          {" "}
          <Products />
        </div>{" "}
        <div className="col-span-1">
          {" "}
          <ContactUs />
        </div>{" "}
      </div>
      <div className=" pt-32 flex flex-row justify-between">
        <div>© 2024 Valuetainment Store. All rights reserved.</div>
        <div className=" w-[268px] flex flex-row gap-2">
          <Visa2 />
          <ApplePay />
          <DinersClub />
          <Visa />
          <AE2 />
          <PayPal />
          <AE />
        </div>
      </div>
    </div>
  );
}

export default Footer;
