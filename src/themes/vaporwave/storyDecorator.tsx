import type { Decorator } from "@storybook/react";

export const vaporwaveDecorator: Decorator = (Story) => (
  <div
    data-theme="vaporwave"
    style={{
      background: "#090014",
      color: "#e0d0ff",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Share Tech Mono', monospace",
    }}
  >
    <Story />
  </div>
);
