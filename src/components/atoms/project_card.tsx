import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { SlCalender } from "react-icons/sl";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  github: string;
  demo: string;
  imageSrc: any;
  techSkills?: string;
  date: string;
}

function Project_card({
  title,
  imageSrc,
  github,
  demo,
  techSkills,
  date,
}: Props) {
  return (
    <Card className="w-[590px] ">
      <CardHeader>
        <CardTitle className="mb-3 underline">{title}</CardTitle>
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={300}
          className="rounded-lg shadow"
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex  items-center flex-wrap space-x-2">
          <p className="flex items-center space-x-2">
            <SlCalender className="text-emerald-500 " size={15} />
            <span className="text-xs">{date}</span>
          </p>

          <a href={demo} className="flex items-center space-x-2">
            <IoIosGlobe className="text-blue-500 " size={15} />
            <span className="text-xs">Live Link</span>
          </a>

          <a href={github} className="flex items-center space-x-2">
            <FaGithub className="text-orange-500 " size={15} />
            <span className="text-xs">GitHub Link</span>
          </a>
        </div>
        <div className="space-x-3">
          {techSkills?.split(",").map((item) => (
            <span
              key={item}
              className="text-xs bg-gray-100 px-4 py-1  rounded-md dark:text-black"
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Project_card;
