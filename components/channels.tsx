"use client";

import { ChannelItem } from "@/types/model";
import { useMemo, useState } from "react";
import { Details } from "./details";
import { Slider } from "./slider";
import { Tabs } from "./tabs";
import Link from "next/link";
import Image from "next/image";

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

  // const [category, setCategory] = useState("all");

  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="mb-5 text-[32px]">Наши каналы</h2>
        {/* <Tabs handleCategoryChange={setCategory} /> */}

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

        <div className="flex flex-wrap gap-4 px-5 md:px-10 justify-center channels">
          {channels.map((item) => (
            <Channel
              channel={item}
              key={item.id}
              onChannelClick={setChannel}
              isActive={activeChannel?.id === item.id}
            />
          ))}
        </div>
      </section>

      <Details data={activeChannel!} />
    </>
  );
};

const Channel = ({
  channel,
  isActive,
  onChannelClick,
}: {
  channel: ChannelItem;
  isActive: boolean;
  onChannelClick: (channel: ChannelItem) => void;
}) => (
  <Link
    href={`/?channel=${channel.id}`}
    onClick={(e) => e.preventDefault()}
    className="cursor-default"
  >
    <div
      className={`w-[240px] h-[166px] xl:w-[300px] xl:h-[242px] fhd:w-[371px] fhd:h-[242px] rounded-[8px] overflow-hidden relative transition-transform ${
        isActive ? "active cursor-default" : "cursor-pointer"
      }`}
      style={{ boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.35)" }}
      onClick={() => onChannelClick(channel)}
    >
      <Image
        src={`/channels/${channel.id}/main.webp`}
        alt={channel.title}
        sizes="100%"
        fill
        quality={100}
        className="object-cover object-center"
      />
    </div>
  </Link>
);
