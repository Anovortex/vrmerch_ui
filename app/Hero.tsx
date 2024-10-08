import Carousel from "@/components/Carousel";
import "../components/text.css";

const carouselItems = [
  {
    index: 1,
    itemImage: "/img/img (10).png",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
  {
    index: 2,
    itemImage: "/img/img (9).png",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
  {
    index: 3,
    itemImage: "/img/img (11).png",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
  {
    index: 4,
    itemImage: "/img/img (11).jpeg",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
  {
    index: 5,
    itemImage: "/img/img (10).png",
    itemName: "Army Green Active Short Sleeve",
    itemDisPrice: "$ 34.95",
    itemPrice: "$ 34.95",
  },
];

function Hero() {
  return (
    <div className="md:pt-[70px] pt-10 lg:pt-[146px] relative">
      <div className="lg:text-[140px] md:text-8xl text-6xl pl-10 text-wrap  lg:text-wrap md:p-10 heroText opacity-40 lg:px-[150px] items-center ">
        future looks brights!
      </div>
      <div className="absolute top-[100px] md:top-[180px] lg:top-[120px] pt-[80px] md:pt-[120px] lg:pt-[160px] left-0 w-full z-10">
        <Carousel carouselItems={carouselItems} />
      </div>
    </div>
  );
}

export default Hero;
