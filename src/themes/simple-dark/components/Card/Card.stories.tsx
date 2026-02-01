import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/Card",
  component: Card,
  decorators: [simpleDarkDecorator],
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
    title: "Analytics",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Track your performance metrics and get insights into user behavior
        across all platforms.
      </p>
    ),
    variant: "default",
  },
};

export const Glass: Story = {
  args: {
    title: "Dashboard",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        A glass-effect card with subtle backdrop blur for layered UI
        compositions.
      </p>
    ),
    variant: "glass",
  },
};

export const Highlighted: Story = {
  args: {
    title: "Featured",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Highlighted card with amber border glow to draw attention to key
        content.
      </p>
    ),
    variant: "highlighted",
  },
};

export const Hoverable: Story = {
  args: {
    title: "Interactive",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        Hover to see the scale and glow effect.
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
      <Card variant="default" title="Default" hoverable>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Standard card with solid background and subtle border.
        </p>
      </Card>
      <Card variant="glass" title="Glass">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Glass-effect card with backdrop blur.
        </p>
      </Card>
      <Card variant="highlighted" title="Highlighted" hoverable>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Amber glow border for featured content.
        </p>
      </Card>
    </div>
  ),
};
