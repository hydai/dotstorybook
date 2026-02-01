import type { Decorator } from "@storybook/react";

export const cyberpunkDecorator: Decorator = (Story) => (
  <div
    data-theme="cyberpunk"
    style={{
      background: "#0a0a0f",
      color: "#e0e0e0",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'JetBrains Mono', monospace",
    }}
  >
    <Story />
  </div>
);
