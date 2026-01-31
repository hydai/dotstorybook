import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/Badge",
  component: Badge,
  decorators: [terminalDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { children: "ONLINE", variant: "success" },
};

export const Error: Story = {
  args: { children: "FATAL", variant: "error" },
};

export const Warning: Story = {
  args: { children: "LOW MEM", variant: "warning" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="success">ONLINE</Badge>
      <Badge variant="error">FATAL</Badge>
      <Badge variant="warning">LOW MEM</Badge>
    </div>
  ),
};
