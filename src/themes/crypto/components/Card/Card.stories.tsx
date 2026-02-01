import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/Card",
  component: Card,
  decorators: [cryptoDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "pricing"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Portfolio Value",
    children: (
      <div>
        <p className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          $24,891.42
        </p>
        <p className="text-sm text-[var(--color-success)] mt-1">
          +12.4% (24h)
        </p>
      </div>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    title: "Network Status",
    children: (
      <div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Block Height: 824,561
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
          Gas: 12 Gwei
        </p>
      </div>
    ),
  },
};

export const Pricing: Story = {
  args: {
    variant: "pricing",
    title: "Pro Plan",
    children: (
      <div>
        <p className="text-4xl font-bold text-[var(--color-accent)] font-[var(--font-heading)]">
          $49<span className="text-base text-[var(--color-text-muted)]">/mo</span>
        </p>
        <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
          <li>Unlimited transactions</li>
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
        This card lifts with an orange glow on hover.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-4">
      <Card title="Default" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Standard surface card
        </p>
      </Card>
      <Card variant="glass" title="Glass" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Frosted glass effect
        </p>
      </Card>
      <Card variant="pricing" title="Pricing" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Highlighted tier card
        </p>
      </Card>
    </div>
  ),
};
