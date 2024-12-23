"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import { ChannelItem } from "@/types/model";

export const SliderTest = ({ data }: { data: ChannelItem }) => {
  const [selected, setSelected] = useState(data.gallery[0]);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div
          onClick={() => setSelected(1)}
          className={`transition-colors h-[200px] bg-[#faf] ${
            selected === 1 && "bg-green-300"
          }`}
        >
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          onClick={() => setSelected(2)}
          className={`transition-colors h-[200px] bg-[#faf] ${
            selected === 2 && "bg-green-300"
          }`}
        >
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          onClick={() => setSelected(3)}
          className={`transition-colors h-[200px] bg-[#faf] ${
            selected === 3 && "bg-green-300"
          }`}
        >
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          onClick={() => setSelected(4)}
          className={`transition-colors h-[200px] bg-[#faf] ${
            selected === 4 && "bg-green-300"
          }`}
        >
          Slide 4
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
