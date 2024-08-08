import { LINKS } from "@/lib/constants";
import React from "react";

function Experience() {
  return (
    <div
      id="experience"
      className=" flex items-start justify-center flex-col w-[600px] font-dosis space-y-7 pb-10 min-h-screen"
    >
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-semibold text-blue-600">Experience</h1>
        <p className="border px-5 py-2 text-xs">
          <a href={LINKS.RESUME}>Download CV</a>
        </p>
      </div>

      <div className="border-l-4 space-y-2 px-4">
        <p className="flex items-center justify-between w-[600px]">
          <span className="font-semibold">Resenese India Private Limited</span>
          <span className="text-xs font-semibold text-gray-600">
            Apr 2024 - Jul 2024
          </span>
        </p>
        <p className="italic font-semibold text-xs  text-gray-600">
          Front-end Developer
        </p>
      </div>
      <div className="border-l-4 space-y-2 px-4">
        <p className="flex items-center justify-between w-[600px]">
          <span className="font-semibold">Gamersback Private Limited</span>
          <span className="text-xs font-semibold  text-gray-600">
            Nov 2023 - Mar 2024
          </span>
        </p>
        <p className="italic font-semibold text-xs  text-gray-600">
          Intern, React.js Developer
        </p>
      </div>
    </div>
  );
}

export default Experience;
