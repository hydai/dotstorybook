import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { clayDecorator } from "../../storyDecorator";

const meta = {
  title: "Clay/Components/Card",
  component: Card,
  decorators: [clayDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "highlighted"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Weekly Stats",
    children: (
      <div>
        <p className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          1,284
        </p>
        <p className="text-sm text-[var(--color-success)] mt-1">
          +18.2% this week
        </p>
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    title: "Activity",
    children: (
      <div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          12 tasks completed today
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
          3 in progress
        </p>
      </div>
    ),
  },
};

export const Highlighted: Story = {
  args: {
    variant: "highlighted",
    title: "Pro Plan",
    children: (
      <div>
        <p className="text-4xl font-bold text-[var(--color-accent)] font-[var(--font-heading)]">
          $29<span className="text-base text-[var(--color-text-muted)]">/mo</span>
        </p>
        <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
          <li>Unlimited projects</li>
          <li>Priority support</li>
          <li>Advanced analytics</li>
        </ul>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    title: "Hover Me",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        This card floats upward with an enhanced clay shadow on hover.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-6 flex-wrap">
      <Card title="Default" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Standard clay card
        </p>
      </Card>
      <Card variant="glass" title="Glass" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Frosted glass clay
        </p>
      </Card>
      <Card variant="highlighted" title="Highlighted" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Accent-bordered clay
        </p>
      </Card>
    </div>
  ),
};
