import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { playfulGeometricDecorator } from "../../storyDecorator";

const meta = {
  title: "Playful Geometric/Components/Button",
  component: Button,
  decorators: [playfulGeometricDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
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
  args: { children: "Click Me!", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Let's Go!", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Learn More", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "Tiny", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "Big Button!", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Can't Touch This", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary" disabled>Disabled Primary</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
        <Button variant="ghost" disabled>Disabled Ghost</Button>
      </div>
    </div>
  ),
};
