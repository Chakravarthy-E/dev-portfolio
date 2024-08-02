import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  title: string;
  github: string;
  demo: string;
}

function Project_card() {
  return (
    <Card className="w-[230px]">
      <CardHeader>
        <CardTitle>Blog Application</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>Next.js</CardFooter>
    </Card>
  );
}

export default Project_card;
