import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/Badge",
  component: Badge,
  decorators: [retroDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "new", "hot", "success", "warning"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "BADGE", variant: "default" },
};

export const New: Story = {
  args: { children: "NEW!", variant: "new" },
};

export const Hot: Story = {
  args: { children: "HOT!", variant: "hot" },
};

export const Success: Story = {
  args: { children: "OK", variant: "success" },
};

export const Warning: Story = {
  args: { children: "CAUTION", variant: "warning" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-4 items-center flex-wrap">
      <Badge variant="default">BADGE</Badge>
      <Badge variant="new">NEW!</Badge>
      <Badge variant="hot">HOT!</Badge>
      <Badge variant="success">OK</Badge>
      <Badge variant="warning">CAUTION</Badge>
    </div>
  ),
};
