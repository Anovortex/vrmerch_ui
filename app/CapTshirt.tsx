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
    <div className="px-[151px] h-[679px] py-[100px] bg-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center ">
          <div className="heroText text-[#272312] text-[100px] leading-[120px]">
            Future <br />
            Looks <br /> Bright
          </div>
          <div className="uppercase text-[50px] font-montserrat-italic">
            <span className="text-[#7F1BCD] font-[600]">Purple</span>{" "}
            <span className="font-[275] text-black">&</span> <br />
            <span className="text-[#E0A408] font-[700]">gold</span>{" "}
            <span className="text-outline text-[#F6F5F5] text-nowrap">
              series
            </span>
          </div>
        </div>
        <CapTshirtImg caps={capsData} />
      </div>
    </div>
  );
}

export default CapTshirt;
