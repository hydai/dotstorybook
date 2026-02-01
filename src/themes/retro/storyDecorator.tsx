import type { Decorator } from "@storybook/react";

export const retroDecorator: Decorator = (Story) => (
  <div
    data-theme="retro"
    style={{
      background: "#C0C0C0",
      color: "#000000",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Tahoma, 'MS Sans Serif', Verdana, sans-serif",
    }}
  >
    <Story />
  </div>
);
