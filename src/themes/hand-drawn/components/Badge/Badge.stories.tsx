import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { handDrawnDecorator } from "../../storyDecorator";

const meta = {
  title: "Hand-Drawn/Components/Badge",
  component: Badge,
  decorators: [handDrawnDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["pencil", "red", "blue", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pencil: Story = {
  args: { children: "Draft", variant: "pencil" },
};

export const Red: Story = {
  args: { children: "Important!", variant: "red" },
};

export const Blue: Story = {
  args: { children: "Note", variant: "blue" },
};

export const Outline: Story = {
  args: { children: "WIP", variant: "outline" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center flex-wrap">
      <Badge variant="pencil">Draft</Badge>
      <Badge variant="red">Important!</Badge>
      <Badge variant="blue">Note</Badge>
      <Badge variant="outline">WIP</Badge>
    </div>
  ),
};
