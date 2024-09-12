"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Heading from "./mycomponents/heading";
import NavBar from "./mycomponents/NavBar";
import { MainNav } from "./mycomponents/navitems";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <>
      <NavBar items={MainNav} />
      <Heading word1="Join as " word2="Nursery" styles="text-6xl "></Heading>
      <div className="flex flex-col justify-center items-center">
        <Dialog>
          <div className="flex items-center justify-center gap-4">
            <DialogTrigger asChild>
              <Button variant="outline">Check Availability</Button>
            </DialogTrigger>
            <Button variant="default">Add to Garden</Button>
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
                <div className="items-center gap-4 justify-center w-full">
                  <div className="flex items-center justify-between">
                    <p className="mr-4">Nursery 1</p>
                    <Button variant="outline">+ Cart</Button>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-between">
                    <p className="mr-4">Nursery 2</p>
                    <Button variant="outline">+ Cart</Button>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-between">
                    <p className="mr-4">Nursery 3</p>
                    <Button variant="outline">+ Cart</Button>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-between">
                    <p className="mr-4">Nursery 4</p>
                    <Button variant="outline">+ Cart</Button>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-between">
                    <p className="mr-4">Nursery 5</p>
                    <Button variant="outline">+ Cart</Button>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-between">
                    <p className="mr-4">Nursery 6</p>
                    <Button variant="outline">+ Cart</Button>
                  </div>
                  <br></br>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
