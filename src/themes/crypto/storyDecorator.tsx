import type { Decorator } from "@storybook/react";

export const cryptoDecorator: Decorator = (Story) => (
  <div
    data-theme="crypto"
    style={{
      background: "#030304",
      color: "#E8E8ED",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', sans-serif",
    }}
  >
    <Story />
  </div>
);
