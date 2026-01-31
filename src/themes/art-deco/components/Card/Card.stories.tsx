import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/Card",
  component: Card,
  decorators: [artDecoDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "decorative"],
    },
    hoverable: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-2">
    <p className="text-sm text-[var(--color-text-primary)]">
      An evening of unparalleled elegance awaits.
    </p>
    <p className="text-xs text-[var(--color-text-muted)]">
      Grand Ballroom &middot; December 31, 1925
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", title: "THE GALA", children: cardContent },
};

export const Bordered: Story = {
  args: { variant: "bordered", title: "VIP ACCESS", children: cardContent },
};

export const Decorative: Story = {
  args: { variant: "decorative", title: "INVITATION", children: cardContent },
};

export const Hoverable: Story = {
  args: {
    variant: "default",
    hoverable: true,
    title: "HOVER ME",
    children: cardContent,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="grid grid-cols-1 gap-4 max-w-md">
      <Card variant="default" title="DEFAULT" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Standard card with subtle gold border.
        </p>
      </Card>
      <Card variant="bordered" title="BORDERED" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Highlighted card with bold accent border.
        </p>
      </Card>
      <Card variant="decorative" title="DECORATIVE" hoverable>
        <p className="text-sm text-[var(--color-text-primary)]">
          Ornamental card with corner brackets.
        </p>
      </Card>
    </div>
  ),
};
