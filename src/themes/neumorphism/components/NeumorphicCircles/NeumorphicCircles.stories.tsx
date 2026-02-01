import type { Meta, StoryObj } from "@storybook/react";
import { NeumorphicCircles } from "./NeumorphicCircles";
import { neumorphismDecorator } from "../../storyDecorator";

const meta = {
  title: "Neumorphism/Components/NeumorphicCircles",
  component: NeumorphicCircles,
  decorators: [neumorphismDecorator],
  argTypes: {
    rings: { control: { type: "range", min: 2, max: 6 } },
    size: { control: "select", options: ["sm", "md", "lg"] },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof NeumorphicCircles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { rings: 4, size: "md" },
};

export const Animated: Story = {
  args: { rings: 4, size: "md", animated: true },
};

export const AllSizes: Story = {
  args: { rings: 3 },
  render: () => (
    <div className="flex gap-12 items-center">
      <div className="flex flex-col items-center gap-4">
        <NeumorphicCircles rings={3} size="sm" />
        <span className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Small
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <NeumorphicCircles rings={3} size="md" />
        <span className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Medium
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <NeumorphicCircles rings={3} size="lg" />
        <span className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Large
        </span>
      </div>
    </div>
  ),
};
