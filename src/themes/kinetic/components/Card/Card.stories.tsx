import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { kineticDecorator } from "../../storyDecorator";

const meta = {
  title: "Kinetic/Components/Card",
  component: Card,
  decorators: [kineticDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "invert"],
    },
    hoverable: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent = (
  <div className="space-y-3">
    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[var(--color-text-primary)]">
      FEATURE TITLE
    </h3>
    <p className="text-lg text-[var(--color-text-secondary)]">
      Typography is the entire visual structure. Text becomes image, headline
      becomes hero.
    </p>
  </div>
);

export const Default: Story = {
  args: { variant: "default", title: "01", children: cardContent },
};

export const Bordered: Story = {
  args: { variant: "bordered", title: "02", children: cardContent },
};

export const Invert: Story = {
  args: {
    variant: "invert",
    title: "03",
    hoverable: true,
    children: cardContent,
  },
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
    <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] max-w-2xl">
      <Card variant="default" title="01">
        <h3 className="text-2xl font-bold uppercase tracking-tighter">
          DEFAULT CARD
        </h3>
        <p className="text-base text-[var(--color-text-secondary)] mt-2">
          Sharp borders, flat design, no shadows.
        </p>
      </Card>
      <Card variant="bordered" title="02">
        <h3 className="text-2xl font-bold uppercase tracking-tighter">
          BORDERED CARD
        </h3>
        <p className="text-base text-[var(--color-text-secondary)] mt-2">
          White border emphasis for highlighted content.
        </p>
      </Card>
      <Card variant="invert" title="03" hoverable>
        <h3 className="text-2xl font-bold uppercase tracking-tighter">
          INVERT CARD
        </h3>
        <p className="text-base text-[var(--color-text-secondary)] mt-2">
          Hover to see the hard color inversion effect.
        </p>
      </Card>
    </div>
  ),
};
