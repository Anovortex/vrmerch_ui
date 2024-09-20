import CapTshirtImg from "@/components/CapTshirtImg";

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
];
function CapTshirt() {
  return (
    <div className=" px-[20px] md:px-[40px] lg:px-[151px] h-auto py-[50px] md:py-[80px] lg:py-[100px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <div className="md:pt-20 heroText text-[#272312] text-[40px] leading-[50px] md:text-[80px] md:leading-[100px] lg:text-[100px] lg:leading-[120px]">
            Future <br />
            Looks <br /> Bright
          </div>
          <div className="uppercase text-[30px] md:text-[40px] lg:text-[50px] font-montserrat-italic mt-5 md:mt-8">
            <span className="text-[#7F1BCD] font-[600]">Purple</span>{" "}
            <span className="font-[275] text-black">&</span> <br />
            <span className="text-[#E0A408] font-[700]">gold</span>{" "}
            <span className="text-outline text-[#F6F5F5] text-nowrap">
              series
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <CapTshirtImg caps={capsData} />
        </div>
      </div>
    </div>
  );
}

export default CapTshirt;
