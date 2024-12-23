"use client";

import ThemeContext from "@/context";
import React, { useContext, useState } from "react";

export const Test = () => {
  const consumer = useContext(ThemeContext);

  if (!consumer) return null;

  return (
    <div
      onClick={() =>
        consumer.setTheme(consumer.theme === "light" ? "dark" : "light")
      }
    >
      {consumer.theme}
    </div>
  );
};
