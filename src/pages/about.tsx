import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-start justify-center flex-col w-[500px] font-dosis space-y-7">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <div className="space-y-5 font-semibold">
        <p>
          Hi, I’m Chakravarthy, a Full-Stack Developer based in Bangalore with a
          strong foundation in both business and technology. I hold an M.B.A
          from Vikrama Simhapuri University and a B.Com from Mangalakara Degree
          College, which complements my technical expertise gained through a
          full stack development course at 10x Academy.
        </p>
        <p>
          Currently, I work as a freelance frontend developer at Resencee
          Private Limited, where I focus on creating dynamic, user-friendly web
          applications. My tech stack includes React.js, Next.js, TypeScript,
          and Tailwind CSS, and I’m experienced in building responsive websites
          for various clients.
        </p>
        <p>
          I’m always eager to tackle new challenges and collaborate on exciting
          projects. If you’re interested in working together or have any
          questions, feel free to reach out. I’m excited to connect with others
          in the tech community and explore new opportunities!
        </p>
      </div>
    </div>
  );
}

export default About;
