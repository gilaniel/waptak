"use client";
import { useState } from "react";
import ThemeContext from "./context";
import { ChannelItem } from "./types/model";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [channel, setChannel] = useState<ChannelItem | undefined>(undefined);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
