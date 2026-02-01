import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/Card",
  component: Card,
  decorators: [cyberpunkDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "terminal", "holographic"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "SYSTEM STATUS",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        All subsystems operational. Neural link stable at 99.7% efficiency.
      </p>
    ),
    variant: "default",
  },
};

export const Terminal: Story = {
  args: {
    title: "root@neo-tokyo",
    children: (
      <div className="font-mono text-sm space-y-1">
        <p className="text-[var(--color-accent)]">
          $ netstat --scan-all
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Active connections: 2,847
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Encrypted tunnels: 12
        </p>
        <p className="text-[var(--color-success)]">
          Status: SECURE
        </p>
      </div>
    ),
    variant: "terminal",
  },
};

export const Holographic: Story = {
  args: {
    title: "IDENTITY MATRIX",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Biometric scan complete. Clearance level: OMEGA.
      </p>
    ),
    variant: "holographic",
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
          Standard chamfered card with neon glow on hover.
        </p>
      </Card>
      <Card variant="terminal" title="root@neo-tokyo">
        <p className="text-sm text-[var(--color-accent)]">
          $ system --status
        </p>
      </Card>
      <Card variant="holographic" title="HOLOGRAPHIC">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Semi-transparent with corner accent markers.
        </p>
      </Card>
    </div>
  ),
};
