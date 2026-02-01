import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { playfulGeometricDecorator } from "../../storyDecorator";

const meta = {
  title: "Playful Geometric/Components/Card",
  component: Card,
  decorators: [playfulGeometricDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "featured"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sticker Card",
    children: (
      <p className="text-[var(--color-text-secondary)]">
        A chunky card with hard shadows and playful borders. Hover to see the wiggle!
      </p>
    ),
  },
};

export const Featured: Story = {
  args: {
    variant: "featured",
    title: "Featured Card",
    children: (
      <p className="text-[var(--color-text-secondary)]">
        This card has a pink hard shadow for extra pop.
      </p>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    title: "Hover Me!",
    children: (
      <p className="text-[var(--color-text-secondary)]">
        Hover over this card to see the bouncy rotate + scale animation.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl">
      <Card title="Default" hoverable>
        <p className="text-[var(--color-text-secondary)] text-sm">Dark hard shadow</p>
      </Card>
      <Card variant="featured" title="Featured" hoverable>
        <p className="text-[var(--color-text-secondary)] text-sm">Pink hard shadow</p>
      </Card>
      <Card title="Static Card">
        <p className="text-[var(--color-text-secondary)] text-sm">No hover animation</p>
      </Card>
      <Card variant="featured" title="Static Featured">
        <p className="text-[var(--color-text-secondary)] text-sm">No hover animation</p>
      </Card>
    </div>
  ),
};
