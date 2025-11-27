"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  
  return (
    <>
      <Button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
        variant={"outline"}
        size={"icon"}
        className="relative z-[9999]"
        aria-label="theme toggle"
      >
        {theme === "light" ? <MoonStar /> : <Sun />}
      </Button>
    </>
  )
}