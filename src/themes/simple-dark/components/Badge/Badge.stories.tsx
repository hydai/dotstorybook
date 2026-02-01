import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/Badge",
  component: Badge,
  decorators: [simpleDarkDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "outline"],
    },
    dot: { control: "boolean" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Status", variant: "default" },
};

export const Accent: Story = {
  args: { children: "Active", variant: "accent" },
};

export const Outline: Story = {
  args: { children: "Draft", variant: "outline" },
};

export const WithDot: Story = {
  args: { children: "Live", variant: "accent", dot: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <Badge variant="default">Default</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex gap-3 items-center">
        <Badge variant="accent" dot>
          Live
        </Badge>
        <Badge variant="default" dot>
          Active
        </Badge>
        <Badge variant="outline" dot>
          Pending
        </Badge>
      </div>
    </div>
  ),
};
