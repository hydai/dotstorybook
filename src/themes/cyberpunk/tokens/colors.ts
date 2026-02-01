export const colors = {
  surface: {
    0: "#0a0a0f",
    1: "#12121f",
    2: "#1a1a2e",
    3: "#252540",
  },
  text: {
    primary: "#e0e0e0",
    secondary: "#a0a0b0",
    muted: "#6b7280",
    inverse: "#0a0a0f",
  },
  accent: {
    DEFAULT: "#00ff88",
    hover: "#33ffaa",
    muted: "rgba(0, 255, 136, 0.15)",
  },
  secondary: {
    DEFAULT: "#ff00ff",
    hover: "#ff55ff",
    muted: "rgba(255, 0, 255, 0.15)",
  },
  tertiary: {
    DEFAULT: "#00d4ff",
    hover: "#55e0ff",
    muted: "rgba(0, 212, 255, 0.15)",
  },
  semantic: {
    success: "#00ff88",
    warning: "#ffb000",
    error: "#ff3366",
  },
  border: {
    DEFAULT: "#2a2a3a",
    hover: "rgba(0, 255, 136, 0.3)",
    accent: "rgba(0, 255, 136, 0.6)",
  },
} as const;
