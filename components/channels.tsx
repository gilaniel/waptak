"use client";

import { ChannelItem } from "@/types/model";
import { useState } from "react";
// import { Details } from "./details";
// import { Slider } from "./slider";
import { Tabs } from "./tabs";
// import Link from "next/link";
// import Image from "next/image";
import { FadeImg } from "./image";
import { Button } from "./button";

export const Channels = ({
  channels,
  current,
}: {
  channels: ChannelItem[];
  current: number | undefined;
}) => {
  const [activeChannel, setChannel] = useState<ChannelItem | undefined>(
    channels.find((channel) => channel.id === current) || channels[0]
  );
  const [count, setCount] = useState(12);
  const [category, setCategory] = useState("all");

  const list = channels.filter(
    (item) => category === "all" || item.category === category
  );

  const handleTabChange = (tab: string) => {
    setCategory(tab);
    setCount(12);
  };

  return (
    <>
      <section className="flex flex-col items-center pb-10">
        <h2 className="mb-8 text-[32px] text-center px-2">
          Наши каналы и проекты
        </h2>
        <Tabs handleCategoryChange={handleTabChange} />

        {/* <Slider
          category={category}
          channels={channels.filter(
            (show) =>
              category === "all" ||
              show.category.toLowerCase().includes(category)
          )}
          current={current}
          handleChannelChange={setChannel}
        /> */}

        <div className="flex flex-wrap gap-4 px-5 md:px-10 channels justify-center">
          {list.slice(0, count).map((item) => (
            <Channel channel={item} key={item.id} onChannelClick={setChannel} />
          ))}
        </div>

        {list.length > 12 && count < 100 && (
          <Button variant="sm" className="mt-5" onClick={() => setCount(100)}>
            Загрузить еще
          </Button>
        )}
      </section>

      {/* <Details data={activeChannel!} /> */}
    </>
  );
};

const Channel = ({
  channel,
  onChannelClick,
}: {
  channel: ChannelItem;
  onChannelClick: (channel: ChannelItem) => void;
}) => (
  <div
    className={`w-full h-[188px] min-w-[300px] max-w-[335px] md:w-[308px] md:h-[208px] xl:w-[363px] xl:h-[242px] xl:max-w-full rounded-[4px] overflow-hidden relative transition-transform`}
    style={{ boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)" }}
    onClick={() => onChannelClick(channel)}
  >
    <FadeImg
      src={`/channels/${channel.id}.png`}
      alt={channel.title}
      sizes="100%"
      fill
      quality={100}
      className="object-cover object-center"
      noLoader
    />

    <div
      className="absolute right-[10px] top-[10px] uppercase text-[12px] font-[700] bg-[#f9f9f9] py-[7px] px-6 rounded-[4px]"
      style={{ letterSpacing: "0.07em" }}
    >
      {channel.categoryName}
    </div>
  </div>
);
