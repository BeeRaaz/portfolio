import Link from "next/link";
import Container from "./Container";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] py-5 bg-background shadow-sm shadow-accent`}
    >
      <Container classes="flex flex-wrap justify-between items-center">
        <div className="inline-block">
          <Link
            href={"/"}
            className="relative z-[9999] text-2xl md:text-4xl font-semibold tracking-tighter"
          >
            BeeRaaz
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link href={"/contact"} className="transition-colors duration-300 hover:text-muted-foreground">Contact</Link>
          <ThemeButton />
        </div>
      </Container>
    </header>
  );
}
