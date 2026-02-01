import type { Decorator } from "@storybook/react";

export const clayDecorator: Decorator = (Story) => (
  <div
    data-theme="clay"
    style={{
      background: "#F4F1FA",
      color: "#332F3A",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}
  >
    <Story />
  </div>
);
