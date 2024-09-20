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
    <div className="h-auto bg-black items-center mx-auto px-5 lg:px-36 lg:py-12 lg:h-[748px]">
      <div className="pb-5 lg:pb-5 flex flex-row items-center md:gap-5 gap-2  pt-5  ">
        <LogoVE className="lg:w-20 lg:h-20 md:w-32 md:h-32 w-16 h-16 fill-[#EA2127] " />
        <div className="logoText lg:text-[100px] md:text-[60px] text-[36px]">
          VTMERCH
        </div>
      </div>
      <div className="border-t  border-gray-300 opacity-50 w-full "></div>
      <div className="grid lg:grid-cols-6 gap-4">
        <div className="col-span-3">
          {" "}
          <Subscribe />
        </div>
        <div className="lg:col-span-1 row-span-1">
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
      <div className=" pt-32 flex flex-col md:flex-row justify-between">
        <div className="py-5 lg:py-0">
          © 2024 Valuetainment Store. All rights reserved.
        </div>
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
