"use client";

import { useState } from "react";

const CATEGORIES = [
  {
    name: "Все",
    value: "all",
  },
  {
    name: "ютуб шоу",
    value: "youtube",
  },
  {
    name: "Сериалы",
    value: "series",
  },
  {
    name: "анимация",
    value: "animation",
  },
  {
    name: "шоу",
    value: "show",
  },
];

export const Tabs = ({
  handleCategoryChange,
}: {
  handleCategoryChange: (category: string) => void;
}) => {
  const [active, setActive] = useState("all");
  return (
    <div className="flex gap-4 mb-5 flex-wrap justify-center px-5 tabs">
      {CATEGORIES.map((category) => (
        <div
          key={category.value}
          className={`uppercase font-[700] text-[12px] leading-[100%] text-center flex items-center justify-center px-6 py-3 rounded-[4px] transition-colors hover:text-white hover:bg-[--green-color-secondary] ${
            active === category.value
              ? "bg-[#27a570] text-white"
              : "bg-[--grey-color] cursor-pointer"
          }`}
          style={{ letterSpacing: "0.07em" }}
          onClick={() => {
            setActive(category.value);
            handleCategoryChange(category.value);
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};
