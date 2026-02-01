import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { botanicalDecorator } from "../../storyDecorator";

const meta = {
  title: "Botanical/Components/Badge",
  component: Badge,
  decorators: [botanicalDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["sage", "terracotta", "outline", "clay"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sage: Story = {
  args: { children: "ORGANIC", variant: "sage" },
};

export const Terracotta: Story = {
  args: { children: "FEATURED", variant: "terracotta" },
};

export const Outline: Story = {
  args: { children: "SEASONAL", variant: "outline" },
};

export const Clay: Story = {
  args: { children: "PERENNIAL", variant: "clay" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="sage">ORGANIC</Badge>
      <Badge variant="terracotta">FEATURED</Badge>
      <Badge variant="outline">SEASONAL</Badge>
      <Badge variant="clay">PERENNIAL</Badge>
    </div>
  ),
};
