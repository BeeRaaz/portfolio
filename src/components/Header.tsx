"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { MoonStar, Sun } from "lucide-react";
import Container from "./Container";
import { Button } from "./ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] py-5 bg-background shadow-sm shadow-accent`}>
      <Container classes="flex flex-wrap justify-between items-center">
        <div className="inline-block">
          <Link
            href={"/"}
            className="relative z-[9999] text-2xl md:text-4xl font-semibold tracking-tighter"
          >
            BeeRaaz
          </Link>
        </div>
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
      </Container>
    </header>
  );
}
