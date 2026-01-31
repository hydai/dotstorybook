import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Linear Modern/Components/Card",
  component: Card,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "gradient"],
    },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
      Card Title
    </h3>
    <p className="text-sm text-[var(--color-text-secondary)]">
      This is a card component with multiple variants. It supports glass
      morphism, gradient backgrounds, and hover interactions.
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", children: cardContent },
};

export const Glass: Story = {
  args: { variant: "glass", children: cardContent },
};

export const Gradient: Story = {
  args: { variant: "gradient", children: cardContent },
};

export const Hoverable: Story = {
  args: { variant: "default", hoverable: true, children: cardContent },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-4 max-w-md">
      <Card variant="default" hoverable>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Default Card
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Solid surface background with subtle border.
        </p>
      </Card>
      <Card variant="glass" hoverable>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Glass Card
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Frosted glass effect with backdrop blur.
        </p>
      </Card>
      <Card variant="gradient" hoverable>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Gradient Card
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Subtle gradient from surface-1 to surface-2.
        </p>
      </Card>
    </div>
  ),
};
