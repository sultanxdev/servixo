"use client";

import React, { useState } from "react";
import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-11 px-3.5 rounded-full bg-surface-container-lowest/95 text-on-surface shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-md border border-outline-variant flex items-center gap-2 hover:bg-surface-container-low active:scale-95 transition-all text-sm font-medium"
          title="Change Color Theme"
          aria-label="Color Palette Switcher"
        >
          <span
            className="w-4 h-4 rounded-full border border-black/10 shrink-0"
            style={{ backgroundColor: currentTheme.colors.primary }}
          />
          <span className="hidden sm:inline font-label-sm text-label-sm font-semibold">
            {currentTheme.name}
          </span>
          <span className="material-symbols-outlined text-[18px] text-primary">
            palette
          </span>
        </button>

        {/* Dropdown Panel */}
        {isOpen && (
          <div className="absolute bottom-14 right-0 w-72 bg-surface-container-lowest/95 backdrop-blur-xl border border-outline-variant rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.18)] p-3.5 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/60">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  palette
                </span>
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  Color Theme Palette
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-surface-container flex items-center justify-center text-outline text-xs"
              >
                ✕
              </button>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Configured via <code className="text-[11px] bg-surface-container px-1 py-0.5 rounded">theme.config.ts</code>:
            </p>

            <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              {availableThemes.map((theme) => {
                const isActive = theme.id === currentTheme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between gap-2.5 transition-all ${
                      isActive
                        ? "bg-primary-container text-on-primary-container font-semibold ring-2 ring-primary/40"
                        : "hover:bg-surface-container-low text-on-surface"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex -space-x-1.5 shrink-0">
                        <span
                          className="w-4 h-4 rounded-full border border-white/60 shadow-sm"
                          style={{ backgroundColor: theme.colors.primary }}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-white/60 shadow-sm"
                          style={{ backgroundColor: theme.colors.secondary }}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-white/60 shadow-sm"
                          style={{ backgroundColor: theme.colors["surface-container-high"] }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold leading-tight">
                          {theme.name}
                        </span>
                        <span className="text-[10px] text-on-surface-variant/80 truncate max-w-[150px]">
                          {theme.description}
                        </span>
                      </div>
                    </div>
                    {isActive && (
                      <span className="material-symbols-outlined text-[16px] text-primary shrink-0">
                        check
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-outline-variant/40 text-[10px] text-on-surface-variant text-center">
              Edit hex codes anytime in <span className="font-semibold text-primary">src/config/theme.config.ts</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
