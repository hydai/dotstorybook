import type { Decorator } from "@storybook/react";

export const botanicalDecorator: Decorator = (Story) => (
  <div
    data-theme="botanical"
    style={{
      background: "#F9F8F4",
      color: "#2D3A31",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Source Sans 3', 'Helvetica Neue', sans-serif",
    }}
  >
    <Story />
  </div>
);
