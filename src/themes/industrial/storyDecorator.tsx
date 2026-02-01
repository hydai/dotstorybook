import type { Decorator } from "@storybook/react";

export const industrialDecorator: Decorator = (Story) => (
  <div
    data-theme="industrial"
    style={{
      background: "#e0e5ec",
      color: "#2d3436",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}
  >
    <Story />
  </div>
);
