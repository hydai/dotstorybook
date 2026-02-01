import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/Badge",
  component: Badge,
  decorators: [academiaDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["brass", "crimson", "outline", "seal"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brass: Story = {
  args: { children: "SUMMA CUM LAUDE", variant: "brass" },
};

export const Crimson: Story = {
  args: { children: "PEER REVIEWED", variant: "crimson" },
};

export const Outline: Story = {
  args: { children: "FIRST EDITION", variant: "outline" },
};

export const Seal: Story = {
  args: { children: "A+", variant: "seal" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="brass">SUMMA CUM LAUDE</Badge>
      <Badge variant="crimson">PEER REVIEWED</Badge>
      <Badge variant="outline">FIRST EDITION</Badge>
      <Badge variant="seal">A+</Badge>
    </div>
  ),
};
