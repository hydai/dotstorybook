import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";

const meta = {
  title: "Linear Modern/Foundation/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
            Linear Modern Theme
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            ThemeProvider wraps content with dark canvas, font loading, and
            data-theme attribute.
          </p>
          <div className="flex gap-2 justify-center">
            <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-accent)]" />
            <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-gradient-mid)]" />
            <div className="w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-gradient-end)]" />
          </div>
        </div>
      </div>
    ),
  },
};
