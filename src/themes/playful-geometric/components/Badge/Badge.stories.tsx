import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { playfulGeometricDecorator } from "../../storyDecorator";

const meta = {
  title: "Playful Geometric/Components/Badge",
  component: Badge,
  decorators: [playfulGeometricDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["accent", "secondary", "tertiary", "quaternary", "outline"],
    },
    dot: { control: "boolean" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: { children: "Violet", variant: "accent" },
};

export const Secondary: Story = {
  args: { children: "Pink", variant: "secondary" },
};

export const Tertiary: Story = {
  args: { children: "Amber", variant: "tertiary" },
};

export const Quaternary: Story = {
  args: { children: "Mint", variant: "quaternary" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const WithDot: Story = {
  args: { children: "Active", variant: "accent", dot: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="accent">Violet</Badge>
      <Badge variant="secondary">Pink</Badge>
      <Badge variant="tertiary">Amber</Badge>
      <Badge variant="quaternary">Mint</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="accent" dot>Active</Badge>
      <Badge variant="secondary" dot>Live</Badge>
      <Badge variant="tertiary" dot>New</Badge>
      <Badge variant="quaternary" dot>Online</Badge>
    </div>
  ),
};
