import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Project_card from "@/components/atoms/project_card";
import budget_tracker_Image from "../assets/images/budget-tracker.png";
import article_Image from "../assets/images/article-arc.png";
import { LINKS } from "@/lib/constants";

export function Projects() {
  // Project data
  const projects = [
    {
      title: "Budget Tracker",
      demo: LINKS.BUDGET_TRACKER_LIVE,
      github: LINKS.BUDGET_TRACKER_GITHUB,
      imageSrc: budget_tracker_Image,
      date: "May 2024",
      techSkills: "Next.js, TypeScript, PostgreSQL, Prisma, TailwindCSS",
    },
    {
      title: "Blog Application",
      demo: LINKS.ARTICLE_ARC_LIVE,
      github: LINKS.ARTICLE_ARC_GITHUB,
      imageSrc: article_Image,
      date: "Jun 2024 - Present",
      techSkills: "Next.js, TypeScript, MongoDB, Node.js, TailwindCSS",
    },
  ];

  return (
    <div
      id="projects"
      className="flex items-start justify-center flex-col pb10 w-[600px] font-dosis space-y-7 py-10"
    >
      <h1 className="text-3xl font-semibold text-blue-600">
        Check out my work
      </h1>
      <p>
        I’ve worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>

      <Carousel className="w-full max-w-[600px]">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Project_card
                  title={project.title}
                  demo={project.demo}
                  github={project.github}
                  imageSrc={project.imageSrc}
                  date={project.date}
                  techSkills={project.techSkills}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Projects;
