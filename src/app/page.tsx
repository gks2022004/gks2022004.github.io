import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { HackathonCard } from "@/components/hackathon-card";
import LiveClock from "@/components/live-clock";
import ViewCounter from "@/components/view-counter";
import { OpenSourceCard } from "@/components/open-source-card";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="font-serif text-4xl tracking-tight sm:text-6xl xl:text-7xl/none cursor-default transition-all duration-500 hover:[text-shadow:0_0_28px_rgba(196,18,30,0.55)]"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} `}
              />
              <BlurFade delay={BLUR_FADE_DELAY} className="max-w-[600px]">
                <p className="md:text-xl text-muted-foreground">
                  {DATA.description.split(". ")[0]}.{" "}
                  <span className="font-serif text-foreground">
                    {DATA.description.split(". ").slice(1).join(". ")}
                  </span>
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <LiveClock />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border overflow-hidden transition-all duration-500 hover:border-[hsl(353_70%_45%)] hover:shadow-[0_0_34px_rgba(196,18,30,0.55)]">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover w-full h-full"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="font-serif text-2xl tracking-tight">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="font-serif text-2xl tracking-tight">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="font-serif text-2xl tracking-tight">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 4 + id * 0.06}
                inView
                yOffset={14}
                blur="8px"
              >
                <Badge
                  key={skill}
                  className="transition-colors duration-300 hover:bg-[hsl(353_70%_45%)] hover:text-white"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="open-source">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col gap-0.5">
              <h2 className="font-serif text-2xl tracking-tight">Open Source</h2>
              <p className="text-xs text-muted-foreground">
                Merged pull requests to public repositories. Click a card to read more.
              </p>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-1">
            {DATA.openSource.map((contribution, id) => (
              <BlurFade
                key={contribution.pr}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <OpenSourceCard
                  logoUrl={contribution.logoUrl}
                  org={contribution.org}
                  orgUrl={contribution.orgUrl}
                  repo={contribution.repo}
                  repoUrl={contribution.repoUrl}
                  pr={contribution.pr}
                  prUrl={contribution.prUrl}
                  date={contribution.date}
                  description={contribution.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="font-serif text-2xl tracking-tight">Hackathons</h2>
          </BlurFade>
          <ul className="ml-4 divide-y divide-dashed border-l">
            {DATA.hackathons.map((hackathon, id) => (
              <BlurFade
                key={`${hackathon.title}-${hackathon.dates}-${id}`}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <HackathonCard
                  title={hackathon.title}
                  description={hackathon.description}
                  dates={hackathon.dates}
                  location={hackathon.location}
                  win={"win" in hackathon ? hackathon.win : undefined}
                  image={hackathon.image}
                  links={hackathon.links}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="font-serif text-4xl tracking-tight sm:text-6xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Protocols, primitives, and products I&apos;ve built across
                  the decentralized finance stack. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="font-serif text-4xl tracking-tight sm:text-6xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="link-accent font-medium"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <footer className="flex justify-center pb-16 pt-4 text-xs text-muted-foreground">
        <ViewCounter slug="home" />
      </footer>
    </main>
  );
}
