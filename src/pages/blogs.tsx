import Blog_card from "@/components/atoms/blog_card";
import masterJsImage from "../assets/images/article-arc.png";
import React from "react";

function Blogs() {
  return (
    <div
      id="blogs"
      className=" flex items-start justify-center flex-col w-[600px] font-dosis space-y-7 py-10"
    >
      <h1 className="text-3xl font-semibold">My Blogs</h1>
      <div className="flex flex-col space-y-5">
        <Blog_card
          title="Mastering JavaScript Array Methods"
          live="https://article-arc.vercel.app/blog/667d3c117bfbbd8055c31d6b"
          imageSrc={masterJsImage}
          date="Jun 2024"
        />
      </div>
    </div>
  );
}

export default Blogs;
