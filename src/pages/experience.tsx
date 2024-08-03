import React from "react";

function Experience() {
  return (
    <div className="min-h-screen flex items-start justify-center flex-col w-[600px] font-dosis space-y-7">
      <h1 className="text-3xl font-semibold">Experience</h1>
      <p className="font-semibold ">
        Explore my journey through diverse roles, showcasing key projects and
        impactful contributions that highlight my skills and growth in Full
        Stack development.
      </p>
      <div className="border-l-4 space-y-2 px-4">
        <p className="flex items-center justify-between w-[600px]">
          <span className="font-semibold">Resenese India Private Limited</span>
          <span className="text-xs font-semibold">Apr 2024 - Jul 2024</span>
        </p>
        <p className="italic font-semibold text-xs">Front-end Developer</p>
      </div>
      <div className="border-l-4 space-y-2 px-4">
        <p className="flex items-center justify-between w-[600px]">
          <span className="font-semibold">Gamersback Private Limited</span>
          <span className="text-xs font-semibold">Nov 2023 - Mar 2024</span>
        </p>
        <p className="italic font-semibold text-xs">
          Intern, React.js Developer
        </p>
      </div>
    </div>
  );
}

export default Experience;
