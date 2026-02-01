import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";

const meta = {
  title: "Cyberpunk/Components/ThemeProvider",
  component: ThemeProvider,
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8 space-y-4">
        <h1
          className="text-3xl font-bold uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-heading)",
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          CYBERPUNK THEME
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Neon-lit interface with chamfered corners and glitch effects.
        </p>
      </div>
    ),
  },
};
