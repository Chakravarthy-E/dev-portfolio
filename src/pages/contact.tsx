"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://formsubmit.co/abb6d9f39d3d927e55998b44cc0763a6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(
          "There was a problem sending your message. Please try again."
        );
      }
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex items-start justify-center flex-col w-[600px] font-dosis space-y-7 py-10 min-h-screen"
    >
      <h1 className="text-3xl font-semibold text-blue-600">Contact Me</h1>
      <p className="text-gray-600">
        Have any questions or want to work together? Fill out the form below,
        and I’ll get back to you as soon as possible.
      </p>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4 w-[600px]">
          <Input
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Enter Message...."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button className="bg-black" type="submit">
            {loading ? "sending...." : "Submit"}
          </Button>
        </form>
        {status && (
          <p
            className={`mt-4 ${
              status.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
