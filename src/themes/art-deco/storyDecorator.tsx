import type { Decorator } from "@storybook/react";

export const artDecoDecorator: Decorator = (Story) => (
  <div
    data-theme="art-deco"
    style={{
      background: "#0A0A0A",
      color: "#F2F0E4",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Josefin Sans', 'Inter', sans-serif",
    }}
  >
    <Story />
  </div>
);
