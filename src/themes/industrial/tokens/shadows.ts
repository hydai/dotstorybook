export const shadows = {
  card: "8px 8px 16px #babecc, -8px -8px 16px #ffffff",
  floating:
    "12px 12px 24px #babecc, -12px -12px 24px #ffffff, inset 1px 1px 0 rgba(255, 255, 255, 0.5)",
  pressed:
    "inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff",
  recessed:
    "inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff",
  button:
    "6px 6px 12px #babecc, -6px -6px 12px #ffffff",
  hoverCard:
    "12px 12px 24px #babecc, -12px -12px 24px #ffffff",
  hoverButton:
    "8px 8px 16px #babecc, -8px -8px 16px #ffffff",
  ledGlow: {
    red: "0 0 10px 2px rgba(255, 71, 87, 0.6)",
    green: "0 0 10px 2px rgba(46, 213, 115, 0.6)",
    amber: "0 0 10px 2px rgba(255, 165, 2, 0.6)",
    blue: "0 0 10px 2px rgba(112, 161, 255, 0.6)",
  },
} as const;
