// src/context/GardenContext.tsx
"use client";

import React, { createContext, useState } from "react";

export type Plant = {
  id: number;
  name: string;
  description: string;
  url: string;
};

type GardenContextType = {
  garden: Plant[];
  addToGarden: (plant: Plant) => void;
};

export const GardenContext = createContext<GardenContextType | undefined>(undefined);

export const GardenProvider = ({ children }: { children: React.ReactNode }) => {
  const [garden, setGarden] = useState<Plant[]>([]);

  const addToGarden = (plant: Plant) => {
    setGarden((prevGarden) => [...prevGarden, plant]);
  };

  return (
    <GardenContext.Provider value={{ garden, addToGarden }}>
      {children}
    </GardenContext.Provider>
  );
};
