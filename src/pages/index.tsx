import About from "./about";
import Experience from "./experience";
import Landing from "./Landing";
import React from "react";
import Skills from "./skills";
import Projects from "./projects";
import Blogs from "./blogs";
import Contact from "./contact";

function page() {
  return (
    <main className="mx-auto  ">
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  );
}

export default page;
