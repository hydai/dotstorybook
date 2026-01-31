import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/Badge",
  component: Badge,
  decorators: [artDecoDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["gold", "midnight", "outline"],
    },
    glow: { control: "boolean" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gold: Story = {
  args: { children: "VIP", variant: "gold" },
};

export const Midnight: Story = {
  args: { children: "MEMBER", variant: "midnight" },
};

export const Outline: Story = {
  args: { children: "RSVP", variant: "outline" },
};

export const WithGlow: Story = {
  args: { children: "PREMIERE", variant: "gold", glow: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="gold">VIP</Badge>
      <Badge variant="midnight">MEMBER</Badge>
      <Badge variant="outline">RSVP</Badge>
      <Badge variant="gold" glow>
        PREMIERE
      </Badge>
    </div>
  ),
};
