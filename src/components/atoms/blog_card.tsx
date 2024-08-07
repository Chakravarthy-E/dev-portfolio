import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { SlCalender } from "react-icons/sl";
import { IoIosGlobe } from "react-icons/io";
import Image from "next/image";
interface Props {
  title: string;
  live: string;
  imageSrc: any;
  date: string;
}

function Blog_card({ title, imageSrc, live, date }: Props) {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={300}
          className="rounded-lg shadow"
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-xl font-semibold">{title}</p>
        <div className="flex  items-center flex-wrap space-x-2">
          <p className="flex items-center space-x-2">
            <SlCalender className="text-emerald-500 " size={15} />
            <span className="text-xs">{date}</span>
          </p>

          <a href={live} className="flex items-center space-x-2">
            <IoIosGlobe className="text-blue-500 " size={15} />
            <span className="text-xs">Read</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default Blog_card;
