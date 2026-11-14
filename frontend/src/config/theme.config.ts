/**
 * Servixo Theme Configuration
 * 
 * You can easily customize the color palette of the application here.
 * - Change `activeThemeKey` to switch between built-in palettes (e.g. 'warmGold', 'emerald', 'oceanBlue', 'terracotta').
 * - Or edit the hex color values directly in any palette below.
 * - Or add your own custom palette to `themePalettes`.
 */

export interface ThemeColors {
  primary: string;
  "on-primary": string;
  "primary-container": string;
  "on-primary-container": string;
  "primary-fixed": string;
  "primary-fixed-dim": string;
  "on-primary-fixed": string;
  "on-primary-fixed-variant": string;
  secondary: string;
  "on-secondary": string;
  "secondary-container": string;
  "on-secondary-container": string;
  "secondary-fixed": string;
  "secondary-fixed-dim": string;
  "on-secondary-fixed": string;
  "on-secondary-fixed-variant": string;
  tertiary: string;
  "on-tertiary": string;
  "tertiary-container": string;
  "on-tertiary-container": string;
  "tertiary-fixed": string;
  "tertiary-fixed-dim": string;
  "on-tertiary-fixed": string;
  "on-tertiary-fixed-variant": string;
  error: string;
  "on-error": string;
  "error-container": string;
  "on-error-container": string;
  surface: string;
  "on-surface": string;
  "surface-variant": string;
  "on-surface-variant": string;
  "surface-dim": string;
  "surface-bright": string;
  "surface-container-lowest": string;
  "surface-container-low": string;
  "surface-container": string;
  "surface-container-high": string;
  "surface-container-highest": string;
  "inverse-surface": string;
  "inverse-on-surface": string;
  "inverse-primary": string;
  outline: string;
  "outline-variant": string;
  background: string;
  "on-background": string;
  "surface-tint": string;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
}

