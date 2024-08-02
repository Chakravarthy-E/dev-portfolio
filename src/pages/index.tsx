import About from "./about";
import Landing from "./Landing";
import React from "react";

function page() {
  return (
    <main className="mx-auto flex items-center justify-center flex-col ">
      <Landing />
      <About />
    </main>
  );
}

export default page;
