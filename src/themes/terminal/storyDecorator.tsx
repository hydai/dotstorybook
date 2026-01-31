import React from "react";
import type { Decorator } from "@storybook/react";

export const terminalDecorator: Decorator = (Story) => (
  <div
    data-theme="terminal"
    style={{
      background: "#0a0a0a",
      color: "#33ff00",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'JetBrains Mono', monospace",
    }}
  >
    <Story />
  </div>
);
