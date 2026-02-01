import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { maximalismDecorator } from "../../storyDecorator";

const meta = {
  title: "Maximalism/Components/Card",
  component: Card,
  decorators: [maximalismDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "featured", "wild"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Dopamine Rush",
    children: (
      <div>
        <p className="text-2xl font-bold text-[#FF3AF2] font-[var(--font-heading)]">
          100% Vibes
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
          More is more and that's the point
        </p>
      </div>
    ),
  },
};

export const Featured: Story = {
  args: {
    variant: "featured",
    title: "Featured Drop",
    children: (
      <div>
        <p className="text-2xl font-bold text-[#FFE600] font-[var(--font-heading)]">
          Limited Edition
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
          Grab it before it's gone
        </p>
      </div>
    ),
  },
};

export const Wild: Story = {
  args: {
    variant: "wild",
    title: "Wild Card",
    children: (
      <div>
        <p className="text-2xl font-bold text-[#00F5D4] font-[var(--font-heading)]">
          Chaos Mode
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">
          Rules? What rules?
        </p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    title: "Hover Me!",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        This card bounces and grows on hover with multi-layer shadows.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-8 flex-wrap p-8">
      <Card title="Default" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Standard maximalist card
        </p>
      </Card>
      <Card variant="featured" title="Featured" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Tilted with yellow border
        </p>
      </Card>
      <Card variant="wild" title="Wild" className="w-64">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Dotted border chaos
        </p>
      </Card>
    </div>
  ),
};
