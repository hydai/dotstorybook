import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/Badge",
  component: Badge,
  decorators: [vaporwaveDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { children: "ONLINE", variant: "success" },
};

export const Error: Story = {
  args: { children: "OVERLOAD", variant: "error" },
};

export const Warning: Story = {
  args: { children: "UNSTABLE", variant: "warning" },
};

export const Info: Story = {
  args: { children: "STREAMING", variant: "info" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center flex-wrap">
      <Badge variant="success">ONLINE</Badge>
      <Badge variant="error">OVERLOAD</Badge>
      <Badge variant="warning">UNSTABLE</Badge>
      <Badge variant="info">STREAMING</Badge>
    </div>
  ),
};
