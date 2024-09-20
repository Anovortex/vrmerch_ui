import Image from "next/image";

interface CapsItem {
  index: number;
  itemImage: string;
  itemName: string;
  itemDisPrice: string;
  itemPrice: string;
}

interface CapsProps {
  caps: CapsItem[];
}

function Caps({ caps }: CapsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
      {caps.map((cap, index) => (
        <div
          key={index}
          className=" w-[286.8px] h-[358px] lg:w-[386.5px] lg:h-[458px] bg-white rounded-[12px] z-20 object-fill items-center mx-auto"
        >
          <div>
            <Image
              width={1000}
              height={1000}
              alt={cap.itemName}
              src={cap.itemImage}
              className="rounded-[8px] w-[254.5px] h-[233px] lg:w-[354.5px] lg:h-[333px] mx-auto mt-[16px]"
            />
          </div>
          <div className="pt-[29px] pl-[16px] font-[600]">
            <div>{cap.itemName}</div>
            <div className="flex flex-row gap-5">
              <div>{cap.itemDisPrice}</div>
              <div className="line-through text-[#9B9B9B] font-[500]">
                {cap.itemPrice}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Caps;
