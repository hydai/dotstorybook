import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/Badge",
  component: Badge,
  decorators: [businessStyleDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["gold", "dark", "outline", "muted"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gold: Story = {
  args: { children: "Featured", variant: "gold" },
};

export const Dark: Story = {
  args: { children: "Analysis", variant: "dark" },
};

export const Outline: Story = {
  args: { children: "Premium", variant: "outline" },
};

export const Muted: Story = {
  args: { children: "Archived", variant: "muted" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="gold">Featured</Badge>
      <Badge variant="dark">Analysis</Badge>
      <Badge variant="outline">Premium</Badge>
      <Badge variant="muted">Archived</Badge>
    </div>
  ),
};
