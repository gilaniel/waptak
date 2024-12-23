"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { ChannelItem } from "./types/model";

type TContext = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
};

const ThemeContext = createContext<TContext | undefined>(undefined);

export default ThemeContext;
