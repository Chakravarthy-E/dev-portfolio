import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex items-start justify-center flex-col w-[600px] font-dosis space-y-7 py-10"
    >
      <h1 className="text-3xl font-semibold">Contact Me</h1>
      <p className="text-gray-600">
        Have any questions or want to work together? Fill out the form below,
        and I’ll get back to you as soon as possible.
      </p>
      <div className="space-y-4 w-[600px]">
        <Input placeholder="Enter Your Email" />
        <Textarea placeholder="Enter Message...." />
        <Button className="bg-black">Submit</Button>
      </div>
    </div>
  );
}

export default Contact;
