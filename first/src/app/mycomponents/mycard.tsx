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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
  onChatClick,
}: Readonly<{
  id: number;
  name: string;
  description: string;
  url: string;
  styles?: string;
  onClickGarden?: () => void;
  onChatClick?: () => void;
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

  const nurseries = [
    "Nursery 1",
    "Nursery 2",
    "Nursery 3",
    "Nursery 4",
    "Nursery 5",
    "Nursery 6",
  ];

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
          <Button className="w-full" onClick={onChatClick}>
            Chat
          </Button>
        </CardFooter>
        <CardFooter className="flex items-center justify-center space-x-3">
          <Dialog>
            <div className="flex items-center justify-center gap-4">
              <DialogTrigger asChild>
                <Button variant="outline">Check Availability</Button>
              </DialogTrigger>
            </div>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Available Nurseries:</DialogTitle>
                <DialogDescription>
                  Here is a list of all the Nurseries close to you.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-40 w-70 rounded-md border">
                <div className="grid gap-4 py-4 items-center justify-center w-full">
                  <div className="items-center gap-4 space-y-2 justify-center w-full">
                    {nurseries.map((nursery, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <p className="mr-4">{nursery}</p>
                        <Button variant="outline">+ Cart</Button>
                        <br></br>
                      </div>
                    ))}
                    <br></br>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
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
