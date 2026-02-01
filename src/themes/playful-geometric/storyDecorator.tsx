import type { Decorator } from "@storybook/react";

export const playfulGeometricDecorator: Decorator = (Story) => (
  <div
    data-theme="playful-geometric"
    style={{
      background: "#FFFDF5",
      color: "#1E293B",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}
  >
    <Story />
  </div>
);
