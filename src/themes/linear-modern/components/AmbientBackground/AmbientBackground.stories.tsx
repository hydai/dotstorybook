import type { Meta, StoryObj } from "@storybook/react";
import { AmbientBackground } from "./AmbientBackground";

const meta = {
  title: "Linear Modern/Components/AmbientBackground",
  component: AmbientBackground,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    showNoise: { control: "boolean" },
    showGrid: { control: "boolean" },
  },
} satisfies Meta<typeof AmbientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showNoise: true,
    showGrid: true,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
          Ambient Background
        </p>
      </div>
    ),
  },
};

export const NoOverlays: Story = {
  args: {
    showNoise: false,
    showGrid: false,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
          Gradient Blobs Only
        </p>
      </div>
    ),
  },
};
