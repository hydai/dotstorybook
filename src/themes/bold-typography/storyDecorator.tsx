import type { Decorator } from "@storybook/react";

export const boldTypographyDecorator: Decorator = (Story) => (
  <div
    data-theme="bold-typography"
    style={{
      background: "#0A0A0A",
      color: "#FAFAFA",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter Tight', 'Inter', sans-serif",
    }}
  >
    <Story />
  </div>
);
