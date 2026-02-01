import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/Button",
  component: Button,
  decorators: [simpleDarkDecorator],
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
  args: { children: "Get Started", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Learn More", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Cancel", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "OK", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "Continue", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Unavailable", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="ghost">Cancel</Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
};
