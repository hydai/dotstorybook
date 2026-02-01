import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";

const meta = {
  title: "Industrial/Components/ThemeProvider",
  component: ThemeProvider,
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8 space-y-4">
        <h1
          className="text-3xl font-bold uppercase tracking-[0.1em]"
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          Industrial Theme
        </h1>
        <p className="text-[var(--color-text-secondary)] font-[var(--font-mono)] text-sm uppercase tracking-wider">
          Neumorphic control interface with mechanical precision
        </p>
      </div>
    ),
  },
};
