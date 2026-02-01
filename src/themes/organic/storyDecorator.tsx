import type { Decorator } from "@storybook/react";

export const organicDecorator: Decorator = (Story) => (
  <div
    data-theme="organic"
    style={{
      background: "#FDFCF8",
      color: "#2C2C24",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Nunito', 'Helvetica Neue', sans-serif",
    }}
  >
    <Story />
  </div>
);
