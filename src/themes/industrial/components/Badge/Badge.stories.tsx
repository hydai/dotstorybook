import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { industrialDecorator } from "../../storyDecorator";

const meta = {
  title: "Industrial/Components/Badge",
  component: Badge,
  decorators: [industrialDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info", "accent"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { children: "Online", variant: "success" },
};

export const Error: Story = {
  args: { children: "Critical", variant: "error" },
};

export const Warning: Story = {
  args: { children: "Caution", variant: "warning" },
};

export const Info: Story = {
  args: { children: "Standby", variant: "info" },
};

export const Accent: Story = {
  args: { children: "Active", variant: "accent" },
};

export const AllVariants: Story = {
  args: { children: "Status" },
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge variant="success">Online</Badge>
      <Badge variant="error">Critical</Badge>
      <Badge variant="warning">Caution</Badge>
      <Badge variant="info">Standby</Badge>
      <Badge variant="accent">Active</Badge>
    </div>
  ),
};
