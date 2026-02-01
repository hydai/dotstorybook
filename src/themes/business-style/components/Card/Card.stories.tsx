import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/Card",
  component: Card,
  decorators: [businessStyleDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "editorial"],
    },
    goldAccent: { control: "boolean" },
    hoverable: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Market Analysis",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[var(--font-body)]">
        Quarterly earnings exceeded expectations, driven by strong performance
        in the technology sector. Analysts remain cautiously optimistic about
        continued growth.
      </p>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    title: "Featured Report",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[var(--font-body)]">
        An in-depth analysis of emerging markets and their impact on global
        portfolio strategies for the coming fiscal year.
      </p>
    ),
  },
};

export const Editorial: Story = {
  args: {
    variant: "editorial",
    title: "Editor's Note",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[var(--font-body)]">
        The landscape of modern finance continues to evolve, presenting both
        challenges and unprecedented opportunities for discerning investors.
      </p>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    title: "Interactive Card",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[var(--font-body)]">
        Hover over this card to see the subtle lift and shadow enhancement.
      </p>
    ),
  },
};

export const GoldAccent: Story = {
  args: {
    goldAccent: true,
    title: "Premium Content",
    children: (
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[var(--font-body)]">
        Exclusive analysis reserved for premium subscribers with a gold accent
        border.
      </p>
    ),
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      <Card variant="default" title="Default">
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Standard card with thin border
        </p>
      </Card>
      <Card variant="bordered" title="Bordered">
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Card with gold top accent border
        </p>
      </Card>
      <Card variant="editorial" title="Editorial">
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Top and bottom rules only, transparent background
        </p>
      </Card>
      <Card goldAccent title="Gold Accent">
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Default card with gold accent class
        </p>
      </Card>
    </div>
  ),
};
