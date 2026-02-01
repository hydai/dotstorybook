import type { Decorator } from "@storybook/react";

export const academiaDecorator: Decorator = (Story) => (
  <div
    data-theme="academia"
    style={{
      background: "#1C1714",
      color: "#E8DFD4",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Crimson Pro', Georgia, serif",
    }}
  >
    <Story />
  </div>
);
