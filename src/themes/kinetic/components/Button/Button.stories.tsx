import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { kineticDecorator } from "../../storyDecorator";

const meta = {
  title: "Kinetic/Components/Button",
  component: Button,
  decorators: [kineticDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline", "ghost"],
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
  args: { children: "GET STARTED", variant: "primary" },
};

export const Outline: Story = {
  args: { children: "LEARN MORE", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "SKIP", variant: "ghost" },
};

export const Small: Story = {
  args: { children: "OK", variant: "primary", size: "sm" },
};

export const Large: Story = {
  args: { children: "LAUNCH NOW", variant: "primary", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "UNAVAILABLE", variant: "primary", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 items-center">
        <Button variant="primary">GET STARTED</Button>
        <Button variant="outline">LEARN MORE</Button>
        <Button variant="ghost">SKIP</Button>
      </div>
      <div className="flex gap-4 items-center">
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
      <div className="flex gap-4 items-center">
        <Button variant="primary" disabled>
          DISABLED
        </Button>
        <Button variant="outline" disabled>
          DISABLED
        </Button>
      </div>
    </div>
  ),
};
