import { ChannelItem } from "@/types/model";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { FadeImg } from "./image";

export const ShowSlider = ({ data }: { data: ChannelItem }) => {
  const [selected, setSelected] = useState(data.gallery[0]);

  const gallery = useMemo(() => {
    return data.gallery;
  }, [data.id]);

  useEffect(() => {
    setSelected(gallery[0]);
  }, [data.id]);

  return (
    <div className="max-w-full xl:max-w-[457px] xl:min-w-[457px] fhd:max-w-[724px] fhd:min-w-[724px] xl:w-full">
      <div className="mx-auto h-[176px] sm:h-[296px] max-w-[592px] xl:max-w-full fhd:h-[315px] relative mb-2 rounded-[4px] overflow-hidden pr-2">
        <FadeImg
          src={`/channels/${data.id}/${selected}.png`}
          alt={data.title}
          fill
          sizes="100%"
          quality={100}
          className="object-cover object-center"
        />
      </div>

      <Swiper
        slidesPerView="auto"
        slidesPerGroup={1}
        spaceBetween={8}
        className="show-swiper"
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {gallery.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`relative rounded-[4px] overflow-hidden w-[93px] h-[57px] md:w-[182px] md:h-[93px] xl:w-[147px] xl:h-[97px] fhd:w-[175px] fhd:h-[97px] ${
                item === selected && "active"
              }`}
              onClick={() => setSelected(item)}
            >
              <FadeImg
                src={`/channels/${data.id}/${item}.png`}
                alt=""
                quality={100}
                fill
                sizes="100%"
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
