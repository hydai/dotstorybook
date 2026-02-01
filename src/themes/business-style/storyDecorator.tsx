import type { Decorator } from "@storybook/react";

export const businessStyleDecorator: Decorator = (Story) => (
  <div
    data-theme="business-style"
    style={{
      background: "#FAFAF8",
      color: "#1A1A1A",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Source Sans 3', 'Helvetica Neue', sans-serif",
    }}
  >
    <Story />
  </div>
);
