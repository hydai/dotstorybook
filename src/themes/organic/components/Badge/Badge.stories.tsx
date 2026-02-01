import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/Badge",
  component: Badge,
  decorators: [organicDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "accent", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Organic", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Fresh", variant: "secondary" },
};

export const Accent: Story = {
  args: { children: "Seasonal", variant: "accent" },
};

export const Outline: Story = {
  args: { children: "Local", variant: "outline" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-3 items-center">
      <Badge variant="default">Organic</Badge>
      <Badge variant="secondary">Fresh</Badge>
      <Badge variant="accent">Seasonal</Badge>
      <Badge variant="outline">Local</Badge>
    </div>
  ),
};
