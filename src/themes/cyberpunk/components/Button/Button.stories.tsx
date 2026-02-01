import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/Button",
  component: Button,
  decorators: [cyberpunkDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "glitch"],
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

export const Default: Story = {
  args: { children: "EXECUTE", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "OVERRIDE", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "SCAN", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "SKIP", variant: "ghost" },
};

export const Glitch: Story = {
  args: { children: "HACK", variant: "glitch" },
};

export const Small: Story = {
  args: { children: "OK", variant: "default", size: "sm" },
};

export const Large: Story = {
  args: { children: "INITIALIZE", variant: "default", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "LOCKED", variant: "default", disabled: true },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 items-center">
        <Button variant="default">EXECUTE</Button>
        <Button variant="secondary">OVERRIDE</Button>
        <Button variant="outline">SCAN</Button>
        <Button variant="ghost">SKIP</Button>
        <Button variant="glitch">HACK</Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="default" size="sm">
          SM
        </Button>
        <Button variant="default" size="md">
          MD
        </Button>
        <Button variant="default" size="lg">
          LG
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="default" disabled>
          LOCKED
        </Button>
        <Button variant="secondary" disabled>
          LOCKED
        </Button>
      </div>
    </div>
  ),
};
