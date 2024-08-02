import { Header } from "@/components/molecules/Header";
import Landing from "@/components/organisms/Landing";
import React from "react";

function page() {
  return (
    <main className="mx-auto flex items-center justify-center flex-col bg-gray-400/90">
      <Header />
      <Landing />
    </main>
  );
}

export default page;
