import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { maximalismDecorator } from "../../storyDecorator";

const meta = {
  title: "Maximalism/Components/Button",
  component: Button,
  decorators: [maximalismDecorator],
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
  args: { children: "Let's Go!", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Explore More", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Sign Up Now", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "Learn More", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "Tiny!", size: "sm" },
};

export const Large: Story = {
  args: { children: "Go Big!", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Nope", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6 items-center flex-wrap">
        <Button variant="primary">Let's Go!</Button>
        <Button variant="secondary">Explore More</Button>
        <Button variant="outline">Sign Up Now</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
      <div className="flex gap-6 items-center">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      <div className="flex gap-6 items-center">
        <Button variant="primary" disabled>Disabled Primary</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
    </div>
  ),
};
