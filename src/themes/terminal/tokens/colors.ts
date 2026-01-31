export const colors = {
  surface: {
    0: "#0a0a0a",
    1: "#0d0d0d",
    2: "#141414",
    3: "#1a1a1a",
  },
  text: {
    primary: "#33ff00",
    secondary: "#29cc00",
    muted: "#1f521f",
    inverse: "#0a0a0a",
  },
  accent: {
    DEFAULT: "#33ff00",
    hover: "#66ff33",
    muted: "rgba(51, 255, 0, 0.15)",
  },
  semantic: {
    success: "#33ff00",
    warning: "#ffb000",
    error: "#ff3333",
  },
  border: {
    DEFAULT: "rgba(51, 255, 0, 0.2)",
    hover: "rgba(51, 255, 0, 0.4)",
    accent: "rgba(51, 255, 0, 0.6)",
  },
} as const;
