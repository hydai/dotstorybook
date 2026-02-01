import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { botanicalDecorator } from "../../storyDecorator";

const meta = {
  title: "Botanical/Components/Button",
  component: Button,
  decorators: [botanicalDecorator],
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
  args: { children: "EXPLORE", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "VIEW GARDEN", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "LEARN MORE", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "SAVE", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "BEGIN JOURNEY", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "UNAVAILABLE", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="primary">EXPLORE</Button>
        <Button variant="secondary">VIEW GARDEN</Button>
        <Button variant="ghost">LEARN MORE</Button>
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
          UNAVAILABLE
        </Button>
        <Button variant="secondary" disabled>
          UNAVAILABLE
        </Button>
      </div>
    </div>
  ),
};
