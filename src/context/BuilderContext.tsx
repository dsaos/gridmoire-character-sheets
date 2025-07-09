"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type BuilderContextType = {
  showGuides: boolean;
  toggleGuides: () => void;
};

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [showGuides, setShowGuides] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedGuidesPref = localStorage.getItem('show-guides')
    if (savedGuidesPref) {
      try {
        setShowGuides(savedGuidesPref === 'true')
      } catch (error) {
        console.error('Failed to parse guides data:', error)
        localStorage.removeItem('show-guides')
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('show-guides', String(showGuides));
    }
  }, [showGuides, isLoaded])


  const toggleGuides = () => setShowGuides(prev => !prev);

  return (
    <BuilderContext.Provider value={{ showGuides, toggleGuides }}>
      {children}
    </BuilderContext.Provider>
  );
}

export const useBuilderContext = (): BuilderContextType => {
  const context = useContext(BuilderContext)
  if (context === undefined) {
    throw new Error('useBuilderContext must be used within a BuilderProvider')
  }
  return context as BuilderContextType
}
