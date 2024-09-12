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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

export default function GardenCard({
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

  // const removeFromGarden = () => {
  //   // Get the current garden data from local storage
  //   const currentGarden = JSON.parse(localStorage.getItem("garden") || "[]");
  //   // Find the index of the plant to be removed
  //   const plantIndex = currentGarden.findIndex((plant) => plant.id === id);
  //   // If the plant is found, remove it from the array
  //   if (plantIndex !== -1) {
  //     currentGarden.splice(plantIndex, 1);
  //   }
  //   // Store the updated garden data in local storage
  //   localStorage.setItem("garden", JSON.stringify(currentGarden));
  // };
  

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
          <Button className="w-full">Health Check</Button>
        </CardFooter>
        <CardFooter className="flex items-center justify-center space-x-3">
          <Button className="w-1/2" variant="destructive">
            Remove Plant
          </Button>
          {/* <Button
            className="w-1/2"
            variant="outline"
            onClick={() => {
              toast("Plant added to your Garden", {
                description: "Kindly visit your garden to view the plant.",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              });
            }}
          >
            Set Reaminder
          </Button> */}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Set Reminder</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Reminder</DialogTitle>
                <DialogDescription>
                  Specify details for reminder. Click save when you are done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Time
                  </Label>
                  <Input
                    id="time"
                    itemID="appt-time"
                    name="appt-time"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Description
                  </Label>
                  <Input id="text" value="Water plant" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={() => {
                    toast("Reminder Set", {
                      description:
                        "You will be reminded on the time specified.",
                      action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                      },
                    });
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}
