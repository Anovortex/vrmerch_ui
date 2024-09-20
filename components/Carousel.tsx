"use client";
import React, { useEffect, useRef } from "react";
import "./Carousel.css";
import Image from "next/image";

interface CarouselItem {
  index: number;
  itemImage: string;
  itemName: string;
  itemDisPrice: string;
  itemPrice: string;
}

interface CarouselProps {
  carouselItems: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const itemElement = track.querySelector(".carousel-item") as HTMLElement;
      const itemWidth = itemElement ? itemElement.offsetWidth : 0;
      const totalWidth = itemWidth;
      let offset = 0;

      const scrollInterval = setInterval(() => {
        offset -= 1;
        if (Math.abs(offset) >= totalWidth) {
          offset = 0;
        }
        track.style.transform = `translateX(${offset}px)`;
      }, 20);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div className="carousel pl-10 md:pl-32 lg:pl-52">
      <div className="carousel-track" ref={trackRef}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <div className="carousel-item w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[357px] lg:h-[397px]">
              <Image
                src={item.itemImage}
                width={1000}
                height={1000}
                alt={item.itemName}
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
            <div className="px-2 md:px-4 lg:px-5">
              <div>{item.itemName}</div>
              <div className="flex flex-row gap-2 md:gap-4 lg:gap-5">
                <div>{item.itemPrice}</div>
                <div className="line-through">{item.itemDisPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
