import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { boldTypographyDecorator } from "../../storyDecorator";

const meta = {
  title: "Bold Typography/Components/Badge",
  component: Badge,
  decorators: [boldTypographyDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["accent", "muted", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: { children: "NEW", variant: "accent" },
};

export const Muted: Story = {
  args: { children: "DRAFT", variant: "muted" },
};

export const Outline: Story = {
  args: { children: "VOL. 01", variant: "outline" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge variant="accent">NEW</Badge>
      <Badge variant="muted">DRAFT</Badge>
      <Badge variant="outline">VOL. 01</Badge>
    </div>
  ),
};
