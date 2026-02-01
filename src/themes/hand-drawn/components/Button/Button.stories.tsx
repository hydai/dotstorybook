import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { handDrawnDecorator } from "../../storyDecorator";

const meta = {
  title: "Hand-Drawn/Components/Button",
  component: Button,
  decorators: [handDrawnDecorator],
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
  args: { children: "Quick sketch", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Note to self", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Draft ideas", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "Jot", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "Work in progress", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Erased", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center flex-wrap">
        <Button variant="primary">Quick sketch</Button>
        <Button variant="secondary">Note to self</Button>
        <Button variant="ghost">Draft ideas</Button>
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
          Erased
        </Button>
        <Button variant="secondary" disabled>
          Erased
        </Button>
      </div>
    </div>
  ),
};
