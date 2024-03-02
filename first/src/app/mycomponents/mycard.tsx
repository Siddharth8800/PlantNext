"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MyCard({
  id,
  name,
  description,
  url,
  styles = "",
}: Readonly<{
  id: number;
  name: string;
  description: string;
  url: string;
  styles?: string;
}>) {
  return (
    <>
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Image
            className="rounded-2xl"
            src={url}
            width={250}
            height={250}
            alt={`${name} card`}
          />
        </CardContent>
        <CardFooter className="flex items-center justify-center space-x-3">
          <Button className="w-1/2" variant="secondary">
            Check Availablity
          </Button>
          <Button className="w-1/2">Add to Garden</Button>
        </CardFooter>
      </Card>
    </>
  );
}
