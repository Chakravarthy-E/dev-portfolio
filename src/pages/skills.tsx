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
    <div
      id="skills"
      className=" flex items-start justify-center flex-col w-[600px] font-dosis space-y-7 pb-20 min-h-screen"
    >
      <h1 className="text-3xl font-semibold text-blue-600">My Skills</h1>
      <div className="border-l-4  space-y-2 px-4 w-[600px]">
        <p className="font-semibold text-violet-600">Web Technologies</p>
        <div className="flex items-center space-x-3">
          <IoLogoJavascript
            size={35}
            className="hover:text-yellow-500"
            title="JavaScript"
          />
          <SiTypescript
            size={35}
            className="hover:text-blue-700"
            title="TypeScript"
          />
          <TiHtml5 size={35} className="hover:text-red-500" title="HTML5" />
          <IoLogoCss3 size={35} className="hover:text-blue-400" title="CSS3" />
        </div>
      </div>
      <div className="border-l-4  space-y-2 px-4 w-[600px]">
        <p className="font-semibold text-violet-600">
          Front-End Frameworks and Libraries
        </p>
        <div className="flex items-center space-x-3">
          <FaReact size={35} className="hover:text-blue-500" title="React" />
          <SiNextdotjs
            size={35}
            className="hover:text-purple-500"
            title="Next.js"
          />
          <RiTailwindCssFill
            size={35}
            className="hover:text-blue-500"
            title="TailwindCSS"
          />
          <TbBrandRedux
            size={35}
            className="hover:text-violet-600"
            title="Redux"
          />
        </div>
      </div>
      <div className="border-l-4  space-y-2 px-4 w-[600px]">
        <p className="font-semibold text-violet-600">
          Back-End Frameworks and Databases
        </p>
        <div className="flex items-center space-x-3">
          <FaNode size={35} className="hover:text-green-800" title="Node.js" />
          <SiExpress
            size={35}
            className="hover:text-black"
            title="Express.js"
          />
          <SiMongodb
            size={35}
            className="hover:text-green-500"
            title="MongoDB"
          />
        </div>
      </div>
      <div className="border-l-4  space-y-2 px-4 w-[600px]">
        <p className="font-semibold text-violet-600">Other Tools</p>
        <div className="flex items-center space-x-3">
          <FaGithub size={35} title="Github" />
          <FaGitAlt size={35} className="hover:text-red-500" title="Git" />
          <SiPostman
            size={35}
            className="hover:text-orange-600"
            title="Postman"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
