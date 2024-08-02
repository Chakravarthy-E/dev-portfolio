import Project_card from "@/components/atoms/project_card";
import React from "react";

function Projects() {
  return (
    <div className="min-h-screen flex items-start justify-center flex-col w-[600px] font-dosis space-y-7">
      <h1 className="text-3xl font-semibold">My Projects</h1>
      <div className="grid xl:grid-cols-2 gap-2 grid-cols-2">
        <Project_card />
        <Project_card />
        <Project_card />
        <Project_card />
        <Project_card />
      </div>
    </div>
  );
}

export default Projects;
