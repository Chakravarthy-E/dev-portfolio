import Project_card from "@/components/atoms/project_card";
import React from "react";
import budget_tracker_Image from "../assets/images/budget-tracker.png";
import article_Image from "../assets/images/article-arc.png";
import { LINKS } from "@/lib/constants";

function Projects() {
  return (
    <div
      id="projects"
      className=" flex items-start justify-center flex-col pb10 w-[600px] font-dosis  space-y-3"
    >
      <h1 className="text-3xl font-semibold">Check out my work</h1>
      <p>
        I’ve worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className="flex flex-col space-y-5">
        <Project_card
          title="Budget Tracker"
          demo={LINKS.BUDGET_TRACKER_LIVE}
          github={LINKS.BUDGET_TRACKER_GITHUB}
          imageSrc={budget_tracker_Image}
          date="May 2024"
          techSkills="Next.js, TypeScript, PostgreSQL, Prisma, TailwindCSS"
        />
        <Project_card
          title="Blog Application"
          demo={LINKS.ARTICLE_ARC_LIVE}
          github={LINKS.ARTICLE_ARC_GITHUB}
          imageSrc={article_Image}
          date="Jun 2024 - Present"
          techSkills="Next.js, TypeScript, MongoDB, Node.js, TailwindCSS"
        />
      </div>
    </div>
  );
}

export default Projects;
