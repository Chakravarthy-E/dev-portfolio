import { ParallaxText } from "@/utils/parallaxText";
import { ArrowDownToLine, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";

function Landing() {
  return (
    <motion.section
      id="landing"
      className="flex w-[600px] items-center justify-center flex-col font-dosis min-h-screen"
    >
      <div className="text-start space-y-6  px-4 pt-10 pb-10 h-2/3">
        <h1 className="text-5xl font-semibold font-dosis">
          Hello I&apos;m <br />
          <span className="font-bold text-blue-500">Chakravarthy</span>
        </h1>
        <p className="font-semibold text-start w-[600px]">
          I am a FullStack Software Engineer, specialized in web applications
          development using JavaScript frameworks. I create and contribute to
          amazing web applications making the internet a better place.
        </p>
        <div className="flex items-end justify-between">
          <div className="flex items-center space-x-3">
            <motion.span
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              className="p-2 rounded-full cursor-pointer hover:text-blue-500"
            >
              <a href={LINKS.LINKEDIN}>
                <Linkedin size={20} />
              </a>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              className="p-2 rounded-full cursor-pointer dark:hover:text-yellow-500 hover:text-black"
            >
              <a href={LINKS.GITHUB}>
                <Github size={20} />
              </a>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              className="p-2 rounded-full cursor-pointer hover:text-rose-600"
            >
              <a href={LINKS.INSTAGRAM}>
                <Instagram size={20} />
              </a>
            </motion.span>
          </div>
        </div>
      </div>

      <div className="w-[600px]"></div>
    </motion.section>
  );
}

export default Landing;
