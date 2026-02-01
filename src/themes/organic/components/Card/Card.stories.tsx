import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/Card",
  component: Card,
  decorators: [organicDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "sand", "bordered"],
    },
    hoverable: { control: "boolean" },
    radiusPattern: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)] mb-2">
          Wild Meadow
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          A gentle collection of wildflowers, grown without intervention in
          the rolling hills.
        </p>
      </div>
    ),
  },
};

export const Sand: Story = {
  args: {
    variant: "sand",
    children: (
      <div>
        <h3 className="text-lg font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)] mb-2">
          Clay Pot Herbs
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Rosemary, thyme, and lavender cultivated in hand-thrown terra cotta.
        </p>
      </div>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: (
      <div>
        <h3 className="text-lg font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)] mb-2">
          Pressed Botanicals
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Dried specimens collected over many seasons, preserved between
          parchment pages.
        </p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold font-[var(--font-heading)] text-[var(--color-text-primary)] mb-2">
          Hover Me
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          This card lifts gently on hover with a moss-tinted shadow bloom.
        </p>
      </div>
    ),
  },
};

export const AsymmetricRadii: Story = {
  args: { children: "Radii" },
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      {([0, 1, 2, 3, 4, 5] as const).map((pattern) => (
        <Card key={pattern} radiusPattern={pattern} variant="bordered">
          <p className="text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-body)]">
            Pattern {pattern}
          </p>
        </Card>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <Card variant="default">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Default card with shadow
        </p>
      </Card>
      <Card variant="sand">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Sand card with warm background
        </p>
      </Card>
      <Card variant="bordered">
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Bordered card with timber edge
        </p>
      </Card>
      <Card variant="default" hoverable>
        <p className="text-sm text-[var(--color-text-primary)] font-[var(--font-body)]">
          Hoverable card — lift and bloom
        </p>
      </Card>
    </div>
  ),
};
