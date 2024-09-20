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

function CapTshirtImg({ caps }: CapsProps) {
  return (
    <div className="flex md:flex-row flex-col w-full gap-4 justify-center">
      {caps.map((cap, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4  h-auto rounded-[12px] z-20"
        >
          <div>
            <Image
              width={1000}
              height={1000}
              alt={cap.itemName}
              src={cap.itemImage}
              className="rounded-[8px] w-full h-auto mx-auto mt-[16px]"
            />
          </div>
          <div className="pt-[29px] font-[600] text-black text-center">
            <div>{cap.itemName}</div>
            <div className="flex justify-center gap-5 text-black">
              <div>{cap.itemDisPrice}</div>
              <div className="line-through text-black font-[500]">
                {cap.itemPrice}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CapTshirtImg;
