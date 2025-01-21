"use client";

import { Partner } from "@/types/model";
import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FadeImg } from "./image";

export const Partners = ({ partners }: { partners: Partner[] }) => {
  const count = partners.length;

  return (
    <section className="flex flex-col items-center w-full mt-10">
      <h4 className="text-[32px] mb-6 text-center px-2">
        Партнеры дистрибуции
      </h4>

      <ParallaxImg baseVelocity={-0.5} partners={partners.slice(0, 9)} />
      <ParallaxImg
        baseVelocity={0.5}
        partners={partners.slice(count / 2, count)}
      />
    </section>
  );
};

const ParallaxImg = ({
  partners,
  baseVelocity = 100,
}: {
  partners: Partner[];
  baseVelocity: number;
}) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-10, -60.2, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="kids-parallax mb-4">
      <motion.div
        className="scroller flex items-center justify-center gap-4"
        style={{ x }}
      >
        {partners.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center rounded-[16px] bg-[--grey-color] w-[237px] h-[160px]"
          >
            <FadeImg
              src={`/partners/partner-${item.id}.png`}
              alt={item.name}
              width={190}
              height={80}
              quality={100}
              className="w-auto h-auto"
              noLoader
            />
          </div>
        ))}
        {partners.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center rounded-[16px] bg-[--grey-color] w-[237px] h-[160px]"
          >
            <FadeImg
              src={`/partners/partner-${item.id}.png`}
              alt={item.name}
              width={190}
              height={80}
              quality={100}
              className="w-auto h-auto"
              noLoader
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
