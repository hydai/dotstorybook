import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/Button",
  component: Button,
  decorators: [organicDecorator],
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
  args: { children: "Explore", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Harvest", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Learn More", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "Discover", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "Save", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "Begin Journey", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Unavailable", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center flex-wrap">
        <Button variant="primary">Explore</Button>
        <Button variant="secondary">Harvest</Button>
        <Button variant="outline">Learn More</Button>
        <Button variant="ghost">Discover</Button>
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
