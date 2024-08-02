import Blog_card from "@/components/atoms/blog_card";
import React from "react";

function Blogs() {
  return (
    <div className="min-h-screen flex items-start justify-center flex-col w-[600px] font-dosis space-y-7">
      <h1 className="text-3xl font-semibold">My Blogs</h1>
      <div className="grid xl:grid-cols-2 gap-2 grid-cols-2">
        <Blog_card />
        <Blog_card />
        <Blog_card />
        <Blog_card />
      </div>
    </div>
  );
}

export default Blogs;
