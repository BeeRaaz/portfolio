import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const experiences = [
    {
      companyName: "GetDevDone",
      companyLink: "https://getdevdone.com/",
      position: "Jr. FullStack Developer (Frontend focused)",
      description:
        "Working on various projects focusing on frontend development.",
      from: "2024-07",
      to: "Present",
      techStacks: [
        "HTML",
        "CSS",
        "JavaScript",
        "SCSS",
        "Bootstrap",
        "Tailwind CSS",
        "WordPress",
        "Elementor",
      ],
    },
    {
      companyName: "GetDevDone",
      companyLink: "https://getdevdone.com/",
      position: "FullStack Developer Trainee",
      description:
        "Introduced to Web Accessibilities, how to implement them so that all users can navigate thoroughly, and creating pixel perfect designs.",
      from: "2024-03",
      to: "2024-07",
      techStacks: [
        "HTML",
        "CSS",
        "JavaScript",
        "SCSS",
        "Bootstrap",
        "Tailwind CSS",
        "WordPress",
        "Elementor",
      ],
    },
    {
      companyName: "Realm Infotech",
      companyLink: "https://realminfotek.com/",
      position: "Frontend Developer Intern",
      description:
        "Worked on a quotation system, which helped our clients to make quotation ready within minutes. This helped them save a lot of time.",
      from: "2023-07",
      to: "2023-11",
      techStacks: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
  ];
  const projects = [
    {
      projectName: "Space Explore",
      projectLinkGithub: "https://github.com/BeeRaaz/space-explore",
      projectLinkLive: "https://space-explore-alpha.vercel.app/",
      description:
        "Implemented official API from NASA to show the Astrological Picture Of the Day (APOD).",
      techStacks: ["Next.js", "TypeScript", "Tailwind CSS", "API NASA"],
    },
    {
      projectName: "E-Com Cart",
      projectLinkGithub: "https://github.com/BeeRaaz/e-com-practice",
      projectLinkLive: "https://e-com-practice.vercel.app/",
      description:
        "Used fakestore API to list the products. Implemented Cart functionality with Local Storage.",
      techStacks: ["React", "TypeScript", "Tailwind CSS", "API fakestore"],
    },
    {
      projectName: "Valo Agents",
      projectLinkGithub: "https://github.com/BeeRaaz/valo-agents",
      projectLinkLive: "https://valo-agents.vercel.app/",
      description:
        'Used unofficial API to list the agents of a 5v5 FPS tactical shooter game "Valorant".',
      techStacks: ["React", "Tailwind CSS", "GSAP"],
    },
  ];

  return (
    <>
      <section className="pt-32 pb-4 md:pb-12">
        <Container classes="text-center">
          <Image
            src={"/Biraj-Bitmoji.png"}
            alt={"BeeRaaz"}
            width={300}
            height={100}
            className="rounded-3xl mx-auto mb-5 md:mb-10"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 md:mb-10">
            BeeRaaz
          </h1>
          <p>
            Enthusiastic Junior Frontend Developer with a year of experience in
            building user-friendly and visually appealing web applications.
            Passionate about creating intuitive and engaging digital
            experiences. Eager to contribute to a dynamic team and continuously
            learn and grow in the field of frontend development.
          </p>
        </Container>
      </section>
      <section className="py-4 md:py-12">
        <Container>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-5 md:mb-10">
            Experience
          </h2>
          <ul>
            {experiences &&
              experiences.map((experience) => (
                <li key={experience.position} className="mb-5 last:mb-0">
                  <div className="p-5 border border-border rounded-xl bg-background md:flex md:flex-wrap md:p-10">
                    <div className="mb-3 md:w-1/4 md:mb-0">
                      <Link
                        href={experience.companyLink}
                        target={"_blank"}
                        className="inline-block text-xl font-medium tracking-tight mb-1"
                      >
                        {experience.companyName}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        <time dateTime={experience.from}>
                          {experience.from}
                        </time>{" "}
                        - <time dateTime={experience.to}>{experience.to}</time>
                      </p>
                    </div>
                    <div className="md:flex-1 md:ps-5">
                      <h3 className="text-2xl font-semibold tracking-tighter mb-3">
                        {experience.position}
                      </h3>
                      <p className="text-base mb-3">{experience.description}</p>
                      <h4 className="text-xl font-medium tracking-tight mb-3">
                        Tech Stack
                      </h4>
                      <ul className="flex flex-wrap items-center gap-2">
                        {experience.techStacks.map((stack) => (
                          <li
                            key={stack}
                            className="py-1 px-3 md:py-2 md:px-3 bg-secondary border rounded-md flex flex-wrap justify-center items-center"
                          >
                            <span className="text-xs inline-block">
                              {stack}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </Container>
      </section>
      <section className="py-4 md:py-12">
        <Container>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-5 md:mb-10">
            Projects
          </h2>
          <ul>
            {projects &&
              projects.map((project) => (
                <li key={project.projectName} className="mb-5 last:mb-0">
                  <div className="relative border border-border p-5 rounded-lg md:p-10">
                    <div className="pb-5">
                      <h3 className="text-2xl font-semibold tracking-tighter mb-3">
                        {project.projectName}
                      </h3>
                      <p className="text-base mb-3">{project.description}</p>
                      <ul className="flex flex-wrap items-center gap-2">
                        {project.techStacks.map((stack) => (
                          <li
                            key={stack}
                            className="py-1 px-3 md:py-2 md:px-3 bg-secondary border rounded-md flex flex-wrap justify-center items-center"
                          >
                            <span className="text-xs inline-block">
                              {stack}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-5 border-t">
                      <Link href={project.projectLinkGithub} target={'_blank'}>
                        <Button className="group">
                          View Code{" "}
                          <ArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" />
                        </Button>
                      </Link>
                      <Link href={project.projectLinkLive} target={'_blank'}>
                        <Button variant={"secondary"} className="group">
                          View Live{" "}
                          <ArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
