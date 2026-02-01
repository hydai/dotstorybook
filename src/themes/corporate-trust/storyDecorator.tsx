import type { Decorator } from "@storybook/react";

export const corporateTrustDecorator: Decorator = (Story) => (
  <div
    data-theme="corporate-trust"
    style={{
      background: "#F8FAFC",
      color: "#0F172A",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}
  >
    <Story />
  </div>
);
