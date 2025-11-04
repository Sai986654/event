import React, { createContext, useContext, useState } from "react";

// ✅ Create the context
const SelectionContext = createContext();

// ✅ Custom hook for consuming context easily
export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};

// ✅ The provider component (wraps your whole app)
export const SelectionProvider = ({ children }) => {
  // Store selected plans for each service category
  const [selections, setSelections] = useState({});

  // Define order of service categories
  const serviceOrder = [
    "photography",
    "catering",
    "makeup",
    "decoration",
    "sangeet",
  ];

  // Update the selection for a given category
  const updateSelection = (category, plan) => {
    setSelections((prev) => ({
      ...prev,
      [category]: plan,
    }));
  };

  // Clear all selections (for restarting quotation flow)
  const resetSelections = () => {
    setSelections({});
  };

  // Global context value
  const value = {
    selections,
    updateSelection,
    resetSelections,
    serviceOrder,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};
