"use client";

import { Controller } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";

import { ChannelItem } from "@/types/model";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FadeImg } from "./image";

export const Slider = ({
  channels,
  current,
  handleChannelChange,
  category,
}: {
  channels: ChannelItem[];
  current: number | undefined;
  handleChannelChange: (channel: ChannelItem | undefined) => void;
  category: string;
}) => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
  // const [[allowPrev, allowNext], setAllows] = useState([false, false]);

  // const checkSwiperWidth = (swiper: SwiperClass) => {
  //   if (swiper.width < 1280) {
  //     setAllows([false, false]);

  //     return;
  //   }

  //   setAllows([
  //     swiper.activeIndex === 1,
  //     swiper.activeIndex === channels.length - 2,
  //   ]);
  // };

  const onSlideChange = useCallback((slider: SwiperClass) => {
    const index = slider.activeIndex + 1;

    const channel = channels.find((channel) => channel.id === index);
    handleChannelChange(channel);
  }, []);

  useEffect(() => {
    firstSwiper?.slideToLoop(0);
  }, [category]);

  return (
    <>
      <Swiper
        slidesPerView="auto"
        slidesPerGroup={1}
        spaceBetween={16}
        centeredSlides={true}
        initialSlide={current ? current - 1 : 0}
        className="main-swiper"
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        // allowSlidePrev={!allowPrev}
        // allowSlideNext={!allowNext}
        onRealIndexChange={(swiper) => {
          // checkSwiperWidth(swiper);
          onSlideChange(swiper);
        }}
        // onResize={checkSwiperWidth}
      >
        {channels.map((channel, i) => (
          <SwiperSlide key={i} data-channel-id={channel.id}>
            <Link
              href={`/?channel=${channel.id}`}
              onClick={(e) => e.preventDefault()}
              className="cursor-default"
            >
              <div
                className="w-[371px] h-[242px] rounded-[8px] overflow-hidden relative transition-transform"
                style={{ boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.35)" }}
                onClick={() => {
                  firstSwiper?.slideToLoop(i);
                }}
              >
                <FadeImg
                  src={`/channels/${channel.id}/main.webp`}
                  alt={channel.title}
                  sizes="100%"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
