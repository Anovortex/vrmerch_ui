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
    <div className="carousel pl-52">
      <div className="carousel-track" ref={trackRef}>
        {carouselItems.map((item, index) => (
          <div>
            <div className="carousel-item w-[357px] h-[397px]   " key={index}>
              <Image
                src={item.itemImage}
                width={1000}
                height={1000}
                alt={item.itemName}
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
            <div className=" px-5">
              <div>{item.itemName}</div>
              <div className=" flex flex-row gap-5">
                <div>{item.itemPrice}</div>
                <div className=" line-through">{item.itemDisPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
