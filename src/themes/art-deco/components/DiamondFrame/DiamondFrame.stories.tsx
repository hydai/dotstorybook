import type { Meta, StoryObj } from "@storybook/react";
import { DiamondFrame } from "./DiamondFrame";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/DiamondFrame",
  component: DiamondFrame,
  decorators: [artDecoDecorator],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    glow: { control: "boolean" },
    borderWidth: {
      control: "select",
      options: [1, 2, 3],
    },
  },
} satisfies Meta<typeof DiamondFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    children: (
      <span className="text-lg font-[var(--font-heading)]">I</span>
    ),
  },
};

export const WithGlow: Story = {
  args: {
    size: "md",
    glow: true,
    children: (
      <span className="text-lg font-[var(--font-heading)]">II</span>
    ),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    glow: true,
    children: (
      <span className="text-2xl font-[var(--font-heading)]">III</span>
    ),
  },
};

export const AllSizes: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-12 items-center">
      <DiamondFrame size="sm">
        <span className="text-xs font-[var(--font-heading)]">I</span>
      </DiamondFrame>
      <DiamondFrame size="md" glow>
        <span className="text-lg font-[var(--font-heading)]">II</span>
      </DiamondFrame>
      <DiamondFrame size="lg" glow>
        <span className="text-2xl font-[var(--font-heading)]">III</span>
      </DiamondFrame>
    </div>
  ),
};
