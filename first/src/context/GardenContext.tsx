// src/context/GardenContext.tsx
"use client";

import React, { createContext, useState } from "react";
export type Plant = {
  id: number;
  name: string;
  description: string;
  url: string;
};

// type GardenContextType = {
//   garden: Plant[];
//   addToGarden: (plant: Plant) => void;
// };

export const GardenContext = createContext<Plant[]>([]);

export const GardenProvider = ({ children }: { children: React.ReactNode }) => {
  const [garden, setgarden] = useState<Plant[]>([]);

  const addToGarden = (plant: Plant) => {
    setgarden((prevGarden) => [...prevGarden, plant]);
  };

  return (
    <GardenContext.Provider value={{ garden, addToGarden }}>
      {children}
    </GardenContext.Provider>
  );
};
