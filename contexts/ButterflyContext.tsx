"use client";

import { useState, useEffect, createContext, useContext } from "react";

interface ButterflyContextType {
  enabled: boolean;
  draggable: boolean;
  setEnabled: (enabled: boolean) => void;
  setDraggable: (draggable: boolean) => void;
}

const ButterflyContext = createContext<ButterflyContextType | undefined>(undefined);

export const ButterflyProvider = ({ children }: { children: React.ReactNode }) => {
  const [enabled, setEnabled] = useState(true);
  const [draggable, setDraggable] = useState(false);

  useEffect(() => {
    const savedEnabled = localStorage.getItem("butterflyEnabled");
    const savedDraggable = localStorage.getItem("draggableMode");
    
    if (savedEnabled !== null) setEnabled(savedEnabled === "true");
    if (savedDraggable !== null) setDraggable(savedDraggable === "true");
  }, []);

  const handleSetEnabled = (value: boolean) => {
    setEnabled(value);
    localStorage.setItem("butterflyEnabled", String(value));
  };

  const handleSetDraggable = (value: boolean) => {
    setDraggable(value);
    localStorage.setItem("draggableMode", String(value));
  };

  return (
    <ButterflyContext.Provider
      value={{
        enabled,
        draggable,
        setEnabled: handleSetEnabled,
        setDraggable: handleSetDraggable,
      }}
    >
      {children}
    </ButterflyContext.Provider>
  );
};

export const useButterfly = () => {
  const context = useContext(ButterflyContext);
  if (!context) {
    throw new Error("useButterfly must be used within ButterflyProvider");
  }
  return context;
};
