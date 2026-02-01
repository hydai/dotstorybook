import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/Badge",
  component: Badge,
  decorators: [cryptoDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info", "accent"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: { children: "Bitcoin", variant: "accent" },
};

export const Success: Story = {
  args: { children: "Confirmed", variant: "success" },
};

export const Error: Story = {
  args: { children: "Failed", variant: "error" },
};

export const Warning: Story = {
  args: { children: "Pending", variant: "warning" },
};

export const Info: Story = {
  args: { children: "Syncing", variant: "info" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="accent">Bitcoin</Badge>
      <Badge variant="success">Confirmed</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="info">Syncing</Badge>
    </div>
  ),
};
