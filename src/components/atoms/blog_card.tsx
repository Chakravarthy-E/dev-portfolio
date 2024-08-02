import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Blog_card() {
  return (
    <Card className="w-[230px]">
      <CardHeader>
        <CardTitle>Blog Title</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>Next.js</CardFooter>
    </Card>
  );
}

export default Blog_card;
