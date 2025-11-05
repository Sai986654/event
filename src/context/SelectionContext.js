import React, { createContext, useContext, useState, useEffect } from "react";

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selections, setSelections] = useState({});
  const [serviceOrder] = useState([
    "photography",
    "catering",
    "decoration",
    "sangeet",
    "makeup",
  ]);

  // ✅ Load selections from localStorage on app start
  useEffect(() => {
    const savedSelections = localStorage.getItem("spgSelections");
    if (savedSelections) {
      setSelections(JSON.parse(savedSelections));
    }
  }, []);

  // ✅ Auto-save selections whenever they change
  useEffect(() => {
    localStorage.setItem("spgSelections", JSON.stringify(selections));
  }, [selections]);

  const updateSelection = (category, plan) => {
    setSelections((prev) => ({ ...prev, [category]: plan }));
  };

  const clearSelections = () => {
    setSelections({});
    localStorage.removeItem("spgSelections");
  };

  return (
    <SelectionContext.Provider
      value={{ selections, updateSelection, clearSelections, serviceOrder }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
