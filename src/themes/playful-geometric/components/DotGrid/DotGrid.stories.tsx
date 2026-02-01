import type { Meta, StoryObj } from "@storybook/react";
import { DotGrid } from "./DotGrid";
import { playfulGeometricDecorator } from "../../storyDecorator";

const meta = {
  title: "Playful Geometric/Components/DotGrid",
  component: DotGrid,
  decorators: [playfulGeometricDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "dense", "colorful"],
    },
  },
} satisfies Meta<typeof DotGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    className: "h-64 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]",
  },
};

export const Dense: Story = {
  args: {
    variant: "dense",
    className: "h-64 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]",
  },
};

export const Colorful: Story = {
  args: {
    variant: "colorful",
    className: "h-64 w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl">
      <DotGrid
        variant="default"
        className="h-48 rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]"
      >
        <div className="flex h-full items-center justify-center">
          <span className="font-[var(--font-heading)] font-bold text-[var(--color-text-primary)]">
            Default
          </span>
        </div>
      </DotGrid>
      <DotGrid
        variant="dense"
        className="h-48 rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]"
      >
        <div className="flex h-full items-center justify-center">
          <span className="font-[var(--font-heading)] font-bold text-[var(--color-text-primary)]">
            Dense
          </span>
        </div>
      </DotGrid>
      <DotGrid
        variant="colorful"
        className="h-48 rounded-[var(--radius-lg)] border-2 border-[var(--color-text-primary)] bg-[var(--color-surface-0)]"
      >
        <div className="flex h-full items-center justify-center">
          <span className="font-[var(--font-heading)] font-bold text-[var(--color-text-primary)]">
            Colorful
          </span>
        </div>
      </DotGrid>
    </div>
  ),
};
