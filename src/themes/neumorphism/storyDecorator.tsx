import type { Decorator } from "@storybook/react";

export const neumorphismDecorator: Decorator = (Story) => (
  <div
    data-theme="neumorphism"
    style={{
      background: "#E0E5EC",
      color: "#3D4852",
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
