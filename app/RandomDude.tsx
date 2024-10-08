import Image from "next/image";
import Qoute from "../public/Icon/quotes.svg";

function RandomDude() {
  return (
    <div className="pt-20 px-2 lg:h-[577px] flex flex-row items-center relative bg-gradient-to-r from-[#EC3339] to-[#BB1117] w-full lg:px-20 justify-between">
      <div className="flex -top-10 relative">
        <div className="absolute ">
          <Qoute />
        </div>
        <div className="font-montserrat text-white text-2xl lg:text-5xl font-bold uppercase leading-[120%] tracking-[0.24px] z-10 relative pt-32 pl-12">
          Our mission is to enlighten, entertain <br />
          and empower current and future <br />
          leaders around the world.
        </div>
      </div>

      <div className="absolute w-[571px] h-[725px] -top-[147px] right-0 hidden lg:block">
        <Image
          src="/img/img (5).png"
          height={1000}
          width={1000}
          alt="random dude"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default RandomDude;
