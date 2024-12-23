"use client";

import { ChannelItem } from "@/types/model";
import Image from "next/image";
import { Button } from "./button";
import { ShowSlider } from "./showSlider";
import Link from "next/link";

export const Details = ({ data }: { data: ChannelItem }) => {
  return (
    <section className="px-5 xl:px-10 my-10">
      <div className="bg-[--grey-color] px-5 py-10 xl:p-10 flex flex-col xl:flex-row items-center xl:items-start gap-4 rounded-[16px]">
        <ShowSlider data={data} />

        <div className="flex flex-col gap-6">
          <h3 className="text-[40px]">{data.title}</h3>

          <div className="w-full sm:w-auto">
            <Link target="_blank" href={data.link}>
              <Button variant="sm" className="w-full sm:w-auto">
                Посмотреть сейчас
              </Button>
            </Link>
          </div>

          {/* <div className="flex gap-2 items-center text-[16px] leading-[150%]">
            <span>{data.episodes}</span>
            <Separator />
            <span>{data.length}</span>
            <Separator />
            <span>{data.date}</span>
            <Separator />
            <Image
              src="/imdb.svg"
              alt="IMDB"
              width={44}
              height={22}
              quality={100}
            />
          </div> */}

          <div className="text-[14px] md:text-[16px]">{data.desc}</div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-4 items-center">
              <label className="font-[900] text-[12px] leading-[200%] uppercase min-w-[95px]">
                genre(s)
              </label>
              <div className="text-[14px] leading-[171%]">{data.genre}</div>
            </div>

            {/* <div className="flex gap-4 items-center">
              <label className="font-[900] text-[12px] leading-[200%] uppercase min-w-[95px]">
                Language(s)
              </label>
              <div className="text-[14px] leading-[171%]">
                Russian, Spanish, Portuguese, English
              </div>
            </div> */}

            {/* <div className="flex gap-4 items-center">
              <label className="font-[900] text-[12px] leading-[200%] uppercase min-w-[95px]">
                director
              </label>
              <div className="text-[14px] leading-[171%]">Egor Barinov</div>
            </div> */}

            <div className="flex gap-4 items-center">
              <label className="font-[900] text-[12px] leading-[200%] uppercase min-w-[95px]">
                Highligts
              </label>
              <div className="text-[14px] leading-[171%]">
                {data.subs} subscribers; {data.views} views monthly;
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <label className="font-[900] text-[12px] leading-[200%] uppercase min-w-[95px]">
                Author
              </label>
              <div className="text-[14px] leading-[171%]">{data.author}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Separator() {
  return <i className="w-[8px] h-[8px] rounded-full bg-[#27A570]" />;
}
