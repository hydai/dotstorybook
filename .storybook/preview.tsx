import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        data-theme="linear-modern"
        style={{
          background: "#0a0a0b",
          color: "#e4e4e7",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
