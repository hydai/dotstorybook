import type { Decorator } from "@storybook/react";

export const kineticDecorator: Decorator = (Story) => (
  <div
    data-theme="kinetic"
    style={{
      background: "#09090B",
      color: "#FAFAFA",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    }}
  >
    <Story />
  </div>
);
