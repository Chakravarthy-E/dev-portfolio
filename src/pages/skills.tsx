import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";

function Skills() {
  return (
    <div className="min-h-screen flex items-start justify-center flex-col w-[600px] font-dosis space-y-7">
      <h1 className="text-3xl font-semibold">My Skills</h1>
      <div className="border-l-4 space-y-2 px-4 w-[600px]">
        <p className="font-semibold">Web Technologies</p>
        <div className="flex items-center space-x-3">
          <IoLogoJavascript size={35} />
          <SiTypescript size={35} />
          <TiHtml5 size={35} />
          <IoLogoCss3 size={35} />
        </div>
      </div>
      <div className="border-l-4 space-y-2 px-4 w-[600px]">
        <p className="font-semibold">Front-End Frameworks and Libraries</p>
        <div className="flex items-center space-x-3">
          <FaReact size={35} />
          <SiNextdotjs size={35} />
          <RiTailwindCssFill size={35} />
          <TbBrandRedux size={35} />
        </div>
      </div>
      <div className="border-l-4 space-y-2 px-4 w-[600px]">
        <p className="font-semibold">Back-End Frameworks and Databases</p>
        <div className="flex items-center space-x-3">
          <FaNode size={35} />
          <SiExpress size={35} />
          <SiMongodb size={35} />
        </div>
      </div>
      <div className="border-l-4 space-y-2 px-4 w-[600px]">
        <p className="font-semibold">Other Tools</p>
        <div className="flex items-center space-x-3">
          <FaGithub size={35} />
          <FaGitAlt size={35} />
          <SiPostman size={35} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
