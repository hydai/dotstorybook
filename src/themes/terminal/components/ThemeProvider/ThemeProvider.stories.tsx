import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Foundation/ThemeProvider",
  component: ThemeProvider,
  decorators: [terminalDecorator],
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
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] uppercase tracking-widest">
            TERMINAL THEME
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            ThemeProvider loads JetBrains Mono, sets data-theme=&quot;terminal&quot;, and
            applies the CRT aesthetic.
          </p>
          <div className="flex gap-2 justify-center">
            <div className="w-8 h-8 bg-[var(--color-success)]" />
            <div className="w-8 h-8 bg-[var(--color-warning)]" />
            <div className="w-8 h-8 bg-[var(--color-error)]" />
          </div>
        </div>
      </div>
    ),
  },
};
