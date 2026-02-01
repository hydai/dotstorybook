import type { Meta, StoryObj } from "@storybook/react";
import { AmbientBackground } from "./AmbientBackground";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/AmbientBackground",
  component: AmbientBackground,
  decorators: [simpleDarkDecorator],
  parameters: { layout: "fullscreen" },
  argTypes: {
    grid: { control: "boolean" },
  },
} satisfies Meta<typeof AmbientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-[var(--font-heading)] tracking-tight text-[var(--color-text-primary)]">
            Ambient Background
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-md">
            Atmospheric background with floating amber orbs and noise texture.
          </p>
        </div>
      </div>
    ),
  },
};

export const WithGrid: Story = {
  args: {
    grid: true,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-[var(--font-heading)] tracking-tight text-[var(--color-text-primary)]">
            With Grid Overlay
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-md">
            Optional grid overlay adds subtle structure to the ambient
            background.
          </p>
        </div>
      </div>
    ),
  },
};
