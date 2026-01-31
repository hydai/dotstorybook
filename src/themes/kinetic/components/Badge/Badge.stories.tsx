import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { kineticDecorator } from "../../storyDecorator";

const meta = {
  title: "Kinetic/Components/Badge",
  component: Badge,
  decorators: [kineticDecorator],
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
  args: { children: "BETA", variant: "muted" },
};

export const Outline: Story = {
  args: { children: "V2.0", variant: "outline" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge variant="accent">NEW</Badge>
      <Badge variant="muted">BETA</Badge>
      <Badge variant="outline">V2.0</Badge>
    </div>
  ),
};
