import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { botanicalDecorator } from "../../storyDecorator";

const meta = {
  title: "Botanical/Components/Card",
  component: Card,
  decorators: [botanicalDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "clay", "bordered"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-2">
    <h3
      className="text-lg font-semibold text-[var(--color-text-primary)]"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      Morning Bloom
    </h3>
    <p className="text-sm text-[var(--color-text-secondary)]">
      A gentle exploration of native wildflowers and their seasonal cycles
      through the rolling meadows of the countryside.
    </p>
    <p className="text-xs text-[var(--color-text-muted)]">
      Spring Collection &middot; 2024
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", children: cardContent },
};

export const Clay: Story = {
  args: { variant: "clay", children: cardContent },
};

export const Bordered: Story = {
  args: { variant: "bordered", children: cardContent },
};

export const Hoverable: Story = {
  args: {
    variant: "default",
    hoverable: true,
    children: cardContent,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-4 max-w-md">
      <Card variant="default" hoverable>
        <h3
          className="text-lg font-semibold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Default Card
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          White background with a soft diffused shadow.
        </p>
      </Card>
      <Card variant="clay" hoverable>
        <h3
          className="text-lg font-semibold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Clay Card
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Warm clay background, earthy and grounded.
        </p>
      </Card>
      <Card variant="bordered" hoverable>
        <h3
          className="text-lg font-semibold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Bordered Card
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Clean white with a subtle stone border.
        </p>
      </Card>
    </div>
  ),
};
