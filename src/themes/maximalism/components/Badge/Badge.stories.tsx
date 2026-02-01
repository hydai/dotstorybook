import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { maximalismDecorator } from "../../storyDecorator";

const meta = {
  title: "Maximalism/Components/Badge",
  component: Badge,
  decorators: [maximalismDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["magenta", "cyan", "yellow", "orange", "purple"],
    },
    pulse: { control: "boolean" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Magenta: Story = {
  args: { children: "Hot!", variant: "magenta" },
};

export const Cyan: Story = {
  args: { children: "Fresh", variant: "cyan" },
};

export const Yellow: Story = {
  args: { children: "New", variant: "yellow" },
};

export const Orange: Story = {
  args: { children: "Fire", variant: "orange" },
};

export const Purple: Story = {
  args: { children: "Vibes", variant: "purple" },
};

export const WithPulse: Story = {
  args: { children: "Live!", variant: "magenta", pulse: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="magenta">Hot!</Badge>
      <Badge variant="cyan">Fresh</Badge>
      <Badge variant="yellow">New</Badge>
      <Badge variant="orange">Fire</Badge>
      <Badge variant="purple">Vibes</Badge>
      <Badge variant="magenta" pulse>Live!</Badge>
    </div>
  ),
};
