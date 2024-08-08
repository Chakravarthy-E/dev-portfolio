import Head from "next/head";
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
    <>
      <Head>
        <title>Chakravarthy E - Software Developer & Next.js Specialist</title>
        <meta
          name="description"
          content="Chakravarthy E is a highly skilled Frontend Developer specializing in Next.js. Explore his portfolio to see his projects, skills, and professional experience in web development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Chakravarthy E - Software Developer & Next.js Specialist"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Chakravarthy E, a professional Frontend Developer with expertise in Next.js, showcasing his skills, projects, and experience."
        />
        <meta property="og:image" content="/images/portfolio-cover.jpg" />
        <meta
          property="og:url"
          content="https://chakravarthy-e-dev.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chakravarthy E - Software Developer & Next.js Specialist"
        />
        <meta
          name="twitter:description"
          content="Discover the work of Chakravarthy E, an expert Software Developer focusing on Next.js. View his portfolio to learn more about his skills and projects."
        />
        <meta name="twitter:image" content="/images/portfolio-cover.jpg" />

        <link
          rel="icon"
          href="https://img.icons8.com/?size=160&id=UrU1MJHWdnI4&format=png"
        />

        <link rel="canonical" href="https://chakravarthy-e-dev.vercel.app/" />
      </Head>
      <main className="mx-auto  ">
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}

export default page;
