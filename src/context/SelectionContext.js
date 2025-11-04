// src/context/SelectionContext.js
import React, { createContext, useContext, useState } from "react";

// 🧭 Global Service Order — used to control flow between category pages
export const serviceOrder = [
  "catering",
  "decoration",
  "makeup",
  "photography",
  "sangeet"
];

// 🧩 Create Context
export const SelectionContext = createContext();

// 🚀 Provider Component
export const SelectionProvider = ({ children }) => {
  const [selections, setSelections] = useState({});

  // Add or update selected plan for a service
  const updateSelection = (category, plan) => {
    setSelections((prev) => ({
      ...prev,
      [category]: plan,
    }));
  };

  // Reset selections (if needed, e.g., starting over)
  const resetSelections = () => setSelections({});

  return (
    <SelectionContext.Provider
      value={{ selections, updateSelection, resetSelections, serviceOrder }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

// Custom Hook (optional but clean)
export const useSelection = () => useContext(SelectionContext);
