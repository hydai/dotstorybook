import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Linear Modern/Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Badge", variant: "default" },
};

export const Accent: Story = {
  args: { children: "New Feature", variant: "accent" },
};

export const Outline: Story = {
  args: { children: "v2.0", variant: "outline" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
