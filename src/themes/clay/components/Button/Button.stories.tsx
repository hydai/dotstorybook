import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { clayDecorator } from "../../storyDecorator";

const meta = {
  title: "Clay/Components/Button",
  component: Button,
  decorators: [clayDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Get Started", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Learn More", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Settings", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "Cancel", variant: "ghost" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 items-center flex-wrap">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="outline">Settings</Button>
        <Button variant="ghost">Cancel</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </div>
    </div>
  ),
};
