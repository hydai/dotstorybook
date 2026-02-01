import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/Card",
  component: Card,
  decorators: [vaporwaveDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "terminal", "explorer"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "BROADCAST STATUS",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        All channels active. Signal clarity at 99.2% across the grid.
      </p>
    ),
    variant: "default",
  },
};

export const Terminal: Story = {
  args: {
    title: "vapor@paradise",
    children: (
      <div className="font-mono text-sm space-y-1">
        <p className="text-[var(--color-secondary)]">$ freq --scan-all</p>
        <p className="text-[var(--color-text-secondary)]">
          Active stations: 1,247
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Encrypted channels: 8
        </p>
        <p className="text-[var(--color-success)]">Status: BROADCASTING</p>
      </div>
    ),
    variant: "terminal",
  },
};

export const Explorer: Story = {
  args: {
    title: "MEDIA BROWSER",
    children: (
      <div className="font-mono text-sm space-y-1">
        <p className="text-[var(--color-text-secondary)]">
          sunset_drive.mp3 — 4:32
        </p>
        <p className="text-[var(--color-text-secondary)]">
          neon_palm.flac — 3:18
        </p>
        <p className="text-[var(--color-accent)]">
          midnight_cruise.wav — 5:01
        </p>
      </div>
    ),
    variant: "explorer",
  },
};

export const Hoverable: Story = {
  args: {
    title: "HOVER TARGET",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Hover to activate neon glow effect.
      </p>
    ),
    variant: "default",
    hoverable: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid gap-6 max-w-md">
      <Card variant="default" title="DEFAULT" hoverable>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Glass panel with dual neon borders and backdrop blur.
        </p>
      </Card>
      <Card variant="terminal" title="vapor@paradise">
        <p className="text-sm text-[var(--color-secondary)]">
          $ signal --status
        </p>
      </Card>
      <Card variant="explorer" title="MEDIA BROWSER">
        <p className="text-sm text-[var(--color-text-secondary)]">
          File explorer style with title bar and status bar.
        </p>
      </Card>
    </div>
  ),
};
