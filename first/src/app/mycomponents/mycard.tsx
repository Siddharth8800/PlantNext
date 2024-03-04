"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState, useContext } from "react";
import { GardenContext } from "@/context/GardenContext";
import { useLocalStorage } from "./useLocalStorage";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { toast } from "sonner";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plant } from "@/context/GardenContext";

export default function MyCard({
  id,
  name,
  description,
  url,
  styles = "",
  onClickGarden,
}: Readonly<{
  id: number;
  name: string;
  description: string;
  url: string;
  styles?: string;
  onClickGarden?: () => void;
}>) {
  // const { addToGarden } = useContext(GardenContext);
  // const handleAddToGarden = () => {
  //   const plant: Plant = { id, name, description, url };
  //   addToGarden(plant);
  // };
  const addToGarden = () => {
    // Get the current garden data from local storage
    const currentGarden = JSON.parse(localStorage.getItem("garden") || "[]");
    // Add the new card data to the garden array
    currentGarden.push({
      id,
      name,
      description,
      url,
    });
    // Store the updated garden data in local storage
    localStorage.setItem("garden", JSON.stringify(currentGarden));
  };
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
        <CardFooter>
          <Button className="w-full">Chat</Button>
        </CardFooter>
        <CardFooter className="flex items-center justify-center space-x-3">
          <Button className="w-1/2" variant="secondary">
            Check Availablity
          </Button>
          <Button
            className="w-1/2"
            onClick={() => {
              addToGarden();
              toast("Plant added to your Garden", {
                description: "Kindly visit your garden to view the plant.",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });
            }}
          >
            Add to Garden
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
