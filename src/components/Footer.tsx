import Link from "next/link";
import Container from "./Container";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      path: "https://github.com/BeeRaaz",
      label: "GitHub",
      icon: <Github />,
    },
    {
      path: "https://linkedin.com/in/birajdulal",
      label: "LinkedIn",
      icon: <Linkedin />,
    },
  ];

  return (
    <footer className="py-5 border border-t-border">
      <Container>
        <ul className="flex flex-wrap justify-center items-center gap-3">
          {socialLinks &&
            socialLinks.map((social) => (
              <li key={social.label}>
                <Link href={social.path} aria-label={social.label}>
                  <Button variant={"outline"} size={"icon"}>
                    {social.icon}
                  </Button>
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </footer>
  );
}
