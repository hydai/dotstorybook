import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { corporateTrustDecorator } from "../../storyDecorator";

const meta = {
  title: "Corporate Trust/Components/Badge",
  component: Badge,
  decorators: [corporateTrustDecorator],
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
  args: { children: "Active", variant: "success" },
};

export const Error: Story = {
  args: { children: "Failed", variant: "error" },
};

export const Warning: Story = {
  args: { children: "Pending", variant: "warning" },
};

export const Info: Story = {
  args: { children: "Updated", variant: "info" },
};

export const Accent: Story = {
  args: { children: "New Feature", variant: "accent" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge variant="success">Active</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="info">Updated</Badge>
      <Badge variant="accent">New Feature</Badge>
    </div>
  ),
};
