import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Github, Linkedin } from "lucide-react";
import React from "react";

function Landing() {
  return (
    <section className="min-h-screen flex items-start justify-center flex-col w-[500px] space-y-9 font-dosis">
      <div className="text-start">
        <p className="font-semibold font-dosis">Software Developer</p>
        <h1 className="text-5xl font-semibold font-dosis">
          Hello I&apos;m <br />
          <span className="font-bold text-white">Chakravarthy</span>
        </h1>
      </div>
      <p className="font-semibold">
        I am a FullStack Software Engineer, specialized in web applications
        development using JavaScript frameworks. I create and contribute to
        amazing web applications making the internet a better place.
      </p>
      <div className="flex items-center justify-between w-[500px]">
        <Button className="bg-black hover:bg-slate-700 text-xs">
          Download CV
          <span className="ml-2">
            <ArrowDownToLine size={15} />
          </span>
        </Button>
        <div className="flex items-center space-x-3">
          <span className="border p-2 rounded-full border-black  hover:bg-slate-700 cursor-pointer hover:text-white">
            <Linkedin size={15} />
          </span>
          <span className="border p-2 hover:bg-slate-700 hover:text-white rounded-full cursor-pointer border-black ">
            <Github size={15} />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Landing;
