export const colors = {
  surface: {
    0: "#0D0D1A",
    1: "#1A1030",
    2: "#2D1B4E",
    3: "#3D2866",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#C8B8E8",
    muted: "#7B6A9E",
    inverse: "#0D0D1A",
  },
  magenta: {
    DEFAULT: "#FF3AF2",
    hover: "#FF6BF5",
    muted: "rgba(255, 58, 242, 0.15)",
  },
  cyan: {
    DEFAULT: "#00F5D4",
    hover: "#33F7DE",
    muted: "rgba(0, 245, 212, 0.15)",
  },
  yellow: {
    DEFAULT: "#FFE600",
    hover: "#FFEB33",
    muted: "rgba(255, 230, 0, 0.15)",
  },
  orange: {
    DEFAULT: "#FF6B35",
    hover: "#FF8A5C",
    muted: "rgba(255, 107, 53, 0.15)",
  },
  purple: {
    DEFAULT: "#7B2FFF",
    hover: "#9B5FFF",
    muted: "rgba(123, 47, 255, 0.15)",
  },
  rotation: ["#FF3AF2", "#00F5D4", "#FFE600", "#FF6B35", "#7B2FFF"],
  semantic: {
    success: "#00F5D4",
    warning: "#FFE600",
    error: "#FF3AF2",
  },
  border: {
    DEFAULT: "rgba(255, 255, 255, 0.12)",
    hover: "rgba(255, 58, 242, 0.4)",
    accent: "rgba(255, 58, 242, 0.7)",
  },
  gradient: {
    start: "#FF3AF2",
    mid: "#7B2FFF",
    end: "#00F5D4",
  },
} as const;