export const themePalettes: Record<string, ThemePreset> = {
  // 1. DEFAULT PALETTE: Warm Gold / Honey Amber (Exact colors from your design)
  warmGold: {
    id: "warmGold",
    name: "Warm Gold & Amber",
    description: "Servixo signature warm honey gold and organic earthy tones",
    colors: {
      primary: "#715911",
      "on-primary": "#ffffff",
      "primary-container": "#8c7129",
      "on-primary-container": "#fffbff",
      "primary-fixed": "#ffdf94",
      "primary-fixed-dim": "#e4c372",
      "on-primary-fixed": "#251a00",
      "on-primary-fixed-variant": "#594400",
      secondary: "#50652a",
      "on-secondary": "#ffffff",
      "secondary-container": "#d2eca2",
      "on-secondary-container": "#566b30",
      "secondary-fixed": "#d2eca2",
      "secondary-fixed-dim": "#b7cf89",
      "on-secondary-fixed": "#131f00",
      "on-secondary-fixed-variant": "#394d15",
      tertiary: "#4c5c8f",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#6475a9",
      "on-tertiary-container": "#000417",
      "tertiary-fixed": "#dbe1ff",
      "tertiary-fixed-dim": "#b4c5fe",
      "on-tertiary-fixed": "#021848",
      "on-tertiary-fixed-variant": "#344575",
      error: "#ba1a1a",
      "on-error": "#ffffff",
      "error-container": "#ffdad6",
      "on-error-container": "#93000a",
      surface: "#fff8f2",
      "on-surface": "#1f1b15",
      "surface-variant": "#eae1d7",
      "on-surface-variant": "#4d4638",
      "surface-dim": "#e1d9cf",
      "surface-bright": "#fff8f2",
      "surface-container-lowest": "#ffffff",
      "surface-container-low": "#fbf2e8",
      "surface-container": "#f5ede3",
      "surface-container-high": "#efe7dd",
      "surface-container-highest": "#eae1d7",
      "inverse-surface": "#343029",
      "inverse-on-surface": "#f8efe5",
      "inverse-primary": "#e4c372",
      outline: "#7f7666",
      "outline-variant": "#d0c5b3",
      background: "#fff8f2",
      "on-background": "#1f1b15",
      "surface-tint": "#745b13",
    },
  },

  // 2. PALETTE: Emerald / Fresh Botanical Green
  emerald: {
    id: "emerald",
    name: "Emerald & Mint",
    description: "Crisp botanical green evoking cleanliness, fresh care and renewal",
    colors: {
      primary: "#1b6d41",
      "on-primary": "#ffffff",
      "primary-container": "#248a54",
      "on-primary-container": "#ffffff",
      "primary-fixed": "#a6f2be",
      "primary-fixed-dim": "#8ad5a3",
      "on-primary-fixed": "#00210f",
      "on-primary-fixed-variant": "#00522c",
      secondary: "#4d6452",
      "on-secondary": "#ffffff",
      "secondary-container": "#cfebd4",
      "on-secondary-container": "#38503e",
      "secondary-fixed": "#cfe9d3",
      "secondary-fixed-dim": "#b3cdb8",
      "on-secondary-fixed": "#0a1f12",
      "on-secondary-fixed-variant": "#364d3b",
      tertiary: "#3d6473",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#557d8e",
      "on-tertiary-container": "#ffffff",
      "tertiary-fixed": "#c1e9fb",
      "tertiary-fixed-dim": "#a5cddf",
      "on-tertiary-fixed": "#001f29",
      "on-tertiary-fixed-variant": "#234c5b",
      error: "#ba1a1a",
      "on-error": "#ffffff",
      "error-container": "#ffdad6",
      "on-error-container": "#93000a",
      surface: "#f6fbf5",
      "on-surface": "#181d19",
      "surface-variant": "#dbe5dc",
      "on-surface-variant": "#404942",
      "surface-dim": "#d6ded6",
      "surface-bright": "#f6fbf5",
      "surface-container-lowest": "#ffffff",
      "surface-container-low": "#f0f5ef",
      "surface-container": "#eaefe9",
      "surface-container-high": "#e4eae3",
      "surface-container-highest": "#dee4de",
      "inverse-surface": "#2c322d",
      "inverse-on-surface": "#edf2ec",
      "inverse-primary": "#8ad5a3",
      outline: "#707972",
      "outline-variant": "#bfc9c1",
      background: "#f6fbf5",
      "on-background": "#181d19",
      "surface-tint": "#1b6d41",
    },
  },

  // 3. PALETTE: Modern Ocean & Cobalt Blue
  oceanBlue: {
    id: "oceanBlue",
    name: "Ocean & Cobalt",
    description: "Modern professional blue emphasizing technology, reliability and precision",
    colors: {
      primary: "#1d5db0",
      "on-primary": "#ffffff",
      "primary-container": "#256fd1",
      "on-primary-container": "#ffffff",
      "primary-fixed": "#d6e3ff",
      "primary-fixed-dim": "#a8c7ff",
      "on-primary-fixed": "#001b3e",
      "on-primary-fixed-variant": "#00438a",
      secondary: "#535f70",
      "on-secondary": "#ffffff",
      "secondary-container": "#d7e3f8",
      "on-secondary-container": "#3b4857",
      "secondary-fixed": "#d7e3f8",
      "secondary-fixed-dim": "#bcc7db",
      "on-secondary-fixed": "#101c2b",
      "on-secondary-fixed-variant": "#3b4857",
      tertiary: "#6b5778",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#856f93",
      "on-tertiary-container": "#ffffff",
      "tertiary-fixed": "#f3daff",
      "tertiary-fixed-dim": "#d7bee5",
      "on-tertiary-fixed": "#251432",
      "on-tertiary-fixed-variant": "#523f5f",
      error: "#ba1a1a",
      "on-error": "#ffffff",
      "error-container": "#ffdad6",
      "on-error-container": "#93000a",
      surface: "#f8f9ff",
      "on-surface": "#181c20",
      "surface-variant": "#dfe2eb",
      "on-surface-variant": "#43474e",
      "surface-dim": "#d8dae2",
      "surface-bright": "#f8f9ff",
      "surface-container-lowest": "#ffffff",
      "surface-container-low": "#f2f3fb",
      "surface-container": "#ecedf5",
      "surface-container-high": "#e6e8ef",
      "surface-container-highest": "#e1e2ea",
      "inverse-surface": "#2d3135",
      "inverse-on-surface": "#eff0f7",
      "inverse-primary": "#a8c7ff",
      outline: "#73777f",
      "outline-variant": "#c3c7cf",
      background: "#f8f9ff",
      "on-background": "#181c20",
      "surface-tint": "#1d5db0",
    },
  },

  // 4. PALETTE: Terracotta & Warm Earth
  terracotta: {
    id: "terracotta",
    name: "Terracotta & Clay",
    description: "Earthy terracotta, warm clay and sun-baked artisanal warmth",
    colors: {
      primary: "#944719",
      "on-primary": "#ffffff",
      "primary-container": "#b05723",
      "on-primary-container": "#ffffff",
      "primary-fixed": "#ffdbcb",
      "primary-fixed-dim": "#ffb68f",
      "on-primary-fixed": "#351000",
      "on-primary-fixed-variant": "#743105",
      secondary: "#775749",
      "on-secondary": "#ffffff",
      "secondary-container": "#ffdbcb",
      "on-secondary-container": "#5d3f33",
      "secondary-fixed": "#ffdbcb",
      "secondary-fixed-dim": "#e7bdad",
      "on-secondary-fixed": "#2c150b",
      "on-secondary-fixed-variant": "#5d3f33",
      tertiary: "#665f31",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#807746",
      "on-tertiary-container": "#ffffff",
      "tertiary-fixed": "#eee4a8",
      "tertiary-fixed-dim": "#d1c88e",
      "on-tertiary-fixed": "#201c00",
      "on-tertiary-fixed-variant": "#4d471b",
      error: "#ba1a1a",
      "on-error": "#ffffff",
      "error-container": "#ffdad6",
      "on-error-container": "#93000a",
      surface: "#fff8f5",
      "on-surface": "#221a16",
      "surface-variant": "#f4ded4",
      "on-surface-variant": "#53433c",
      "surface-dim": "#e8d7d0",
      "surface-bright": "#fff8f5",
      "surface-container-lowest": "#ffffff",
      "surface-container-low": "#fdf1ec",
      "surface-container": "#f7ebe5",
      "surface-container-high": "#f1e5df",
      "surface-container-highest": "#ebdfda",
      "inverse-surface": "#382e2a",
      "inverse-on-surface": "#fceee8",
      "inverse-primary": "#ffb68f",
      outline: "#85736b",
      "outline-variant": "#d8c2ba",
      background: "#fff8f5",
      "on-background": "#221a16",
      "surface-tint": "#944719",
    },
  },
};

/**
 * DEFAULT ACTIVE THEME SETTING
 * Change this value to switch the active palette globally!
 * Options: 'warmGold' | 'emerald' | 'oceanBlue' | 'terracotta'
 */
export const activeThemeKey: keyof typeof themePalettes = "warmGold";

/**
 * Helper to get the currently selected palette
 */
export function getActiveTheme(key: string = activeThemeKey): ThemePreset {
  return themePalettes[key] || themePalettes.warmGold;
}

/**
 * Converts a ThemeColors object into CSS custom properties
 */
export function generateCssVariables(colors: ThemeColors): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [key, value] of Object.entries(colors)) {
    vars[`--color-${key}`] = value;
  }
  return vars;
}
