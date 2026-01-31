import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { boldTypographyDecorator } from "../../storyDecorator";

const meta = {
  title: "Bold Typography/Components/Card",
  component: Card,
  decorators: [boldTypographyDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "featured"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-3">
    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
      EDITORIAL LAYOUT
    </h3>
    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
      Typography is the entire visual structure. Text becomes image, headline
      becomes hero.
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", children: cardContent },
};

export const Bordered: Story = {
  args: { variant: "bordered", children: cardContent },
};

export const Featured: Story = {
  args: { variant: "featured", children: cardContent },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-8 max-w-2xl">
      <Card variant="default">
        <h3 className="text-2xl font-bold uppercase tracking-tight">
          DEFAULT CARD
        </h3>
        <p className="text-base text-[var(--color-text-secondary)] mt-2 leading-relaxed">
          Transparent background, no border. Content speaks for itself.
        </p>
      </Card>
      <Card variant="bordered">
        <h3 className="text-2xl font-bold uppercase tracking-tight">
          BORDERED CARD
        </h3>
        <p className="text-base text-[var(--color-text-secondary)] mt-2 leading-relaxed">
          Subtle border with hover transition. Sharp corners, flat design.
        </p>
      </Card>
      <Card variant="featured">
        <h3 className="text-2xl font-bold uppercase tracking-tight">
          FEATURED CARD
        </h3>
        <p className="text-base text-[var(--color-text-secondary)] mt-2 leading-relaxed">
          Vermillion accent border with featured badge.
        </p>
      </Card>
    </div>
  ),
};
