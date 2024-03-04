"use client";

import Header from "../mycomponents/Header";
import NavBar from "../mycomponents/NavBar";
import { MainNav } from "../mycomponents/navitems";
import { useEffect, useState } from "react";
import MyCard from "../mycomponents/mycard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import GardenCard from "../mycomponents/GardenCard";
import axios from "axios";
import { useContext } from "react";
import { GardenContext } from "@/context/GardenContext";

export default function Garden() {
  const [garden, setGarden] = useState([]);
  useEffect(() => {
    // Get the garden data from local storage
    const storedGarden = JSON.parse(localStorage.getItem("garden") || "[]");
    setGarden(storedGarden);
  }, []);
  const clearGarden = () => {
    // Clear the garden data from local storage
    localStorage.removeItem("garden");
    // Clear the garden state
    setGarden([]);
  };

  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [response, setResponse] = useState(null);
  const [cardDataArray, setCardDataArray] = useState<
    { id: number; name: string; description: string; url: string }[]
  >([]);

  const handleImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setResponse(event.target.files[0]);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const userMessage = {
      text: message,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    axios
      .post("http://localhost:8000/chat", { question: message })
      .then((response) => {
        const reply = {
          text:
            typeof response.data === "string"
              ? response.data
              : response.data.message,
          sender: "reply",
        };
        setMessages((prev) => [...prev, reply]);
      })
      .catch((error) => console.error("Error:", error));
  };

  const [cardData, setCardData] = useState<{
    id: number;
    name: string;
    description: string;
  } | null>(null);
  const handleClick = () => {
    setShowImage(true);
    const formData = new FormData();
    formData.append("upload_file", response);
    fetch("http://localhost:8000/uploadfile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { id, name, description } = data;
        setCardData({ id, name, description });
        setCardDataArray((prev) => [
          ...prev,
          { id, name, description, url: image },
        ]);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <NavBar items={MainNav} />
      <Header styles="text-6xl" word1="Soumya's" word2=" Garden" />
      <div className="gardenmain flex flex-col items-center">
        <button
          onClick={clearGarden}
          className="bg-green-500 text-black p-2 rounded-md"
        >
          Clear Garden
        </button>
        <div className="w-5/6 rounded-xl border-2 min-h-70 p-10 m-5 flex flex-row items-center">
          <div className="flex w-max space-x-4 p-4">
            {garden.map((plant) => (
              <GardenCard
                key={plant.id}
                id={plant.id}
                name={plant.name}
                description={plant.description}
                url={plant.url}
              />
            ))}
          </div>
        </div>
        <div className="chatbox w-2/3 rounded-xl border-2 min-h-70 p-10 m-5 flex flex-col items-center">
          <Header styles="text-4xl" word1="Health" word2="Monitor" />
          <div className="chatcontent w-3/4 border-4 min-h-80 rounded-xl m-5">
            <ScrollArea className="w-full rounded-md border">
              <div className="flex flex-col w-full space-x-4 p-4 max-h-80">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${
                      message.sender === "user"
                        ? "bg-green-500 text-white self-end"
                        : "bg-gray-500 text-white self-start"
                    } m-2 p-2 rounded-lg`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
          <form
            onSubmit={handleSendMessage}
            className="flex w-full max-w-sm items-center space-x-2 m-5"
          >
            <Input
              type="text"
              placeholder="Type Something"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border-2"
            />
            <Button type="submit">Submit</Button>
          </form>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" onChange={handleImage} />
            <Button type="button" onClick={handleClick}>
              Upload
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
