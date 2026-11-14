"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  themePalettes,
  activeThemeKey,
  getActiveTheme,
  ThemePreset,
} from "@/config/theme.config";

interface ThemeContextType {
  currentTheme: ThemePreset;
  setTheme: (key: string) => void;
  availableThemes: ThemePreset[];
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: getActiveTheme(activeThemeKey),
  setTheme: () => {},
  availableThemes: Object.values(themePalettes),
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeKey, setThemeKey] = useState<string>(activeThemeKey);

  useEffect(() => {
    // Check if user previously saved a theme preference in localStorage
    const saved = localStorage.getItem("servixo-theme");
    if (saved && themePalettes[saved]) {
      setThemeKey(saved);
    }
  }, []);

  const currentTheme = getActiveTheme(themeKey);

  useEffect(() => {
    // Apply CSS variables to root element
    const root = document.documentElement;
    const colors = currentTheme.colors;
    for (const [key, value] of Object.entries(colors)) {
      root.style.setProperty(`--color-${key}`, value);
    }
  }, [currentTheme]);

  const setTheme = (key: string) => {
    if (themePalettes[key]) {
      setThemeKey(key);
      localStorage.setItem("servixo-theme", key);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        availableThemes: Object.values(themePalettes),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

