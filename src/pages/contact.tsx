import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-start justify-center flex-col w-[600px] font-dosis space-y-7">
      <h1 className="text-3xl font-semibold">Contact Me</h1>
      <div className="space-y-4 w-[600px]">
        <Input placeholder="Enter Your Email" />
        <Textarea placeholder="Enter Message...." />
        <Button className="bg-black">Submit</Button>
      </div>
    </div>
  );
}

export default Contact;
