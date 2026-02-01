import type { Decorator } from "@storybook/react";

export const simpleDarkDecorator: Decorator = (Story) => (
  <div
    data-theme="simple-dark"
    style={{
      background: "#0A0A0F",
      color: "#FAFAFA",
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
