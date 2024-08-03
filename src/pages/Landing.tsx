import { ParallaxText } from "@/utils/parallaxText";
import { ArrowDownToLine, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Landing() {
  return (
    <motion.section className="min-h-screen flex items-center justify-center flex-col font-dosis">
      <div className="text-start space-y-6  px-4 pt-4 pb-28 h-2/3">
        <h1 className="text-5xl font-semibold font-dosis">
          <motion.span>
            <motion.span></motion.span>
          </motion.span>
          Hello I&apos;m <br />
          <span className="font-bold text-blue-500">Chakravarthy</span>
        </h1>
        <div className="w-[700px]">
          <ParallaxText baseVelocity={-5}>
            <p className="space-x-6">
              <span>Software Developer</span>
              <span>Full Stack Developer</span>
              <span>Front-end Developer</span>
            </p>
          </ParallaxText>
        </div>
        <p className="font-semibold text-start w-[700px]">
          I am a FullStack Software Engineer, specialized in web applications
          development using JavaScript frameworks. I create and contribute to
          amazing web applications making the internet a better place.
        </p>
        <div className="flex items-end justify-between">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-black text-white flex items-center px-4 py-2 rounded-md"
          >
            Download CV
            <ArrowDownToLine size={15} className="ml-2" />
          </motion.button>
          <div className="flex items-center space-x-3">
            <motion.span
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              className="p-2 rounded-full cursor-pointer hover:text-blue-500"
            >
              <Linkedin size={20} />
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              className="p-2 rounded-full cursor-pointer hover:text-black"
            >
              <Github size={20} />
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
              className="p-2 rounded-full cursor-pointer hover:text-rose-600"
            >
              <Instagram size={20} />
            </motion.span>
          </div>
        </div>
      </div>

      <div className="w-[600px]"></div>
    </motion.section>
  );
}

export default Landing;
