import type { Meta, StoryObj } from "@storybook/react";
import { SketchDivider } from "./SketchDivider";
import { handDrawnDecorator } from "../../storyDecorator";

const meta = {
  title: "Hand-Drawn/Components/SketchDivider",
  component: SketchDivider,
  decorators: [handDrawnDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["squiggly", "dashed", "zigzag"],
    },
    color: {
      control: "select",
      options: ["pencil", "red", "blue"],
    },
  },
} satisfies Meta<typeof SketchDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Squiggly: Story = {
  args: { variant: "squiggly", color: "pencil" },
};

export const Dashed: Story = {
  args: { variant: "dashed", color: "pencil" },
};

export const Zigzag: Story = {
  args: { variant: "zigzag", color: "pencil" },
};

export const RedSquiggly: Story = {
  args: { variant: "squiggly", color: "red" },
};

export const BlueDashed: Story = {
  args: { variant: "dashed", color: "blue" },
};

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <SketchDivider variant="squiggly" color="pencil" />
      <SketchDivider variant="dashed" color="pencil" />
      <SketchDivider variant="zigzag" color="pencil" />
      <SketchDivider variant="squiggly" color="red" />
      <SketchDivider variant="dashed" color="red" />
      <SketchDivider variant="zigzag" color="red" />
      <SketchDivider variant="squiggly" color="blue" />
      <SketchDivider variant="dashed" color="blue" />
      <SketchDivider variant="zigzag" color="blue" />
    </div>
  ),
};
