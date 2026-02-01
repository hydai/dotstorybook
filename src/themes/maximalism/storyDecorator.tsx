import type { Decorator } from "@storybook/react";

export const maximalismDecorator: Decorator = (Story) => (
  <div
    data-theme="maximalism"
    style={{
      background: "#0D0D1A",
      color: "#FFFFFF",
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
