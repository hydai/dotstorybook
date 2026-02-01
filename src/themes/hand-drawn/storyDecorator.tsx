import type { Decorator } from "@storybook/react";

export const handDrawnDecorator: Decorator = (Story) => (
  <div
    data-theme="hand-drawn"
    style={{
      background: "#fdfbf7",
      color: "#2d2d2d",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive",
    }}
  >
    <Story />
  </div>
);
