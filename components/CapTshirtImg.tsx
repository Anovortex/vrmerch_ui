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
    <div className="flex flex-row w-full  gap-4">
      {caps.map((cap, index) => (
        <div
          key={index}
          className="w-[496px] h-[496px] rounded-[12px] z-20 object-fill"
        >
          <div>
            <Image
              width={1000}
              height={1000}
              alt={cap.itemName}
              src={cap.itemImage}
              className="rounded-[8px] w-[390px] h-[390px] mx-auto mt-[16px]"
            />
          </div>
          <div className="pt-[29px]  font-[600] text-black">
            <div>{cap.itemName}</div>
            <div className="flex flex-row gap-5 text-black">
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
