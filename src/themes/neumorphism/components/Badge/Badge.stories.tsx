import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { neumorphismDecorator } from "../../storyDecorator";

const meta = {
  title: "Neumorphism/Components/Badge",
  component: Badge,
  decorators: [neumorphismDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["accent", "success", "error", "warning", "info"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: { children: "New Feature", variant: "accent" },
};

export const Success: Story = {
  args: { children: "Completed", variant: "success" },
};

export const Error: Story = {
  args: { children: "Failed", variant: "error" },
};

export const Warning: Story = {
  args: { children: "Pending", variant: "warning" },
};

export const Info: Story = {
  args: { children: "In Progress", variant: "info" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="accent">New Feature</Badge>
      <Badge variant="success">Completed</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="info">In Progress</Badge>
    </div>
  ),
};
