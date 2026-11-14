"use client";

import React, { createContext, useContext, useEffect } from "react";
import {
  activeThemeKey,
  getActiveTheme,
  ThemePreset,
} from "@/config/theme.config";

interface ThemeContextType {
  currentTheme: ThemePreset;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: getActiveTheme(activeThemeKey),
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always derive from theme.config.ts - no customer toggle or localStorage interference
  const currentTheme = getActiveTheme(activeThemeKey);

  useEffect(() => {
    // Apply CSS variables to root element directly from theme.config.ts
    const root = document.documentElement;
    const colors = currentTheme.colors;
    for (const [key, value] of Object.entries(colors)) {
      root.style.setProperty(`--color-${key}`, value);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
