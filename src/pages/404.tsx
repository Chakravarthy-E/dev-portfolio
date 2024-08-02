"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import not_found from "../assets/svg/not_found.svg";

function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center flex-col space-y-4 font-raleway">
      <Image src={not_found} alt="not-found" width={300} height={300} />
      <p>Page Not found</p>
      <Button onClick={() => router.back()}>Go back</Button>
    </div>
  );
}

export default NotFound;
