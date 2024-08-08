import React from "react";

function About() {
  return (
    <div
      id="about"
      className="flex items-start justify-center flex-col  w-[600px] font-dosis space-y-7 pb-10 min-h-screen"
    >
      <h1 className="text-3xl font-semibold text-blue-600">About</h1>
      <div className="space-y-5 font-semibold">
        <p>
          Hi, I&apos;m Chakravarthy, a Full-Stack Developer based in Bangalore.
          With a solid background in business and technology, I hold an M.B.A
          from Vikrama Simhapuri University and a B.Com from Mangalakara Degree
          College. My journey into the tech world was further solidified through
          a comprehensive Full Stack Development course at 10x Academy.
        </p>
        <p>
          As a freelance frontend developer at Resencee Private Limited, I
          specialize in crafting dynamic, user-friendly web applications. My
          tech stack includes React.js, Next.js, TypeScript, and Tailwind CSS,
          allowing me to build responsive and visually appealing websites for a
          diverse range of clients.
        </p>
        <p>
          I thrive on new challenges and am always looking to collaborate on
          innovative projects. If you&apos;re interested in working together or
          have any questions, don&apos;t hesitate to reach out. I&apos;m eager
          to connect with fellow tech enthusiasts and explore exciting new
          opportunities!
        </p>
      </div>
    </div>
  );
}

export default About;
