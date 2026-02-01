import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/Button",
  component: Button,
  decorators: [businessStyleDecorator],
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
  args: { children: "Subscribe", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Learn More", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Read Article", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "Details", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "Get Started", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Unavailable", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="primary">Subscribe</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="ghost">Read Article</Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" size="sm">
          SM
        </Button>
        <Button variant="primary" size="md">
          MD
        </Button>
        <Button variant="primary" size="lg">
          LG
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" disabled>
          Unavailable
        </Button>
        <Button variant="secondary" disabled>
          Unavailable
        </Button>
      </div>
    </div>
  ),
};
