import LogoVE from "../public/Logo/Valuetainment.svg";
import "../components/text.css";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <div className=" flex flex-row items-center justify-between overflow-hidden">
      <div className=" flex flex-row items-center md:gap-5 gap-2 md:p-10 pt-5 lg:px-[62px] ">
        <LogoVE className="lg:w-20 lg:h-20 md:w-16 md:h-32 fill-white w-10 ml-5 md:ml-0 lg:ml-0  " />
        <div className="logoText lg:text-[100px] md:text-5xl text-[20px]">
          VTMERCH
        </div>
      </div>
      <div className="lg:px-[156px] pr-10 md:pr-20">
        <Hamburger />
      </div>
    </div>
  );
}

export default Navbar;
